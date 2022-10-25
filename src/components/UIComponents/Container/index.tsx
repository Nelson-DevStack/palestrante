import { UIComponent } from "../../../types/UIComponent";

const Container: React.FC<UIComponent> = ({ children, className }) => {
  return (
    <div className={`container mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
