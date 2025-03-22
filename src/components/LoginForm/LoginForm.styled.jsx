import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid #efefef;
  background: linear-gradient(45deg, #FF6B6B, #3E8AC5);
  padding: 20px;

  /* Responsive design */
  @media (max-width: 768px) {
    max-width: 90%;
    margin-top: 30px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  font-size: 1.2rem;
  font-weight: 500;

  /* Responsive design */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 30px;
  }
`;

export const Input = styled.input`
  width: 250px;
  padding: 15px 20px;
  color: #000000;
  background: #efefef;
  border-radius: 18px;
  border: 1px solid #efefef;
  box-sizing: border-box;
  font-size: 1rem;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ::placeholder {
    color: #757575;
  }

  :hover,
  :focus {
    border: 1px solid #000000;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 1.2rem;
  margin-top: 20px;
  margin-bottom: 5px;
  padding: 15px 40px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
              color 250ms cubic-bezier(0.4, 0, 0.2, 1),
              border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: white;
    background-color: black;
    border: 1px solid #000000;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    padding: 12px 30px;
  }
`;

export const LoggedLink = styled(NavLink)`
  margin: 10px 0;
  color: black;
  cursor: pointer;

  :hover,
  :focus {
    color: white;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;



// import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   max-width: 500px;
//   border: 1px solid #efefef;
//   margin:0 auto;
//   margin-top: 50px;
//    background: linear-gradient(45deg, #FF6B6B, #3E8AC5);
  
// `;

// export const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   margin-top: 50px;
//   font-size: 20px;
//   font-weight: 500;
// `;

// export const Input = styled.input`
//   width: 250px;
//   padding: 25px 30px;
//   color: #000000;
//   // background: #efefef;
//   // ckground-color: light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4));
//   border-radius: 18px;
//   border: 1px solid #efefef;
//   ::placeholder {
//     color: #757575;
//   }
// transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   :hover,
//   :focus {
//     border: 1px solid #000000;
//   }
// `;

// export const Button = styled.button`
//   font-weight: 600;
//   font-size: 20px;
//   margin-top: 20px;
//   margin-bottom: 5px;
//   padding: 15px 40px;
//   // background-color: whitesmoke;
//   border: 1px solid black;
//   border-radius: 10px;
//   cursor: pointer;
//   transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   :hover,
//   :focus {
//     color: white;
//     background-color: black;
//     border: 1px solid #000000;
//   }
// `;

// export const LoggedLink = styled(NavLink)`
//   margin: 10px 0;
//   color: black;
//   cursor: pointer;
//   :hover,
//   :focus {
//     color: white;
//   }
// `;