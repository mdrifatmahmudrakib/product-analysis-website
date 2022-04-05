import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-20'>
            <div class="grid grid-cols-2 gap-4 pl-10 pr-10">
                <div className='text-left'><h1 className='text-2xl'>What is Context API?</h1>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around.This React structure enables to exchange unique details and assists in solving prop-drilling from all levels of your application.One of the concepts of React is to break your application into components, for reusability purposes.After breaking components into smaller components for maintainability purposes, these small components might now need some data to work properly.React.createContext() is all we need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. </p></div>

                <div className='text-left'>
                    <h1 className='text-2xl'>What is Semantic Tag?</h1>
                    <p>What is a semantic tag?
                        Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header , footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.Semantics is one of the most important features of HTML5. Semantic HTML refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages. It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;