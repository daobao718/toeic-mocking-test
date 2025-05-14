import React, { ChangeEvent, FC, useState, useMemo } from 'react';
import Select, {Options} from 'react-select';
import QuestionGroup from './QuestionGroup';
import { useSelector, useDispatch } from 'react-redux';
import { updateAnswer } from '../store/actions';
import { RootState } from '../store/state';
import { AppDispatch } from '../store/index.ts';
import { Container } from 'postcss';

interface AnswerInputProps {}

const AnswerInput: FC<AnswerInputProps> = () => {
  const answers = useSelector((state: RootState) => state.answers);
  const dispatch = useDispatch<AppDispatch>();

  const handleAnswerChange = (questionId: number, answer: string | undefined) => {
    dispatch(updateAnswer({ questionId: questionId.toString(), answer }));
  };

  const [questionsPerPage, setQuestionPerPage] = useState<number>(20);

  const questionGroups: number[][] = useMemo(() => {
    const groups: number[][] = [];
    const totalQuestions = 200;
    
    if (typeof questionsPerPage === 'number' && questionsPerPage > 0) {
      for (let i = 0; i < totalQuestions; i += questionsPerPage) {
        const group = Array.from({ length: Math.min(questionsPerPage, totalQuestions - i) }, (_, j) => i + j + 1);
        groups.push(group);
      }
    }

    return groups;
  }, [questionsPerPage]);

  const options: Options<{ value: string; label: string }> = [
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
  ];

  const handleChange = (selectedOption: { value: string; label: string } | null) => {
    if (selectedOption) {
      setQuestionPerPage(parseInt(selectedOption.value, 10));
    }
  };

  return (
    <div>
      <div className="flex flex-row-reverse">
        <div>
            <label className='mr-2'>Số câu hỏi mỗi trang: </label>
            <Select options={options}  onChange={handleChange} className=""/>
        </div>
      </div>
      <div className="">
          {questionGroups.map((group, index) => (
            <QuestionGroup
              key={index}
              questionIds={group}
              currentAnswers={answers}
              onAnswerChange={handleAnswerChange}
            />
          ))}
      </div>


    </div>
  );
};

export default AnswerInput;