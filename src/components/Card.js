import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  const showDate = (timestamp) => {
    var myDate = new Date(timestamp);
    var myMonthNumber = myDate.getMonth();
    var month = "";
    var date = myDate.getDate();

    switch (myMonthNumber) {
      case 0:
        month = "Jan";
        break;

      case 1:
        month = "Feb";
        break;

      case 2:
        month = "Mar";
        break;

      case 3:
        month = "Apr";
        break;

      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;

      case 6:
        month = "Jul";
        break;

      case 7:
        month = "Aug";
        break;

      case 8:
        month = "Sep";
        break;

      case 9:
        month = "Oct";
        break;

      case 10:
        month = "Nov";
        break;

      case 1:
        month = "Dec";
        break;
    }

    return `${month} ${date}`;
  };

  return (
    // <div class="row p-4">
    <div class="col-lg-4 col-md-6">
      <div
        class="
              row
              no-gutters
              border
              rounded
              overflow-hidden
              flex-md-row
              mb-4
              shadow-sm
              h-md-250
              position-relative
            "
      >
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">{post.title.substring(0, 30) + "..."}</h3>
          <div class="mb-1 text-muted">{showDate(post.createdAt)}</div>
          <p class="mb-auto text-secondary">
            {post.content.substring(0, 50) + " ..."}
          </p>
          {/* <a
              href="/posts/<%=post._id %>"
              target="_blank"
              class="stretched-link"
            >
              Continue reading
            </a> */}
          <Link to={`/post/${post._id}`}  >
            Read More
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Card;
