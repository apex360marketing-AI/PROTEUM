import { quizQuestions } from "../content/quiz-questions";
import { allCompounds, lifestyleRecommendations } from "../content/knowledge-base";
import { allVendors } from "../content/vendors";
import { OTHER_VALUE } from "../content/quiz-questions";

let hasErrors = false;
function error(msg: string) {
  console.error("❌ " + msg);
  hasErrors = true;
}

// 1. Validate Questions
const questionIds = new Set<string>();
const questionOptions = new Map<string, Set<string>>();

for (const q of quizQuestions) {
  if (questionIds.has(q.id)) {
    error(`Duplicate question ID: ${q.id}`);
  }
  questionIds.add(q.id);

  const options = new Set<string>();
  if (q.options) {
    for (const opt of q.options) {
      if (options.has(opt.value)) {
        error(`Duplicate option value '${opt.value}' in question '${q.id}'`);
      }
      options.add(opt.value);
    }
  }
  if (q.allowOther) options.add(OTHER_VALUE);
  questionOptions.set(q.id, options);
}

// 2. Validate Compounds and match signals
const compoundIds = new Set<string>();
for (const c of allCompounds) {
  if (compoundIds.has(c.id)) {
    error(`Duplicate compound ID: ${c.id}`);
  }
  compoundIds.add(c.id);

  for (const signal of c.matchSignals) {
    if (!questionIds.has(signal.questionId)) {
      error(`Compound '${c.id}' has matchSignal for unknown question '${signal.questionId}'`);
    } else {
      const allowed = questionOptions.get(signal.questionId);
      if (allowed && !allowed.has(signal.answerValue)) {
         error(`Compound '${c.id}' has matchSignal for unknown answer '${signal.answerValue}' in question '${signal.questionId}'`);
      }
    }
  }
}

// 3. Validate Vendors
const vendorIds = new Set<string>();
for (const v of allVendors) {
  if (vendorIds.has(v.id)) {
    error(`Duplicate vendor ID: ${v.id}`);
  }
  vendorIds.add(v.id);

  for (const product of v.carriedCompounds) {
    if (!compoundIds.has(product.compoundId)) {
      error(`Vendor '${v.id}' carries unknown compound '${product.compoundId}'`);
    }
  }
}

if (hasErrors) {
  console.error("\nValidation failed.");
  process.exit(1);
} else {
  console.log("✅ Schema validation passed.");
}
