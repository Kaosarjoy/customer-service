import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import DotImg from "../../assets/record-button.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  useEffect(() => {
    fetch("/tiket.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  // Ticket click → add/remove selectedTasks
  const handleSelect = (ticket) => {
    if (selectedTasks.some((t) => t.id === ticket.id)) {
      setSelectedTasks(selectedTasks.filter((t) => t.id !== ticket.id));
    } else {
      setSelectedTasks([...selectedTasks, ticket]);
    }
  };

  // Complete selected tasks
  const handleComplete = (task) => {
    setResolvedTasks([...resolvedTasks, task]);
    setTickets(
      tickets.map((t) =>
        t.id === task.id ? { ...t, status: "Resolved" } : t
      )
    );
    setSelectedTasks(selectedTasks.filter((t) => t.id !== task.id));

    // Toast show
    toast.success(` Task Has Solved`);
  };

  // Resolve Delete Button
  const handleDeleteResolved = (taskId) => {
    setResolvedTasks(resolvedTasks.filter((t) => t.id !== taskId));
    toast.info("Task deleted ");
  };

  // Button color by priority
  const getButtonColor = (priority) => {
    if (priority === "High")
      return "bg-green-100 text-green-700 hover:bg-green-200";
    if (priority === "Medium")
      return "bg-yellow-100 text-yellow-700 hover:bg-yellow-200";
    return "bg-gray-100 text-gray-700 hover:bg-gray-200";
  };

  return (
    <div className="flex gap-6 mt-6 mx-auto">
      {/* Customer Tickets */}
      <div className="w-2/3">
        <h2 className="text-xl font-bold mb-4">Customer Tickets</h2>
        <Section />
        <div className="grid md:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => handleSelect(ticket)}
              className={`cursor-pointer max-w-md mx-auto mt-6 p-5 rounded-2xl shadow-lg border bg-white border-gray-200 hover:shadow-xl transition duration-300`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {ticket.title}
                </h2>
                <button
                  className={`flex items-center gap-2 px-3 py-1 rounded-lg transition ${getButtonColor(
                    ticket.priority
                  )}`}
                >
                  <img src={DotImg} alt="dot" className="w-3 h-3" />
                  <span className="font-medium">{ticket.status}</span>
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">{ticket.description}</p>

              {/* Footer Info */}
              <div className="text-sm text-gray-700 flex gap-4">
                <p>
                  <span className="font-semibold">Id:</span> {ticket.id}
                </p>
                <p>
                  <span className="font-semibold">Priority:</span>{" "}
                  {ticket.priority}
                </p>
                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {ticket.customer}
                </p>
                <p>
                  <span className="font-semibold">Date:</span>{" "}
                  {ticket.createdAt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task Status */}
      <div className="w-1/3">
        <h2 className="text-xl font-bold mb-4">Task Status</h2>

        {/* Selected Tasks panel */}
        {selectedTasks.length > 0 && (
          <div className="mb-4">
            {selectedTasks.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-xl shadow-md p-4 mb-3 border"
              >
                <h3 className="text-lg font-semibold text-black">
                  {task.title}
                </h3>
                <p className="text-gray-600">{task.description}</p>
                {/* Complete button for just this task */}
                <button
                  onClick={() => handleComplete(task)}
                  className="px-4 py-2 bg-green-600 text-white rounded-[10px] w-full"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Resolved Tasks */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Resolved Tasks</h3>
          {resolvedTasks.length === 0 ? (
            <p className="text-sm text-gray-500">No resolved tasks yet</p>
          ) : (
            resolvedTasks.map((task) => (
              <div
                key={task.id}
                className="bg-blue-200 p-2 mb-2 rounded flex justify-between items-center"
              >
                <p className="text-md font-semibold text-gray-600">
                  {task.description}
                </p>
                <button
                  onClick={() => handleDeleteResolved(task.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default CustomerTickets;
