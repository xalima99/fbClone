import React from "react";

const FeedContent = () => {
  return (
    <div className="feed-content">
      <div className="recentcontainer">
        <ul className="newpostheader nav nav-tabs nav-justified">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-pencil" />
              <span>Create a Post</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-book" />
              <span>Media Album</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-video-camera" />
              <span>Live Video</span>
            </a>
          </li>
        </ul>
        <div className="newpost">
          <textarea
            className="yo"
            placeholder="Post Something..."
            defaultValue={""}
          />
        </div>
        <ul className="newpostfooter nav nav-tabs nav-justified">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-picture-o" />
              <span>Photo/Video</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-smile-o" />
              <span>Feeling/Activity</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-ellipsis-h" />
            </a>
          </li>
        </ul>
      </div>
      <div className="recentcontainer">
        <div className="newpostheader">
          <a href="javascript:void(0)">
            <img src="//i.imgur.com/5jInimY.jpg" />
            <span className="name">First Last</span>
          </a>
          <span>
            shared <a href="javascript:void(0)">Demyos's</a>{" "}
            <a href="javascript:void(0)">post</a>.
          </span>
          <p>
            <a className="date" href="javascript:void(0)">
              44 mins
            </a>
            <a href="javascript:void(0)">
              <i className="fa fa-globe" />
            </a>
          </p>
          <div className="rightsideofpost">
            <a className="follow" href="javascript:void(0)">
              <i className="fa fa-star" />
            </a>
            <a className="personpostmenu" href="javascript:void(0)">
              <i className="fa fa-caret-down" />
            </a>
          </div>
          <p />
        </div>
        <div className="newpost">
          <div className="postcontent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            sunt quasi in quam asperiores! Optio voluptate impedit eos ex nisi,
            molestias facilis sint cupiditate, dolores veritatis cum? Enim vel,
            qui!
          </div>
        </div>
        <ul className="newpostfooter nav nav-tabs nav-justified">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-thumbs-up" />
              <span>Like</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" title="Leave a comment">
              <i className="fa fa-comment-o" />
              <span>Comment</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              title="Send this to friends or post it to your timeline"
            >
              <i className="fa fa-share" />
              <span>Share</span>
            </a>
          </li>
        </ul>
        <ul className="community-counter nav nav-tabs nav-justified">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-thumbs-up" />
              <span>1</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-comment-o" />
              <span>3</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-share" />
              <span>4</span>
            </a>
          </li>
        </ul>
        <div className="commentpost">
          <div className="input-group">
            <a href="javascript:void(0)">
              <img src="//i.imgur.com/5jInimY.jpg" />
            </a>
            <textarea
              className="form-control"
              placeholder="Write a comment..."
              defaultValue={""}
            />
            <div className="input-group-btn">
              <a className="btn btn-default" href="javascript:void(0)">
                <i className="fa fa-smile-o" />
              </a>
              <a className="btn btn-default" href="javascript:void(0)">
                <i className="fa fa-picture-o" />
              </a>
              <a className="btn btn-default" href="javascript:void(0)">
                <i className="fa fa-gift" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="recentcontainer">
        <div className="newpostheader">
          <h4>Suggested post</h4>
          <hr />
          <a href="javascript:void(0)">
            <img src="//i.imgur.com/5jInimY.jpg" />
            <span className="name">First Last</span>
          </a>
          <p>
            <a className="date" href="javascript:void(0)">
              Sponsored
            </a>
            <a href="javascript:void(0)">
              <i className="fa fa-globe" />
            </a>
          </p>
          <div className="rightsideofpost">
            <a className="follow" href="javascript:void(0)">
              <i className="fa fa-star" />
            </a>
            <a className="personpostmenu" href="javascript:void(0)">
              <i className="fa fa-caret-down" />
            </a>
          </div>
          <p />
        </div>
        <div className="newpost">
          <div className="postcontent">
            We lose 48 football fields of forest every minute. :-( By using "
            <a href="http://ecosia.org">Ecosia.org</a>" for your web searches
            you can help stop this trend. Let's plant some trees together!
            <div className="tc">
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fecosia%2Fvideos%2F10154359809121611%2F&show_text=0&width=400"
                width={400}
                height={400}
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder={0}
                allowTransparency="true"
                allowFullScreen="true"
              />
            </div>
          </div>
        </div>
        <ul className="newpostfooter nav nav-tabs nav-justified">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-thumbs-up" />
              <span>Like</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" title="Leave a comment">
              <i className="fa fa-comment-o" />
              <span>Comment</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              title="Send this to friends or post it to your timeline"
            >
              <i className="fa fa-share" />
              <span>Share</span>
            </a>
          </li>
        </ul>
        <ul className="community-counter nav nav-tabs nav-justified">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-thumbs-up" />
              <span>1</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-comment-o" />
              <span>3</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-share" />
              <span>4</span>
            </a>
          </li>
        </ul>
        <div className="commentpost">
          <div className="input-group">
            <a href="javascript:void(0)">
              <img src="//i.imgur.com/5jInimY.jpg" />
            </a>
            <textarea
              className="form-control"
              placeholder="Write a comment..."
              defaultValue={""}
            />
            <div className="input-group-btn">
              <a className="btn btn-default" href="javascript:void(0)">
                <i className="fa fa-smile-o" />
              </a>
              <a className="btn btn-default" href="javascript:void(0)">
                <i className="fa fa-picture-o" />
              </a>
              <a className="btn btn-default" href="javascript:void(0)">
                <i className="fa fa-gift" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="recentcontainer">
        <div className="newpostheader">
          <a href="javascript:void(0)">
            <img src="//i.imgur.com/5jInimY.jpg" />
            <span className="name">First Last</span>
          </a>
          <p>
            <a className="date" href="javascript:void(0)">
              44 mins
            </a>
            <a href="javascript:void(0)">
              <i className="fa fa-globe" />
            </a>
          </p>
          <div className="rightsideofpost">
            <a className="follow" href="javascript:void(0)">
              <i className="fa fa-star" />
            </a>
            <a className="personpostmenu" href="javascript:void(0)">
              <i className="fa fa-caret-down" />
            </a>
          </div>
          <p />
        </div>
        <div className="newpost">
          <div className="postcontent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            sunt quasi in quam asperiores! Optio voluptate impedit eos ex nisi,
            molestias facilis sint cupiditate, dolores veritatis cum? Enim vel,
            qui!
          </div>
        </div>
        <ul className="newpostfooter nav nav-tabs nav-justified">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-thumbs-up" />
              <span>Like</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" title="Leave a comment">
              <i className="fa fa-comment-o" />
              <span>Comment</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              title="Send this to friends or post it to your timeline"
            >
              <i className="fa fa-share" />
              <span>Share</span>
            </a>
          </li>
        </ul>
        <ul className="community-counter nav nav-tabs nav-justified">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-thumbs-up" />
              <span>1</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-comment-o" />
              <span>3</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-share" />
              <span>4</span>
            </a>
          </li>
        </ul>
        <div className="commentpost">
          <div className="input-group">
            <a href="javascript:void(0)">
              <img src="//i.imgur.com/5jInimY.jpg" />
            </a>
            <textarea
              className="form-control"
              placeholder="Write a comment..."
              defaultValue={""}
            />
            <div className="input-group-btn">
              <a className="btn btn-default" href="javascript:void(0)">
                <i className="fa fa-smile-o" />
              </a>
              <a className="btn btn-default" href="javascript:void(0)">
                <i className="fa fa-picture-o" />
              </a>
              <a className="btn btn-default" href="javascript:void(0)">
                <i className="fa fa-gift" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedContent;
