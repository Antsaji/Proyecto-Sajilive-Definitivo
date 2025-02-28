import { Link } from "react-router";

export default function Footer(){
    return(
        <footer className="footer content-end place-items-center  w-full   bottom-0 left-0 mt-7">
  <aside className=" flex flex-row gap-x-4 ">
    <Link to="https://www.linkedin.com/in/antonio-s%C3%A1nchez-ba3327207/"
    target="_blank"
    rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 32 32"
        className="fill-current">
        <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13
	c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3
	c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13
	c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z"/>
      </svg>
    </Link>
    <Link to="https://www.instagram.com/sajilive/"
    target="_blank"
    rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
         viewBox="0 0 32 32" 
        className="fill-current">
        <path d="M23,0H9C4,0,0,4,0,9v6v8c0,5,4,9,9,9h14c5,0,9-4,9-9v-8V9C32,4,28,0,23,0z M16,10c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6
	S12.7,10,16,10z M22,7c0-1.1,0.9-2,2-2s2,0.9,2,2s-0.9,2-2,2S22,8.1,22,7z"/>
      </svg>
    </Link>
    <Link to="https://www.facebook.com/people/Sajilive/61550607506349/?sk=photos_albums"
    target="_blank"
    rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </Link>
  </aside>
</footer>
    );
}