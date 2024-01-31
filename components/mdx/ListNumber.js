import styled from "styled-components";

function NumberSVG({ number }) {
  if (number === "1") {
    return (
      <svg
        width="38"
        height="38"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          float: "left",
          display: "inline-block",
          marginRight: "1rem",
          top: "0.7rem",
          position: "relative",
        }}
      >
        <rect
          x="0.5"
          y="0.5"
          width="43"
          height="43"
          rx="21.5"
          stroke="#D3D3D1"
        />
        <path
          d="M29.288 30.824V33H17V30.824H21.912V15.192C21.912 14.7227 21.928 14.248 21.96 13.768L17.88 17.272C17.7413 17.3893 17.6027 17.464 17.464 17.496C17.3253 17.5173 17.1973 17.5173 17.08 17.496C16.9627 17.4747 16.8507 17.432 16.744 17.368C16.648 17.304 16.5733 17.2347 16.52 17.16L15.624 15.928L22.456 10.024H24.776V30.824H29.288Z"
          fill="#334259"
        />
      </svg>
    );
  } else if (number === "2") {
    return (
      <svg
        width="38"
        height="38"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          float: "left",
          display: "inline-block",
          marginRight: "1rem",
          top: "0.7rem",
          position: "relative",
        }}
      >
        <rect
          x="0.5"
          y="0.5"
          width="43"
          height="43"
          rx="21.5"
          stroke="#D3D3D1"
        />
        <path
          d="M28.792 30.296C29.1013 30.296 29.3467 30.3867 29.528 30.568C29.7093 30.7493 29.8 30.984 29.8 31.272V33H14.504V32.024C14.504 31.8213 14.5467 31.6133 14.632 31.4C14.7173 31.1867 14.8507 30.9893 15.032 30.808L22.376 23.432C22.984 22.8133 23.5387 22.2213 24.04 21.656C24.5413 21.08 24.968 20.504 25.32 19.928C25.672 19.352 25.944 18.7707 26.136 18.184C26.328 17.5867 26.424 16.952 26.424 16.28C26.424 15.608 26.3173 15.0213 26.104 14.52C25.8907 14.008 25.5973 13.5867 25.224 13.256C24.8613 12.9253 24.4293 12.68 23.928 12.52C23.4267 12.3493 22.888 12.264 22.312 12.264C21.7253 12.264 21.1867 12.3493 20.696 12.52C20.2053 12.6907 19.768 12.9307 19.384 13.24C19.0107 13.5387 18.696 13.896 18.44 14.312C18.184 14.728 18.0027 15.1867 17.896 15.688C17.768 16.0613 17.592 16.312 17.368 16.44C17.1547 16.5573 16.8507 16.5893 16.456 16.536L14.968 16.28C15.1173 15.2347 15.4053 14.312 15.832 13.512C16.2693 12.7013 16.8133 12.024 17.464 11.48C18.1253 10.936 18.8773 10.5253 19.72 10.248C20.5627 9.96 21.4747 9.816 22.456 9.816C23.4267 9.816 24.3333 9.96 25.176 10.248C26.0187 10.536 26.7493 10.9573 27.368 11.512C27.9867 12.056 28.472 12.7227 28.824 13.512C29.176 14.3013 29.352 15.1973 29.352 16.2C29.352 17.0533 29.224 17.848 28.968 18.584C28.712 19.3093 28.3653 20.0027 27.928 20.664C27.4907 21.3253 26.984 21.9707 26.408 22.6C25.8427 23.2293 25.24 23.864 24.6 24.504L18.552 30.68C18.9787 30.5627 19.4107 30.472 19.848 30.408C20.2853 30.3333 20.7067 30.296 21.112 30.296H28.792Z"
          fill="#334259"
        />
      </svg>
    );
  } else if (number === "3") {
    return (
      <svg
        width="38"
        height="38"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          float: "left",
          display: "inline-block",
          marginRight: "1rem",
          top: "0.7rem",
          position: "relative",
        }}
      >
        <rect
          x="0.5"
          y="0.5"
          width="43"
          height="43"
          rx="21.5"
          stroke="#D3D3D1"
        />
        <path
          d="M15.08 16.28C15.2293 15.2347 15.5173 14.312 15.944 13.512C16.3707 12.7013 16.9093 12.024 17.56 11.48C18.2213 10.936 18.9733 10.5253 19.816 10.248C20.6693 9.96 21.5867 9.816 22.568 9.816C23.5387 9.816 24.4347 9.95466 25.256 10.232C26.0773 10.5093 26.7813 10.904 27.368 11.416C27.9653 11.928 28.4293 12.5467 28.76 13.272C29.0907 13.9973 29.256 14.8027 29.256 15.688C29.256 16.4133 29.16 17.064 28.968 17.64C28.7867 18.2053 28.52 18.7013 28.168 19.128C27.8267 19.5547 27.4107 19.9173 26.92 20.216C26.4293 20.5147 25.88 20.76 25.272 20.952C26.7653 21.336 27.8853 21.9973 28.632 22.936C29.3893 23.864 29.768 25.0267 29.768 26.424C29.768 27.48 29.5653 28.4293 29.16 29.272C28.7653 30.1147 28.2213 30.8347 27.528 31.432C26.8347 32.0187 26.024 32.472 25.096 32.792C24.1787 33.1013 23.192 33.256 22.136 33.256C20.92 33.256 19.88 33.1067 19.016 32.808C18.152 32.4987 17.4213 32.0773 16.824 31.544C16.2267 31.0107 15.736 30.3813 15.352 29.656C14.968 28.92 14.6427 28.1253 14.376 27.272L15.608 26.76C15.928 26.6213 16.2373 26.584 16.536 26.648C16.8453 26.712 17.0693 26.888 17.208 27.176C17.3467 27.4747 17.5173 27.832 17.72 28.248C17.9333 28.664 18.2213 29.064 18.584 29.448C18.9467 29.832 19.4053 30.1573 19.96 30.424C20.5253 30.6907 21.24 30.824 22.104 30.824C22.904 30.824 23.6027 30.696 24.2 30.44C24.808 30.1733 25.3093 29.832 25.704 29.416C26.1093 29 26.4133 28.536 26.616 28.024C26.8187 27.512 26.92 27.0053 26.92 26.504C26.92 25.8853 26.84 25.32 26.68 24.808C26.52 24.296 26.2213 23.8533 25.784 23.48C25.3467 23.1067 24.744 22.8133 23.976 22.6C23.2187 22.3867 22.2427 22.28 21.048 22.28V20.216C22.0293 20.2053 22.8613 20.0987 23.544 19.896C24.2373 19.6933 24.7973 19.416 25.224 19.064C25.6613 18.712 25.976 18.2907 26.168 17.8C26.3707 17.3093 26.472 16.7653 26.472 16.168C26.472 15.5067 26.3653 14.9307 26.152 14.44C25.9493 13.9493 25.6667 13.544 25.304 13.224C24.9413 12.904 24.5093 12.664 24.008 12.504C23.5173 12.344 22.984 12.264 22.408 12.264C21.832 12.264 21.2933 12.3493 20.792 12.52C20.3013 12.6907 19.864 12.9307 19.48 13.24C19.1067 13.5387 18.792 13.896 18.536 14.312C18.28 14.728 18.0987 15.1867 17.992 15.688C17.8533 16.0613 17.6773 16.312 17.464 16.44C17.2613 16.5573 16.9627 16.5893 16.568 16.536L15.08 16.28Z"
          fill="#334259"
        />
      </svg>
    );
  } else {
    return null;
  }
}

export default function ListNumber({ number, title, children }) {
  return (
    <ListContainer>
      <NumberSVG number={number} />
      <h3 style={{ margin: "0.25rem 0 0.5rem" }}>{title}</h3>
      {children}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: inline-block;
`;