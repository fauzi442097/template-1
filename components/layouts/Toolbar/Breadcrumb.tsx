import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { StringHelper } from '../../../helper/helper';


const Breadcrumbs = () => {
  // Gives us ability to load the current route details
  const router = useRouter();

  const generateBreadcrumbs = () => {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = router.asPath.split("?")[0];

    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0);

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
        // We can get the partial nested route for the crumb
        // by joining together the path parts up to this point.
        const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      // The title will just be the route string for now
        const title = StringHelper.Capitalize(subpath);
        return { href, title }; 
    })
    
    // Add in a default "Home" crumb for the top-level
    return [{ href: "/", title: "Home" }, ...crumblist];
  } // end function

  // Call the function to generate the breadcrumbs list
  const breadcrumbs = useMemo(() => generateBreadcrumbs(), [router.asPath]);

  return (
    <ul className='flex flex-wrap list-none items-center p-0 m-0 bg-transparent pt-1 text-xs transition-colors duration-300'>
      {/*
        Iterate through the crumbs, and render each individually.
        We "mark" the last crumb to not have a link.
      */}
      {breadcrumbs.map((crumb, idx) => (
        <Crumb href={crumb.href} text={crumb.title} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </ul>
  );
}

// Each individual "crumb" in the breadcrumbs list
const Crumb = ({ text, href, last = false} : {
  text: any,
  href: any,
  last: any
}) => {
  // The last crumb is rendered as normal text since we are already on the page
  if ( last ) return <li className='flex items-center pl-0 pr-1 font-inter-medium'> {text} </li>

  // All other crumbs will be rendered as links that can be visited 
  return (
    <>
      <Link href={href} className='flex items-center pl-0 pr-1 hover:text-primary'> {text} </Link>
      <li className='flex items-center pl-0 pr-1'> /</li>
    </>
  )
}

export default Breadcrumbs