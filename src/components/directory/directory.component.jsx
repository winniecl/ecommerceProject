import directory from "../directory-item/directory.json";
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.style";

const Directory = () => {
  return (
    <DirectoryContainer>
      {directory.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};
export default Directory;
