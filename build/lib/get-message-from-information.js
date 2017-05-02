"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMessageFromInformation(information) {
    return `Next bus is ${information.waitingTime} minutes away`;
}
exports.getMessageFromInformation = getMessageFromInformation;
