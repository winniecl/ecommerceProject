/*ordinary css
.categories-container{
    background-color: red;
    padding: 10px;
}
.categories-container .category-container{
    background-color: green;
    padding: 10px;
}
.categories-container .category-container .category-body-container{
    background-color: blue;
    padding: 10px;
}*/
/* sass
.categories-container{
    background-color: red;
    padding: 10px;
    .category-container{
        background-color: green;
        padding: 10px;
        .category-body-container{
            background-color: blue;
            padding: 10px;
        }
    }
}*/
import styled from "styled-components";
export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
// .directory-container {

//   }
