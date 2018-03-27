"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/CustomHead.js";


function CustomHead(props) {
  var url = props.url,
      type = props.type,
      image = props.image,
      video = props.video;

  var title = props.title ? props.title + " - " + _config2.default.siteTitle : _config2.default.siteTitle;
  var description = props.description ? props.description : _config2.default.description;
  return _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, title), _react2.default.createElement("meta", { name: "description", content: description, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), url && _react2.default.createElement("meta", { property: "og:url", content: url, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement("meta", { property: "og:type", content: type || "website", __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement("meta", { property: "og:title", content: title, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement("meta", { property: "og:description", content: description, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), video && _react2.default.createElement("meta", { property: "og:video", content: video, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), image && _react2.default.createElement("meta", { property: "og:image", content: image, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }));
}

exports.default = CustomHead;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ3VzdG9tSGVhZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJDb25maWciLCJDdXN0b21IZWFkIiwicHJvcHMiLCJ1cmwiLCJ0eXBlIiwiaW1hZ2UiLCJ2aWRlbyIsInRpdGxlIiwic2l0ZVRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsU0FBQSxBQUFTLFdBQVQsQUFBb0IsT0FBTztNQUFBLEFBQ2pCLE1BRGlCLEFBQ1csTUFEWCxBQUNqQjtNQURpQixBQUNaLE9BRFksQUFDVyxNQURYLEFBQ1o7TUFEWSxBQUNOLFFBRE0sQUFDVyxNQURYLEFBQ047TUFETSxBQUNDLFFBREQsQUFDVyxNQURYLEFBQ0MsQUFDMUI7O01BQU0sUUFBUSxNQUFBLEFBQU0sUUFDYixNQURPLEFBQ0QsZ0JBQVcsaUJBRFYsQUFDaUIsWUFDM0IsaUJBRkosQUFFVyxBQUNYO01BQU0sY0FBYyxNQUFBLEFBQU0sY0FDdEIsTUFEZ0IsQUFDVixjQUNOLGlCQUZKLEFBRVcsQUFDWDt5QkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQVE7QUFBUjtBQUFBLEtBREYsQUFDRSxBQUNBLGdEQUFNLE1BQU4sQUFBVyxlQUFjLFNBQXpCLEFBQWtDO2dCQUFsQztrQkFGRixBQUVFLEFBQ0M7QUFERDtxREFDYyxVQUFOLEFBQWUsVUFBUyxTQUF4QixBQUFpQztnQkFBakM7a0JBSFYsQUFHVSxBQUNSO0FBRFE7R0FBQSwyQ0FDRixVQUFOLEFBQWUsV0FBVSxTQUFTLFFBQWxDLEFBQTBDO2dCQUExQztrQkFKRixBQUlFLEFBQ0E7QUFEQTs4Q0FDTSxVQUFOLEFBQWUsWUFBVyxTQUExQixBQUFtQztnQkFBbkM7a0JBTEYsQUFLRSxBQUNBO0FBREE7OENBQ00sVUFBTixBQUFlLGtCQUFpQixTQUFoQyxBQUF5QztnQkFBekM7a0JBTkYsQUFNRSxBQUNDO0FBREQ7dURBQ2dCLFVBQU4sQUFBZSxZQUFXLFNBQTFCLEFBQW1DO2dCQUFuQztrQkFQWixBQU9ZLEFBQ1Q7QUFEUztHQUFBLG9EQUNNLFVBQU4sQUFBZSxZQUFXLFNBQTFCLEFBQW1DO2dCQUFuQztrQkFUZCxBQUNFLEFBUVksQUFHZjtBQUhlO0dBQUE7QUFLaEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ3VzdG9tSGVhZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZG5pY2hvbHMvRG9jdW1lbnRzL1Byb2plY3RzL1NURU1KT0JTL0NsaWVudHMvUmVkY2VsbC9SZWRjZWxsIERldi9zdGVtdHlwZSJ9