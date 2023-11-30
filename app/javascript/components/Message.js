import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../redux/slices/messageSlice";

const Message = () => {
  const dispatch = useDispatch();
  const { message, loading } = useSelector((store) => store.message);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  useEffect(() => {}, [loading]);

  return (
    <div>
      {!loading && message?.message && (
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-neutral-600 py-2">Hamlet Quotes</h1>
          <p className="p-4 text-lg shadow-lg rounded-sm">{message?.message}</p>
        </div>
      )}
    </div>
  );
}

export default Message;
