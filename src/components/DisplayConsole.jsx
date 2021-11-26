import React, { Component } from "react";
import Table from "./Table";

const data = [{"capsule_serial":"C101","capsule_id":"dragon1","status":"retired","original_launch":"2010-12-08T15:43:00.000Z","original_launch_unix":1291822980,"missions":[{"name":"COTS 1","flight":7}],"landings":1,"type":"Dragon 1.0","details":"Reentered after three weeks in orbit","reuse_count":0},{"capsule_serial":"C102","capsule_id":"dragon1","status":"retired","original_launch":"2012-05-22T07:44:00.000Z","original_launch_unix":1335944640,"missions":[{"name":"COTS 2","flight":8}],"landings":1,"type":"Dragon 1.0","details":"First Dragon spacecraft","reuse_count":0}];

const DisplayConsole = () => {
    return (
        <Table headers={getTableHeaders(data[0])} rows={getTableData(data)} />
    );
};

const getTableHeaders = (capsuleObject) => {
    return Object.keys(capsuleObject);        
};


const getTableData = (capsuleData) => {
    let tableData = [];
    capsuleData.map((row) => {
        let tableRow = [];
        Object.values(row).map(column => {
            if(typeof(column) === "object") {
                column = JSON.stringify(column);
            }
            tableRow.push(column); 
        });
        tableData.push(tableRow);
    });
    return tableData; 
};

export default DisplayConsole;