import { livingRick, livingMorty } from "../assets/index";

const TitleImage = () => {
  return (
    <div>
      {livingRick}
      {livingMorty}
      <style jsx>
        {`
          header div div {
            justify-content: center;
            display: flex;
            // background-color: salmon;
            filter: saturate(.8)
          }
          
          p {
            color: white;
            // height: 500px;
          }
          
          svg {
            margin: auto;
            height: 30vmin;
            pointer-events: none;
          }

          @media (prefers-reduced-motion: no-preference) {
            svg {
              animation: App-logo-spin infinite 20s linear;
            }
          }
          @keyframes App-logo-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default TitleImage;
