import React from "react";

function Navigation({ activeTab, handleActiveTab }) {
  return (
    <div>
      {activeTab.map((item) => {
        return (
          <button
            onClick={() => {
              if (!item.isActive) {
                handleActiveTab(item.id);
              }
            }}
            className={item.isActive ? "" : ""}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export default Navigation;
