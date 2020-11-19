import React from "react";

const Caracter = (props) => {
  console.log(props.caracter);
  return (
    <div className="container-fluid mt-md-5">
      <div className="row mt-md-5 justify-content-center">
        <div className="col-md-4">
          <h2>
            <strong>{props.caracter?.name}</strong>
          </h2>
          <img
            alt={props.caracter?.id}
            className="img-fluid p-3 my-md-4"
            width="400"
            src={props.caracter?.thumbnail?.path + "." + props.caracter?.thumbnail?.extension}
          />
          <h5 className="text my-4">{props.caracter?.description}</h5>
        </div>
        <div className="col-md-8">
          <div className="row text-left">
            <div className="col-12 col-sm">
              <h2>Series</h2>
              {props.caracter.series.items.length > 0 ? (
                <ul className="mt-4">
                  {props.caracter.series.items.map((item, i) => (
                    <li key={`serie-${i}`}>{item.name}</li>
                  ))}
                </ul>
              ) : (
                <div>
                  <h5>No series found</h5>
                </div>
              )}
            </div>
            <div className="col-12 col-sm">
              <h2>Comics</h2>
              {props.caracter.comics.items.length > 0 ? (
                <ul className="mt-4">
                  {props.caracter.comics.items.map((item, i) => (
                    <li key={`comic-${i}`}>{item.name}</li>
                  ))}
                </ul>
              ) : (
                <div>
                  <h5>No comics found</h5>
                </div>
              )}
            </div>
            <div className="col-12 col-sm">
              <h2>Stories</h2>
              {props.caracter.stories.items.length > 0 ? (
                <ul className="mt-4">
                  {props.caracter.stories.items.map((item, i) => (
                    <li key={`storie-${i}`}>{item.name}</li>
                  ))}
                </ul>
              ) : (
                <div>
                  <h5>No stories found</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caracter;
