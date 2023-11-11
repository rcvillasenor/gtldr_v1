# 10/08/2023:

    - using keqingmains as a general reference for genshin too long didn't read (g-tldr; pronounced Gee-till-durr)
    - mascot will be a derpy ruin guard (field tiller, inspiration in part for the shortened form of the site name)
    - need a landing page, and first page about dendro reactions
    - dendro reaction pages will be similar to keqingmains in content but will be better organized relating to each reaction
        - reaction type
        - elements in the reaction/how to apply
    - add a section for farming materials (namecard type thing quick guide and then clickable resources to show where to go for them like farmign paths)
        - have them be filterable to the day
        - have personal save preference and a watch out notice per user profile

# 10/09/2023:

    - might need to figure out how to convert this whole project to a full stack because we'll likely need a database to hold login info, profile info (like saved goals), image serving
    - need to also figure out the validity of using react bootstrap to make things cleaner but need to figure out how to style things properly for more customization options.
    - figure out if hosting on github pages
    - decide on a mobile solution

# 10/10/2023:

    - need to learn the following (+ reason):
        - next.js + rust (ssr for react projects and to replace vite because vite does not work with next.js)
        - node.js (for back end for fullstack development)
        - react native (for developing apps native to android or iphones)

# 10/11/2023:

    - likely need to just build this out for shelley's sake and then rebuild it better with next js in mind: we'd want seo to matter so we'd likely want next.js.

# 10/20/2023:

    - check other notes and consolidate with this change log (see notepad notes)

# 10/22/2023:

    - need to check in with curt and also start and finish the next.js nodules (check yt for saved videos and scrimba for react)

# 10/23/2023:

    - can consolidate notes from here into final work space.
    - can start figuring out how you want to present the data for the dendro reactions page

# 10/28/2023:

    - set up new repo for routing with gh-pages
    - fixed errors with reloading

# 10/30/2023:

    - migrated existing data from another repo while making sure routing/hosting remains unaffected
    - laying out project in each page

# 10/31/2023:

    - migrated notes and set up more of the project/page wise

# 11/01/2023:

    - guides, quick references to things like items available to domains on a particular day, reset timer across the servers
    - condensed top nav: guides, quick refs,
    - condensed bottom nav: contact, about us, help announcements
    - misc: custom 404,

    potential fonts:
        - topnav: ultra, audiowide, monoton (for logo)

# 11/04/2023:

    - need to figure out how to properly throw 404 error with custom built error element while using react router
    - need to also figure out component to topnav to handle hover effect to display sub pages (determine if we even need this because the argument could be made that the main pages could display the sub pages easily although i suppose this would be nice ux if i managed to get it to work)
    topnav link logic: mouseover mainlink toggles menu on, mouseout of the newly displayed sublinks tray toggles menu off
    - need to figure out footer contents

    <ul>
            <li>BLOOM</li>
            <p>
              Exploring Bloom:
              <ul>
                <li>Hyper Bloom</li>
                <li>Burgeon</li>
              </ul>
            </p>
            <li>QUICKEN</li>
            <p>
              Exploring Quicken:
              <ul>
                <li>Aggravate</li>
                <li>Spread</li>
              </ul>
            </p>

            <li>BURNING</li>
            <p>
              Exploring Quicken:
              <ul>
                <li>Aggravate</li>
                <li>Spread</li>
              </ul>
            </p>
          </ul>

          DENDRO

          PYRO
          ELECTRO
          HYDRO

          CRYO
          GEO
          ANEMO

# 11/10/2023:

To Do (Still):

- get the images for the elements as pngs w/ transparent backgrounds from the genshin wiki
- general structure of sections and their subsections for the dendro reactions page:
      <div className="my-3 mx-3 w-max">
        <p className="text-center">
          <div>
            <h1>ELECTRO</h1>
            <div>
              <h2>SECONDARY APPLICATION</h2>
              <div>Electro: Aggravate</div>
              <div>Dendro: Spread</div>
            </div>
          </div>
          <div>
            <h1>HYDRO</h1>
            <div>
              <h2>SECONDARY APPLICATION</h2>
              <div>Electro: Hyperbloom</div>
              <div>Pyro: Burgeon</div>
            </div>
          </div>
          <div>
            <h1>PYRO</h1>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <h1>OTHER</h1>
            <div>ANEMO</div>
            <div>CRYO</div>
            <div>GEO</div>
          </div>
        </p>
      </div>

- need to finish infocard component logic for buttons and conditional rendering (consider making it look like a window or a card?)
- figure out a default header bg/border color
- outline of the each base "page"/route (i.e. sub directory nav for mechs guides/quick refs)
