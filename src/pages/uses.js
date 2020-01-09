import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import Title from '../components/title'
import styled from 'styled-components'
import { DiVisualstudio } from 'react-icons/di'
import { MdAndroid } from 'react-icons/md'
import { FaApple } from 'react-icons/fa'

const Uses = ({ data, className }) => (
    <Layout>
        <SEO title="Contact" />
        <Hero img={data.usesBg.childImageSharp.fluid}>
            <Banner>
                <h1>Uses</h1>
            </Banner>
        </Hero>
        <section className={className}>
            <div className="explain">Below is a list of tools and environments that I use in my daily work
            as a software developer, lecturer and technical writer.</div>
            <div className="attribution">Inspired by Wes Bos' <a href="https://github.com/wesbos/awesome-uses">Awesome Uses</a> page.</div>
            <section className="group">
                <Title title="Code" subtitle="Editors" />
                <div className="entry">
                    <h3>Visual Studio Code (VSCode)</h3>
                    <div className="explanation">Became my main code editor sometime in mid 2018
                taking over from Webstorm. It feels lightweight, is free, and unlimited extensions are available.</div>
                    <div className="link">
                        <a href="https://code.visualstudio.com/" title="VSCode Website" rel="noopener noreferrer" target="_blank">
                            <DiVisualstudio />
                        </a>
                    </div>
                </div>

                <div className="entry">
                    <h3>Webstorm</h3>
                    <div className="explanation">Webstorm is an excellent IDE. I very reluctantly moved over to VSCode and still keep it around and use on a few select projects just because it is so great.</div>
                    <div className="link">
                        <a href="https://www.jetbrains.com/webstorm/" title="Webstorm Website" rel="noopener noreferrer" target="_blank">
                            Webstorm
                    </a>
                    </div>
                </div>

                <div className="entry">
                    <h3>Android Studio</h3>
                    <div className="explanation">Built by the same folks that brought you Webstorm and many other  amazing IDEs.</div>
                    <div className="link">
                        <a href="https://developer.android.com/studio" title="Android Studio Website" rel="noopener noreferrer" target="_blank">
                            <MdAndroid />
                        </a>
                    </div>
                </div>

                <div className="entry">
                    <h3>Xcode</h3>
                    <div className="explanation">
                        Don't use this so much as an editor but rather use many of the tools that are available with Xcode. Also needed for generating iOS apps from React Native.
                </div>
                    <div className="link">
                        <a href="https://developer.apple.com/xcode/" title="Xcode Website" rel="noopener noreferrer" target="_blank">
                            <FaApple />
                        </a>
                    </div>
                </div>
            </section>

            <section className="group">
                <Title title="Editor" subtitle="Configurations" />
                <div className="entry">
                    <h3>Emmet</h3>
                    <div className="explanation">
                        An amazing time saving plugin for generating code snippets for HTML and CSS. Available for most IDEs.
                    </div>
                    <div className="link">
                        <a href="https://emmet.io/" title="Emmet Website" rel="noopener noreferrer" target="_blank">
                            Emmet
                    </a>
                    </div>
                </div>

                <div className="entry">
                    <h3>Prettier</h3>
                    <div className="explanation">
                        Alright, some controversy exist over this, but I have no problem with prettier formatting my code for me after I set up the rules that I like.
                    </div>
                    <div className="link">
                        <a href="https://prettier.io/" title="Prettier Website" rel="noopener noreferrer" target="_blank">
                            Prettier
                    </a>
                    </div>
                </div>

                <div className="entry">
                    <h3>ESLint</h3>
                    <div className="explanation">
                        Sometimes ESLint and prettier gets into a fight but both are useful so its worth making them work together.
                    </div>
                    <div className="link">
                        <a href="https://eslint.org/" title="ESlint Website" rel="noopener noreferrer" target="_blank">
                            ESLint
                    </a>
                    </div>
                </div>
            </section>

            <section className="group">
                <Title title="Terminals" subtitle="" />
                <div className="entry">
                    <h3>Zsh</h3>
                    <div className="explanation">
                        Adopted this after macOS did. Spent years on Bash. There are a few features of Zsh that I like but so far no impactful difference.
                    </div>
                    <div className="link">
                        <a href="https://en.wikipedia.org/wiki/Z_shell" title="Zsh Website" rel="noopener noreferrer" target="_blank">
                            Zsh
                    </a>
                    </div>
                </div>

                <div className="entry">
                    <h3>Oh My Zsh</h3>
                    <div className="explanation">
                        Pretty decent tool for configuring and managing the Zsh terminal. I may have used less than 1% of the goodies that it offers so far but I'm happy with it.
                    </div>
                    <div className="link">
                        <a href="https://ohmyz.sh/" title="Oh My Zsh Website" rel="noopener noreferrer" target="_blank">
                            Oh My Zsh
                    </a>
                    </div>
                </div>
            </section>
        </section>


    </Layout>
)

export default styled(Uses)`
padding: 1rem;
width: 90%;
max-width: 800px;
margin: 0 auto;

.group {
    margin-top: 2rem;
}

.attribution {
    font-size: 0.9rem;
    margin-top: 8px;

}

.entry {

    h3 {
        font-size: 1.2rem;
        color: var(--secondaryDark);
    }

    .link {
        text-align: right;
    }

    .link a {
        display: inline-block;
        color: var(--primary);
        transition: var(--mainTransition);
        text-decoration: none;
    }

    .link a:hover {
        color: var(--primaryDark);
        transform: translateY(-5px);
    } 

    .link a:hover::before {
        content: "visit website → "
    }

}
`

export const query = graphql`
  query {
    usesBg: file(relativePath: { eq: "uses_bg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
