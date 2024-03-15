import React from "react";

const FlexWrapper = (props) => {
  const { children, flexDirection, justifyContent, alignItems } = props;

  return (
    <article
      style={{ display: "flex", flexDirection, justifyContent, alignItems,
      }}
    >
      {children}
    </article>
  );
};

export default FlexWrapper;

/*


Створити копоненту FlexWrapper, яка відображає всі передані їй елементи як флекс-дітей
При цьому flex-direction, align-items, justify-content мають передаватись цій компоненті як пропси


Всередині App

<Flex-container flexDirection="row" justifyContent="center" alignItems="stretch">
    <div>Item1</div>
    <div>Item2</div>
    <div>Item3</div>
</Flex-container>

*/
