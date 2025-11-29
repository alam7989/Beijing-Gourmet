const MenuCard = ({ category, description, items }) => {
    if (category == "Family Style Dinners") {
      return (
        <div
          id={`${category}-card`}
          className="
            bg-[#e0e0e0]
            w-full
            p-4
            rounded
            text-black
          "
        >
          <h2 className="text-2xl font-bold mb-4 text-center">{category}</h2>
          {description && (
            <p className="text-center mb-4 italic font-bold">
              {description}
            </p>
          )}

          <div className="space-y-4">
            {items.map((dinner, i) => (
              <div
                key={i}
                className="bg-[#f5f5f5] rounded p-4 shadow-md text-left"
              >
                <h3 className="text-xl font-semibold">
                  {dinner.name} — ${dinner.price} per person
                </h3>

                {/* Base Items */}
                <div className="mt-3">
                  <h4 className="font-bold mb-1">Includes:</h4>
                  <ul className="ml-4 space-y-1">
                    {dinner.base.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-4 text-center">
                          {item.spicy && "🌶️"}
                        </span>
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Three People */}
                {dinner.threePeople?.length > 0 && (
                  <div className="mt-3">
                    <h4 className="font-bold mb-1">For 3 people, add:</h4>
                    <ul className="ml-4 space-y-1">
                      {dinner.threePeople.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-4 text-center">
                            {item.spicy && "🌶️"}
                          </span>
                          <span>{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Four People */}
                {dinner.fourPeople?.length > 0 && (
                  <div className="mt-3">
                    <h4 className="font-bold mb-1">For 4 people, add:</h4>
                    <ul className="ml-4 space-y-1">
                      {dinner.fourPeople.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-4 text-center">
                            {item.spicy && "🌶️"}
                          </span>
                          <span>{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    };

    return (
      <div
        id={`${category}-card`}
        className="
          bg-[#e0e0e0]
          w-full
          p-4
          rounded
          text-black
          text-left
        "
      >
        <h2 className="text-2xl font-bold mb-4 text-center">{category}</h2>
        {description && (
          <p className="text-center mb-4 italic font-bold">
            {description}
          </p>
        )}
  
        <ul className="flex flex-col items-center space-y-2 w-full">
          {items.map((item, i) => (
            <li
              key={i}
              className="
                flex 
                justify-between 
                items-center 
                w-7/8
              "
            >
              <div className="flex items-center gap-2">
                <span className="w-4 text-center">
                  {item.spicy && "🌶️"}
                </span>
                <span>{item.name}</span>
              </div>
  
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default MenuCard;
