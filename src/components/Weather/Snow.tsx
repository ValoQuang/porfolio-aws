const Snow = () => {
    const snowflakes = ['❅', '❅', '❆', '❄', '❅', '❆', '❄', '❅', '❅', '❅'];
    //unicode chars, add variety
    
    return (
      <div className="snowflakes">
        {snowflakes.map((snowflake, index) => (
          <div key={index} className="snowflake">
            {snowflake}
          </div>
        ))}
      </div>
    );
  };
  
  export default Snow;