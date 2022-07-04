import styles from "./App.module.css"
import { fn } from "@hwyblvd/st"
import bghex from "./assets/blob.svg"
import bgarcs from "./assets/pattern (6).svg"
import bgplan from "./assets/pattern (7).svg"
import bgstars from "./assets/blob (2).svg"

const App = () => {
  return (
    <div class={styles.App}>
      <style textContent={`
        :root {
          scroll-behavior: smooth;
          --bghex: url('${bghex}');
          --bgarcs: url('${bgarcs}');
          --bgplan: url('${bgplan}');
          --bgstars: url('${bgstars}');
        }  
      `} />
      <div class="b-roads">
        <div />
        <div>
          <p>@hwyblvd</p>
          <h2 class={styles.fnt_ser_1}>
            Solving state management, permanently.
          </h2>
          <small>
            <a href="#hwyblvd-theme">I'm just looking around<b>&lt;</b></a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="https://github.com/aikmandean/st">I'm looking to get started<i>&gt;</i></a> 
          </small>
        </div>
      </div>
      <div id="hwyblvd-theme" class="b-jets">
        <div>
          <h2>
            Right once, <br /> 
                  &nbsp;&nbsp;&nbsp;&nbsp; <b>never</b> <br /> 
                  rewrite.
          </h2>
        </div>
        <div>
          <p>
            Why do we rewrite? Architecture. 
            Entangled code, changing libraries, new ideas. 
            <br /><br />
            @hwyblvd helps you lay a strongly-typed foundation 
            for your app. TypeScript not required.
            <br /><br />
            <small>
              What's the secret?
              <br /><br />
              {/* It's all in global state. In JavaScript, we sometimes 
              call it "window" or globalThis. You might know it as 
              React Context or Singleton. 
              <br /><br /> */}
              No global state. We give you a few primitives to 
              declare state, depend on it, but also free it up, 
              then eliminate any globals you find you no longer need.
            </small>
            `
          </p>
        </div>
      </div>
      <div style="max-width: 100vw; overflow: hidden;">
        <div style="height: 10em" />
        
        <div class="b-papr">
          <div>
            <h2>
              Type safety first
            </h2>
          </div>
          <div>
            <p>
              <br /><br />
              This is our home-made, secret sauce. 
              <br /><br />
              We can detect all your dependencies, in every function. 
              The whole callstack, even nested functions. <b>Before</b> you 
              ever run a line of code.
              <br /><br />
              <small style="display: none;">
                Types? No thanks, are you going to turn my code into Java?
                <br /><br />
                Don't worry, we have two friends that'll make sure your 
                code won't become a verbose, type-soup. 
                <br /><br />
                1) Automatic detection 🤖, 2) Type composer 👨🏼‍🎤
              </small>
              `
            </p>
          </div>
        </div>
        <div class="b-bar">
          <aside />
          <div>
            <div>
              <h3>
                No problem is more challenging than state. From paradigms to design patterns, we're always solving for state.
              </h3>
              <br />
              <hr />
              <br />
            </div>
            <p>
              The Project
              <i><a href="https://www.npmjs.com/package/@hwyblvd/st">@hwyblvd/st</a></i>
            </p>
            <p>
              Frontend
              <i>@hwyblvd/st+</i>
            </p>
            <p>
              Serverside
              <i><a href="https://www.npmjs.com/~hwyblvd">@hwyblvd/server @hwyblvd/swagger</a></i>
            </p>
            <p>
              More
              <i><a href="https://github.com/aikmandean/st/blob/master/index.d.ts#L48">TypeDefinition() IsComposable&lt;T&gt;</a></i>
            </p>
          </div>
        </div>
        <div class="b-code">
          <aside />
        </div>
      </div>
    </div>
  )
};

export default App;
