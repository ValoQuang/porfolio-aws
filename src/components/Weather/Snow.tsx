const Snow = () => {
    const snowflakes = ['❅', '❅', '❆', '❄', '❅', '❆', '❄', '❅', '❅', '❅'];
  
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