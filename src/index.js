import React from "react";
import ReactDom from "react-dom";

// adding CSS file
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
    title: "I love you to the Moon and Back",
    author: "Amelia ..."
  },
  {
    id: 2,
    img:
      "data:image/jpeg;base64,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",
    title: "I love eating cucumber in the summer",
    author: "Cucumber ..."
  },

  {
    id: 3,
    img:
      "https://www.cnet.com/a/img/wub4Q7jiOP1L3pAfdNQx1FzSgWw=/940x528/2020/04/17/def1b267-b843-4adf-957f-631062cf5bd7/1800-flowers.jpg",
    title: "I need you",
    author: "Bahasht ...",
    number: 33
  }
];

// const author = "Amelia ...";
// const title = "I love you to the Moon and Back";
// const img = "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg";

// const names = ["John", "peter", "susan"];
// const newName = names.map((name) => {
//   // console.log(name);
//   return <h1>{name}</h1>;
// });

// console.log(newName);

function BookList() {
  return (
    // <section className="booklist">{books}

    <section className="booklist">
      {/* {names} */}
      {/* {newName} */}
      {books.map((anyBook) => {
        const { img, title, author } = anyBook;
        // return 'hi';
        return (
          // this is spread operator
          <Book key={anyBook.id} {...anyBook}>
            {" "}
          </Book>
        );
      })}

      {/* <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}

        // adding childern
      ></Book>

      {/* <Book title="random work" number={33} /> */}
      {/* <Book
        img={secondBook.img}
        title={secondBook.title}
        number={secondBook.number}
      /> */}
    </section>
  );
}

// const Book = (props) => {
const Book = ({ img, title, author, number }) => {
  // const clickHandler = () => {
  //   alert("it should work Awara");
  // };

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);

    alert("it should work Awara");
  };

  const complexExample = (author) => {
    console.log(author);
  };
  // const Book = ({ img, title, number, author, childern }) => {
  // console.log(props);

  //  destructuring, WOWWW!
  // const { img, title, author, number, childern } = propsOrWhatEver;
  // const { img, title, author, number } = props;

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      {/* <img src={img} alt="" /> */}

      {/* <img src={propsOrWhatEver.img} alt="" /> */}
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      {/* <h1>{title}</h1> */}
      <h3>{author}</h3>
      {/* {propsOrWhatEver.childern} */}
      {/* {childern} */}
      {/* <h3>{author}</h3> */}
      {/* <p>{propsOrWhatEver.job}</p>
      <p>{propsOrWhatEver.title}</p> */}
      <p>{number}</p>
      <button type="button" onClick={clickHandler}>
        Reffrence Example
      </button>

      <button type="button" onClick={() => complexExample(author)}>
        moreComplexExample
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
