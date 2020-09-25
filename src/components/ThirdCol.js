import React from "react";

const ThirdCol = () => {
  return (
    <div className="thirdcol-content">
      <div className="section-content">
        <h4>
          Your Pages
          <a href="javascript:void(0)">
            <i className="fa fa-caret-up" />
          </a>
          <hr />
        </h4>
        <a href="javascript:void(0)">
          <i className="fa fa-caret-down" />
        </a>
        <a href="javascript:void(0)">
          <img src="//i.imgur.com/k2t0gee.png" />
        </a>
        <p>
          <a href="javascript:void(0)">
            <span>Your Page</span>
          </a>
          <a href="javascript:void(0)">
            <i className="fa fa-comment" />
            Messages
          </a>
          <a href="javascript:void(0)">
            <i className="fa fa-globe" />
            Notifications <span>1</span>
          </a>
        </p>
        <hr />
        <p />
        <p>
          <a href="javascript:void(0)">
            <i className="fa fa-pencil-square-o" />
            Publish
          </a>
          <a href="javascript:void(0)">
            <i className="fa fa-camera" />
            Photo
          </a>
          <a href="javascript:void(0)">
            <i className="fa fa-calendar" />
            Event
          </a>
          <a href="javascript:void(0)">
            <i className="fa fa-bell" />
            Promote
          </a>
        </p>
      </div>
      <div className="section-content">
        <a href="javascript:void(0)">
          <i className="fa fa-calendar" />1 event invite
        </a>
      </div>
      <div className="section-content">
        <h4>
          Trending
          {/* entertainment */}
          <a href="javascript:void(0)">
            <i className="fa fa-video-camera" />
          </a>
          {/* sports */}
          <a href="javascript:void(0)">
            <i className="fa fa-futbol-o" />
          </a>
          {/* science and technology */}
          <a href="javascript:void(0)">
            <i className="fa fa-flask" />
          </a>
          {/* politics */}
          <a href="javascript:void(0)">
            <i className="fa fa-balance-scale" />
          </a>
          {/* top trends */}
          <a className="activetrend" href="javascript:void(0)">
            <i className="fa fa-line-chart" />
          </a>
        </h4>
        <div className="trend-feed">
          <ul>
            <li>
              <a href="javascript:void(0)">Alex Honnold</a>
              <span>
                'Free solo' climber conquers El Capitan without rope, safety
                gear ‑ <span>msn.com</span>
              </span>
            </li>
            <li>
              <a href="javascript:void(0)">Michael Bloomberg</a>
              <span>
                Michael Bloomberg Pledges $15 Million For Paris Climate Pact ‑{" "}
                <span>huffingtonpost.com</span>
              </span>
            </li>
            <li>
              <a href="javascript:void(0)">Theresa May</a>
              <span>
                UK PM May's lead cut to just 1 point over Labour - Survation
                poll ‑ <span>reuters.com</span>
              </span>
            </li>
          </ul>
          <div>
            <a href="javascript:void(0)">
              <i className="fa fa-caret-down" />
              See More
            </a>
            <a href="javascript:void(0)">
              <i className="fa fa-question" />
            </a>
          </div>
        </div>
      </div>
      <div className="section-content">
        <h4>Sponsored</h4>
        <a href="javascript:void(0)">Create Ad</a>
        <div>
          <a href="javascript:void(0)">
            <img src="//i.imgur.com/pZ2VCSf.png" />
            <div>
              Play at Global Poker!
              <div>
                <small>GlobalPoker.com</small>
              </div>
            </div>
            <div>Real Poker. Real Winnings. Legally Cash Out via PayPal</div>
          </a>
        </div>
        <div>
          <a href="javascript:void(0)">
            <img src="//i.imgur.com/2miHaRa.png" />
            <div>
              How To Start Your Own Social Media Marketing Agency and Get Small
              Businesses To Hire You
            </div>
            <div>
              Tai Lopez went from broke &amp; sleeping on his mom's sofa to
              becoming a social media mogul an...
            </div>
          </a>
        </div>
      </div>
      <div className="section-content">
        <a href="javascript:void(0)">English (US)</a> ·{" "}
        <a href="javascript:void(0)">Español</a> ·{" "}
        <a href="javascript:void(0)">Português (Brasil)</a> ·{" "}
        <a href="javascript:void(0)">Français (France)</a> ·{" "}
        <a href="javascript:void(0)">Deutsch</a>
      </div>
      <div>
        <a href="javascript:void(0)">Privacy</a> ·{" "}
        <a href="javascript:void(0)">Terms</a> ·{" "}
        <a href="javascript:void(0)">Advertising</a> ·{" "}
        <a href="javascript:void(0)">Ad Choices</a> ·{" "}
        <a href="javascript:void(0)">Cookies</a> ·{" "}
        <a href="javascript:void(0)">More</a>
        <p>Facebook © 2017</p>
      </div>
    </div>
  );
};

export default ThirdCol;
