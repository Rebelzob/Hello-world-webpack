import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../redux/slices/messageSlice";

const Message = () => {
  const dispatch = useDispatch();
  const { message, loading} = useSelector((store) => store.message);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  useEffect(() => {}, [loading]);

  return (
    <div>
      {!loading && message?.message && (
        <div class="container text-center">
          <h1 class="text-3xl text-neutral-600 py-2">Hamlet Quotes</h1>
          <p class="p-4 text-lg shadow-lg rounded-sm">{message?.message}</p>
        </div>
      )}
    </div>
  );
}

export default Message;
