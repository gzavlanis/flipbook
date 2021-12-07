import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './flipbook_styles.css';
import reactLogo from './react.png';

const Page1= React.forwardRef((props, ref)=> {
    return(
        <div className='demoPage1' ref={ref}>
            <h2>Flipping book in React JS</h2>
            <img src={reactLogo} alt= 'react-logo'/>
            <div className='title'>{props.children}</div>
        </div>
    );
});
const BlankPage= React.forwardRef((props, ref)=>{
    return(
        <div className='blankPage' ref={ref}/>
    );
});
const Page2= React.forwardRef((props, ref)=> {
    return(
        <div className='demoPage2' ref={ref}>
            <p>{props.children}</p>
            <p className='pageNum'>{props.number}</p>
        </div>
    );
});

const Page3= React.forwardRef((props, ref)=> {
    return(
        <div className='demoPage2' ref={ref}>
            <p>{props.children}</p>
            <p className='pageNum'>{props.number}</p>
        </div>
    );
});

const Page4= React.forwardRef((props, ref)=> {
    return(
        <div className='demoPage2' ref={ref}>
            <p>{props.children}</p>
            <p className='pageNum'>{props.number}</p>
        </div>
    );
});

const Page5= React.forwardRef((props, ref)=> {
    return(
        <div className='demoPage2' ref={ref}>
            <p>{props.children}</p>
            <p className='pageNum'>{props.number}</p>
        </div>
    );
});

const Page6= React.forwardRef((props, ref)=> {
    return(
        <div className='demoPage3' ref={ref}/>
    );
});

function MyBook(props){
    return(
        <HTMLFlipBook width={550} height={733} minWidth={315} maxWidth={1000}
                      minHeight={400} maxHeight={1533} flippingTime={1300} showCover={true}
                      mobileScrollSupport={true} size= 'stretch' maxshadowOpacity={0.5} >
            <Page1 number='1'>
                <h5>Author: George Zavlanis</h5>
            </Page1>
            <BlankPage/>
            <Page2 number='2'>
                <h2>What is Lorem Ipsum?</h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
            </Page2>
            <Page3 number='3'>
                <h2>Where does it come from?</h2>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32.
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H. Rackham.
            </Page3>
            <Page4 number='4'>
                <h2>Where can I get some?</h2>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour,
                or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words etc.
            </Page4>
            <Page5 number='5'>
                <h2>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h2>
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
                laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis
                aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
                earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat."
            </Page5>
            <BlankPage/>
            <Page6/>
        </HTMLFlipBook>
    );
}
export default MyBook;

