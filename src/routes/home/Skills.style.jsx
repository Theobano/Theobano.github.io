import styled from "styled-components";

export const StyledSkill = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
`;

export const StyledSkills = styled.div`
width: 100%;
    padding: 0 2em;

    .skills-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2em;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
`;
