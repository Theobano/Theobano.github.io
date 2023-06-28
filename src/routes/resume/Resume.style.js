import styled from "styled-components";

export const ResumeContainer = styled.div`
  --primary-color: #f5f5f5;
  --secondary-color: #3b4d61;
  --tertiary-color: #333333;
  --primary-text-color: #000000;
  --secondary-text-color: #ffffff;

  background-color: var(--primary-color);
  color: var(--primary-text-color);

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media screen {
    @media (max-width: 440px) {
      word-wrap: break-word;
    }
  }

  .print-button {
    position: fixed;
    top: 1em;
    right: 1em;
    z-index: 100;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: thin solid var(--secondary-color);
    padding: 0.5em 2em;
    font-size: 1em;
    cursor: pointer;
    box-shadow: 0 0 0.5em var(--theme-color);
    opacity: 0.5;

    &:hover {
      background-color: var(--tertiary-color);
      color: var(--primary-color);
    }

    &:active {
      background-color: var(--primary-color);
      color: var(--secondary-color);
    }

    @media print {
      display: none;
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    text-align: center;

    background-color: var(--secondary-color);
    color: var(--secondary-text-color);
    padding: 2em;

    @media screen {
      @media (max-width: 440px) {
        padding: 1em;
        font-size: 0.8em;
        word-wrap: break-word;
      }
    }

    .name {
      font-size: 3em;
      font-weight: bold;
      margin: 0;
      padding: 0;
      text-align: center;
    }

    .title {
      font-size: 1.5em;
      font-style: italic;
    }
  }

  main,
  .main {
    display: grid;
    grid-template-columns: 1fr 3fr;

    @media screen {
      @media (max-width: 440px) {
        display: flex;
        flex-direction: column;
      }
    }

    .sidebar {
      padding: 1em;
      display: flex;
      flex-direction: column;
      gap: 2em;
      border-right: thin solid var(--theme-color);
      * {
        color: var(--primary-text-color);
      }

      .contact-container {
        display: flex;
        flex-direction: column;
        /* align-items: flex-end;
        justify-content: space-between; */

        .contact {
          display: flex;
          flex-direction: column;
          /* max-width: 30%; */
          gap: 0.2em;

          .contact-item {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            gap: 0.5em;

            @media screen {
              @media (max-width: 440px) {
                flex-wrap: wrap;
              }
            }

            .contact-item-icon {
              font-size: 1em;
            }

            .contact-item-text {
              font-size: 0.8em;
            }
          }
        }
      }

      .personal-info {
        display: flex;
        flex-direction: column;
        gap: 0.2em;

        .personal-info-container {
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          font-size: 0.8em;

          .personal-info-item {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            gap: 0.5em;

            @media screen {
              @media (max-width: 440px) {
                flex-wrap: wrap;
              }
            }
          }
        }
      }
      .education {
        display: flex;
        flex-direction: column;

        .education-container {
          display: flex;
          flex-direction: column;
          gap: 1em;

          .education-item {
            display: flex;
            flex-direction: column;
            line-height: 1em;

            .education-item-name {
              font-size: 1em;
              font-weight: bold;
            }

            .education-item-degree {
              font-size: 0.9em;
              font-style: italic;
            }

            .education-item-date {
              font-size: 0.8em;
              font-style: italic;
            }

            .education-item-location {
              font-size: 0.8em;
            }

            .education-item-grade {
              font-size: 0.8em;
            }
          }
        }
      }

      .skills {
        display: flex;
        flex-direction: column;

        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 0.2em;
          padding-left: 0.5em;

          .skill {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            gap: 0.5em;

            .skill-icon {
              font-size: 1em;
            }

            .skill-name {
              font-size: 0.8em;
            }
          }
        }
      }
    }
  }

  .main-content {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    * {
      color: var(--primary-text-color);
    }

    h2 {
      font-size: 2em;
      font-weight: bold;
      margin: 0;
      padding: 0;
      border-bottom: thin solid var(--theme-color);
    }

    h3 {
      font-size: 1.2em;
      font-weight: bold;
      margin: 0;
      padding: 0;
      font-style: italic;
    }

    .experience {
      display: flex;
      flex-direction: column;

      .experience-container {
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: 1em;

        .experience-item {
          display: flex;
          flex-direction: column;
          gap: 0.2em;

          .experience-item-name {
            font-size: 1.2em;
            font-weight: bold;
          }

          .experience-item-comp-date {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            gap: 0.5em;

            .experience-item-company {
              font-size: 1em;
            }

            .experience-item-date {
              font-style: italic;
            }
          }

          .experience-item-location {
            font-size: 0.9em;
          }

          .experience-item-responsibilities {
          }

          .experience-item-technologies {
            display: flex;
            flex-direction: column;
            gap: 0.2em;
            padding-left: 1em;

            .experience-item-technologies-container {
              padding-left: 1em;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              gap: 1em;

              .experience-item-technology {
                font-size: 0.8em;
                font-style: italic;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-items: center;
                gap: 0.2em;
              }
            }
          }
        }
      }
    }

    .certifications {
      display: flex;
      flex-direction: column;
      gap: 1em;

      .certifications-container {
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 1em;

        .certification {
          display: flex;
          flex-direction: column;

          * {
            line-height: 1.2em;
            font-size: 1em;
            font-style: italic;
          }
        }
      }
    }

    .references {
      display: flex;
      flex-direction: column;

      .references-container {
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 1em;
      }
    }
  }
`;
