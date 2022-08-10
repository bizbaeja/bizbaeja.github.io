import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewBlogForm.module.css';


function NewBlogForm() {
  //첫번째 input을 참조
  const titleInputRef= useRef();
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()
  
  function submitHandler(event) {
    event.preventDefault();
    
    // ref prop을 내려준 뒤,titleputRef 를 통해 가져온 서브밋핸들러 안에 endterdTilte 상수 선언해준다. 이렇게 연결이 되면 dl ref 객체를 통해 <input> 엘리먼트로 접근이 가능해지고, 모든 ref 객체는 current 속성을 가지고 잇고 이에 연결된 값을 가지고 있는데, 이 input element 의 자바스크립트 표현식을 가지고 value 속성을 가진다. current.value 에 새로운 값을 지정가능하고, 하나의 컴포넌트에 하나 이상의 ref 를 가질 수 있다. 
    const endterdTilte = titleInputRef.current.value;
    const endterdImage = imageInputRef.current.value;
    const enterdAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const blogData ={
      title: endterdTilte,
      image: endterdImage,
      address: enterdAddress,
      description: enteredDescription,
    };
    console.log(blogData);

   

  }
    return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label  htmlFor='title'>Blog Title</label> 
          {/* 위에서 useRef 를 참조해주면서 prop으로 ref 추가해주었다. (모든엘리먼트지원해준다) */}
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label  htmlFor='image'>Blog Image</label> 
          <input type='url' required id='image' ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label  htmlFor='address'>Address</label> 
          <input type='text' required id='address' ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label  htmlFor='description'>Description</label> 
          <textarea 
          id='description'
          required
           rows='5'
           ref={descriptionInputRef}>
           </textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Blog</button>
        </div>
      </form>
    </Card>
    )
  
  }
  
  export default NewBlogForm;

   //폼입력값읽어오기 useState 모든 input 트리거에 이벤트리스너를 추가해서 키를 누를 때마다 함수를 트리거한다. 그렇게해서 사용자가 event 객체를 통해 해당이벤트에 대해 입력한 값을 받아온다. 누를때마다 값을 읽을수있다. 하지만 여기선 폼이 submit될때 그순간 사용자 입력값만 필요하다.
    //ref 개념 : DOM element 로 Reference 를 설정할 수 있게 해주는데, 이를 통해 돔 엘리먼트에 직접적으로 액세스가 가능하다. 그렇게 설정하려면 userRef 훅을 리액트로부터 Import 해야한다.함수 컴ㅁ포넌트 안에서 실행되며, 그러면 ref 객체 즉 참조 객체가 생성된다.