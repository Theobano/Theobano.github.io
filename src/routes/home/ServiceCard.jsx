// import "./ServiceCard.css";
import { IconContext } from "react-icons";
import styled from "styled-components";

const StyledServiceCard = styled.div`
height: 100%;
  .service {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
    padding: 2em;
    box-shadow: 0 0 10px 0 var(--color-shadow-mute);
    border: thin solid var(--color-secondary);
    border-radius:10px;

    :hover {
      box-shadow: 0 0 5px 0 var(--color-shadow);
    }

    .title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    h3 {
      font-size: 1.5em;
      margin: 0;
    }

    .service-skills {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        > ul {
          list-style: none;
      display: flex;
      flex-direction: row;
      gap: 0.5em;
        margin: 0;
        padding: 0;

        li {
            > svg {
                :hover{
                    filter: brightness(50%);
                }
        }
      
    }

}
  }
`;

function ServiceCard({ title, icon, children, skills }) {
  const skillsList = skills?.map((skill, index) => (
    <li key={index} className="skill">
      {skill}
    </li>
  ));
  return (
    <StyledServiceCard>
      <div className="service">
        <div className="row space-between title">
          <h3>{title}</h3>
          <div className="service-icon">
            <IconContext.Provider
              value={{ size: "1em", style: { verticalAlign: "middle" } }}
            >
              {icon}
            </IconContext.Provider>
          </div>
        </div>
        {children}
        <footer className="service-skills">
          <ul>
            <IconContext.Provider
              value={{ size: "1.5em", style: { verticalAlign: "middle" } }}
            >
              {skillsList}
            </IconContext.Provider>
          </ul>
        </footer>
      </div>
    </StyledServiceCard>
  );
}

export default ServiceCard;
