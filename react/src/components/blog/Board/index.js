import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

import Unit from "./Unit";
import axios from "@lib/Axios";

import { connect } from "react-redux";

function Board({ auth }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function reqData() {
      let req = await axios.get("blog/articles");
      console.log(req.data);
      setData(req.data.success);
    })();
  }, []);

  const list = data.map((item) => {
    return (
      <Unit
        key={"article" + item.articleId}
        data={item.article}
        id={item.articleId}
        auth={auth}
      />
    );
  });

  return (
    <div className={styles.board}>
      <ul className={styles.boardList}>{list}</ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, null)(Board);
