import React, { FC } from 'react';

interface QuestionGroupProps {
  questionIds: number[];
  currentAnswers: { [key: string]: string | undefined };
  onAnswerChange: (questionId: number, answer: string | undefined) => void;
}

const QuestionGroup: FC<QuestionGroupProps> = ({ questionIds, currentAnswers, onAnswerChange }) => {
  return (
    <div className="mb-4 flex flex-row flex-wrap">
      {questionIds.map((questionId) => (
        <div key={questionId} className="m-1 border-2 rounded-2xl p-2 border-amber-500">
          <label className="flex text-yellow-700 text-sm font-bold mb-2">
            Câu {questionId}:
          </label>
          <div className="flex space-x-2">
            {['A', 'B', 'C', 'D'].map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  name={`question-${questionId}`}
                  value={option}
                  checked={currentAnswers[questionId?.toString()] === option}
                  onChange={(e) => onAnswerChange(questionId, e.target.value)}
                  className="mr-2 leading-tight"
                />
                <label className="text-gray-700 text-sm">{option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionGroup;