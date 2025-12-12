import "./Title.css";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <div className="title">
      <h2>{text}</h2>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;
