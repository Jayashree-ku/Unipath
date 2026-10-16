import React, { useState } from 'react';
import { 
  QUIZ_QUESTIONS, 
  INTEREST_PROFILES, 
  UNIVERSITY_PROGRAMMES 
} from '../data/engineeringData';
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  AlertCircle, 
  ExternalLink,
  BookOpen,
  Compass
} from 'lucide-react';

export default function FitQuiz({ onLaunchSimulator, onExploreSapthagiri }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [questionIndex]: optionIndex }
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResults, setQuizResults] = useState(null);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const isSelected = selectedAnswers[currentQuestionIndex] !== undefined;

  const handleSelectOption = (optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    // Deterministic category scoring
    const scores = {
      ai: 0,
      swe: 0,
      ds: 0,
      ece: 0,
      eee: 0,
      explore: 0
    };

    Object.entries(selectedAnswers).forEach(([qIndex, optIndex]) => {
      const q = QUIZ_QUESTIONS[parseInt(qIndex, 10)];
      const option = q.options[optIndex];
      if (option && scores[option.category] !== undefined) {
        scores[option.category] += option.weight;
      }
    });

    // Sort categories by score descending
    const sortedCategories = Object.entries(scores)
      .filter(([cat]) => cat !== 'explore') // Primary specific disciplines
      .sort((a, b) => b[1] - a[1]);

    const totalScorePoints = Object.values(scores).reduce((sum, v) => sum + v, 0) || 1;

    // Pick top 3 categories
    const topMatches = sortedCategories.slice(0, 3).map(([categoryKey, score]) => {
      const profile = INTEREST_PROFILES[categoryKey];
      const matchPercentage = Math.min(96, Math.max(45, Math.round((score / 21) * 100)));
      return {
        key: categoryKey,
        score,
        matchPercentage,
        ...profile
      };
    });

    setQuizResults({
      scores,
      topMatches,
      primaryCategory: topMatches[0].key
    });
    setQuizCompleted(true);
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setQuizResults(null);
  };

  const progressPercentage = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  return (
    <section id="quiz" className="py-16 bg-[#0B1220] border-t border-slate-800 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Interest Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Discover Your Engineering Fit
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Answer 7 scenario-based questions to uncover the engineering disciplines that align with your natural curiosity, problem-solving style, and future ambitions.
          </p>
        </div>

        {/* Quiz Flow Card */}
        <div className="bg-[#111827] rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
          
          {!quizCompleted ? (
            <div className="p-6 sm:p-10">
              
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-2">
                  <span className="font-mono text-blue-400 font-semibold">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
                  <span>{progressPercentage}% Complete</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {currentQuestion.question}
                </h3>
                {currentQuestion.subtitle && (
                  <p className="text-sm text-slate-400 mt-1.5">
                    {currentQuestion.subtitle}
                  </p>
                )}
              </div>

              {/* Multiple Choice Answers */}
              <div className="space-y-3" role="radiogroup" aria-label={currentQuestion.question}>
                {currentQuestion.options.map((option, idx) => {
                  const isChecked = selectedAnswers[currentQuestionIndex] === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      role="radio"
                      aria-checked={isChecked}
                      className={`w-full text-left p-4 sm:p-4.5 rounded-xl border transition-all duration-150 flex items-start gap-3.5 cursor-pointer ${
                        isChecked
                          ? 'bg-blue-600/10 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/50'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked ? 'border-blue-500 bg-blue-600' : 'border-slate-600 bg-slate-950'
                      }`}>
                        {isChecked && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <span className="text-sm sm:text-base font-normal leading-relaxed">
                        {option.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 cursor-pointer transition-colors ${
                    currentQuestionIndex === 0
                      ? 'text-slate-600 cursor-not-allowed opacity-50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isSelected}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <span>{currentQuestionIndex === totalQuestions - 1 ? 'View My Results' : 'Next Question'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800/60 text-xs text-slate-400">
                <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Exploration Notice:</strong> This quiz is an exploration tool, not a definitive career or admissions assessment. Suggested matches are deterministic guides to encourage thoughtful research.
                </span>
              </div>

            </div>
          ) : (
            /* Results Screen */
            <div className="p-6 sm:p-10">
              
              <div className="text-center pb-8 border-b border-slate-800">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">Discovery Complete</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Your Engineering Fit Profile
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
                  Based on your answers, here are your top 3 recommended engineering areas to explore at Sapthagiri NPS University:
                </p>
              </div>

              {/* Top Matches Breakdown */}
              <div className="mt-8 space-y-6">
                {quizResults.topMatches.map((match, idx) => (
                  <div 
                    key={match.key} 
                    className={`p-6 rounded-xl border transition-all ${
                      idx === 0
                        ? 'bg-slate-900 border-blue-500/60 shadow-lg ring-1 ring-blue-500/30'
                        : 'bg-slate-900/50 border-slate-800'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg text-xs font-bold font-mono flex items-center justify-center ${
                          idx === 0 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'
                        }`}>
                          #{idx + 1}
                        </span>
                        <div>
                          <h4 className="text-lg font-bold text-white">{match.title}</h4>
                          <p className="text-xs text-blue-400">{match.tagline}</p>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-semibold self-start sm:self-center">
                        <span>{match.matchPercentage}% Alignment</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {match.description}
                    </p>

                    {/* Why Matched explanation */}
                    <div className="p-3.5 rounded-lg bg-[#0B1220] border border-slate-800 mb-4 text-xs">
                      <span className="font-semibold text-slate-300 block mb-1">Why this matched your answers:</span>
                      <p className="text-slate-400 leading-relaxed">{match.whyMatched}</p>
                    </div>

                    {/* Recommended Branches at Sapthagiri */}
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        Matching Programmes at Sapthagiri NPS University:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {match.recommendedBranches.map((branchName, bIdx) => (
                          <span 
                            key={bIdx}
                            className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700/80"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                            <span>{branchName}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Starter Project Idea */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2">
                      <div>
                        <strong className="text-slate-300">Suggested Starter Project: </strong>
                        <span>{match.starterProject}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 text-sm font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Quiz</span>
                </button>

                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => onExploreSapthagiri()}
                    className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    <span>View University Programmes</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onLaunchSimulator(quizResults.primaryCategory)}
                    className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 cursor-pointer transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Simulate This Journey</span>
                  </button>
                </div>
              </div>

              {/* Scientific disclaimer */}
              <p className="mt-6 text-center text-xs text-slate-500 max-w-lg mx-auto">
                Official branch allotment at Sapthagiri NPS University occurs strictly according to formal eligibility and counseling guidelines. UNIPATH is an independent discovery tool.
              </p>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
