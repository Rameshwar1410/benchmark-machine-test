import React, { Component } from "react";

class ListStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentRecords: [],
      errorMessage: null,
    };
  }

  componentDidMount() {
    // GET request using fetch with error handling
    fetch("http://localhost/studentApi/api/getAllStudent")
      .then(async (response) => {
        const studentData = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error =
            (studentData && studentData.message) || response.statusText;
          return Promise.reject(error);
        }

        // set data in state
        this.setState({ studentRecords: studentData.data });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }

  // check for prime no.
  isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  secondHighestPocketMoney = () => {
    let studentRecords = [...this.state.studentRecords];
    studentRecords.sort((x, y) => {
      return y["pocket_money"] - x["pocket_money"];
    });

    return JSON.stringify(studentRecords[1]);
  };

  render() {
    return (
      <div className="container">
        <div className="py-4">
          <h1 className="text-center">Student List</h1>
          <p>{this.state.errorMessage}</p>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Student Name</th>
                <th scope="col">Pocket Money</th>
              </tr>
            </thead>

            <tbody>
              {this.state.studentRecords.map((user, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={this.isPrime(user.id) && "checked"}
                    />
                  </td>
                  <td>{user.id}</td>
                  <td>{user.first_name + user.last_name}</td>
                  <td>{user.pocket_money}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-12 mt-5">
          <h1 className="text-center mb-5">2nd Highest Pocket Money</h1>
          <div class="card">
            <div class="card-body">
              <pre>{this.secondHighestPocketMoney()}</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListStudent;
