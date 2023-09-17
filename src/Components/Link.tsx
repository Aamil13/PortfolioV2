import { pages } from '@/Shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page: string;
    selectedPage: pages;
    setSelectedPage: (value: pages) => void;
}

const Link = ({page,selectedPage,setSelectedPage}: Props) => {
    const lowerCase = page.toLowerCase().replace(/ /g,"") as pages
  return (
    <AnchorLink
    className={` ${selectedPage === lowerCase  ? "text-purple-700" : " text-white "}
    transition duration-500 hover:text-primary-300
    `}
    href={`#${lowerCase}`}
    onClick={()=> setSelectedPage(lowerCase)}
     >
        {page}
    </AnchorLink>
  )
}

export default Link