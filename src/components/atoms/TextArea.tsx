import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  height?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ height = '320px', ...props }) => {
  return (
    <textarea
      style={{ height }}
      className="block p-2.5 w-full text-sm mb-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
      {...props}
    ></textarea>
  );
};

export default TextArea;