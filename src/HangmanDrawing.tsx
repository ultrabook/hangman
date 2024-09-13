const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  />
);

const ARM_RIGHT = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      rotate: "-30deg",
      transformOrigin: "left bottom",
      position: "absolute",
      top: "150px",
      right: "-100px",
    }}
  />
);

const ARM_LEFT = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      rotate: "30deg",
      transformOrigin: "right bottom",
      position: "absolute",
      top: "150px",
      right: "10px",
    }}
  />
);

const LEG_RIGHT = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      rotate: "60deg",
      transformOrigin: "left bottom",
      position: "absolute",
      top: "210px",
      right: "-90px",
    }}
  />
);

const LEG_LEFT = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      rotate: "-60deg",
      transformOrigin: "right bottom",
      position: "absolute",
      top: "210px",
      right: 0,
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, ARM_RIGHT, ARM_LEFT, LEG_RIGHT, LEG_LEFT];

type HangmanDrawingProps = {
  numOfGuesses: number;
};

export function HangmanDrawing({ numOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
