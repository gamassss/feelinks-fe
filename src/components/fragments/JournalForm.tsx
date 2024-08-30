import { ChatBubbleIcon, UploadIcon } from "@radix-ui/react-icons";
import TextArea from "../atoms/TextArea";
import { Button } from "../ui/button";
import StarsIcon from "../icons/stars";

interface JournalFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  height?: string;
}

const JournalForm: React.FC<JournalFormProps> = ({ handleSubmit, height = '320px' }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextArea height={height} placeholder="Write your thoughts here..." />
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Button variant="outline">
            <UploadIcon className="mr-2 h-4 w-4" /> Upload
          </Button>
        </div>
        <div className="flex items-center gap-x-2">
          <Button variant="default">
            <StarsIcon className="mr-2 text-white dark:text-black" />
            Save and Analyze
          </Button>
          <Button variant="default" size="icon">
            <ChatBubbleIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default JournalForm;