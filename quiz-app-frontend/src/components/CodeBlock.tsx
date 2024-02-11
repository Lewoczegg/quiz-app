
export interface CodeBlockProps {
  code: string;
}

const CodeBlock = ({ code }: CodeBlockProps) => {
  return (
    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
      <code className="text-sm">{code}</code>
    </pre>
  );
};

export default CodeBlock;
