export default function TestText({name}) {

  return (
    <>
      <div
        className="text-6xl mx-3 my-3 w-max"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "auto",
          border: "3px solid #F4A261",
          borderRadius: "25px",
          color: "#FF5C5C",
          textAlign: "center"
        }}
      >
        <div style={{color: "#FEAE49"}}>Test:</div>
        {name}
      </div>

      <div
        className="flex flex-row mx-3 my-3"
        style={{
          height: "50vh",
          width: "auto",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "3px solid #F4A261",
            color: "#FF5C5C",
            borderRadius: "25px",
            width: "48.5vw",
            justifyContent: "space-around",
            height: "50vh",
            textAlign: "center",
            paddingTop: "1rem",
          }}
        >
          Content Space 1
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "50vh",
          }}
        >
          <div
            style={{
              border: "3px solid #F4A261",
              color: "#FF5C5C",
              borderRadius: "25px",
              width: "48vw",
              padding: "1rem",
              height: "24.135vh",
              textAlign: "center",
            }}
          >
            Content Sub Space 1
          </div>
          <div
            style={{
              border: "3px solid #F4A261",
              color: "#FF5C5C",
              borderRadius: "25px",
              width: "48vw",
              padding: "1rem",
              height: "24.135vh",
              textAlign: "center",
            }}
          >
            Content Sub Space 2
          </div>
        </div>
      </div>
    </>
  );
}
