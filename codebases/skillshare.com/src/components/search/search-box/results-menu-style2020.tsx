var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { bodyMargin, color, maxWidthForScreen, minWidthForScreen, typography } from '../../../themes/utils';
export var SearchBoxResultsMenuStyle2020 = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    border: 1px solid ", ";\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    width: 100%;\n    min-width: 350px;\n    margin-top: 4px;\n    padding: 16px 0 24px 0;\n\n    ", "\n\n    &:hover {\n        cursor: default;\n    }\n\n    @media screen and (min-width: ", ") {\n        max-height: 75vh;\n        overflow: auto;\n    }\n\n    @media screen and (max-width: ", ") {\n        width: 350px;\n    }\n\n    @media screen and (max-width: ", ") {\n        border: none;\n        width: 100%;\n        margin-top: 12px;\n        min-width: unset;\n        padding: 0;\n    }\n\n    .results-list-wrapper {\n        @media screen and (max-width: ", ") {\n            position: fixed;\n            top: 64px;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            overflow: scroll;\n        }\n    }\n\n    .search-query-link {\n        color: ", ";\n\n        font-weight: normal;\n        display: flex;\n        min-height: 20px;\n        padding: 12px 24px;\n        text-decoration: none;\n\n        .highlight {\n            color: ", ";\n        }\n\n        &:hover,\n        &.active {\n            background-color: ", ";\n        }\n    }\n\n    .results-list {\n        .filter-title {\n            margin: 24px 24px 16px 24px;\n            padding-bottom: 8px;\n            border-bottom: 1px solid ", ";\n            color: ", ";\n\n            @media screen and (max-width: ", ") {\n                margin-left: ", "px;\n            }\n        }\n\n        .list-item {\n            color: ", ";\n\n            text-decoration: none;\n            display: flex;\n            min-height: 20px;\n            align-items: center;\n            cursor: default;\n            padding: ", "px 24px;\n            margin: 0;\n            cursor: pointer;\n            font-weight: normal;\n\n            @media screen and (max-width: ", ") {\n                padding: ", "px ", "px;\n            }\n\n            img {\n                display: inline-block;\n                vertical-align: middle;\n                margin-right: 8px;\n            }\n\n            &:hover,\n            &.active {\n                background-color: ", ";\n            }\n\n            &:active {\n                background-color: ", ";\n            }\n\n            .tag-icon {\n                display: inline;\n                margin-right: 10px;\n\n                &:before {\n                    color: ", ";\n                    font-size: 18px;\n                    position: relative;\n                    top: 4px;\n                }\n            }\n\n            & > div:first-child {\n                justify-content: flex-start;\n                margin-right: 4px;\n            }\n\n            .avatar {\n                width: 25px;\n                height: 25px;\n                margin-right: 10px;\n                margin-left: 5px;\n                vertical-align: middle;\n                border-radius: 50%;\n            }\n\n            .name-tag-label {\n                color: ", ";\n                background-color: ", ";\n\n                font-size: 13px;\n                font-weight: 600;\n                display: flex;\n                height: 28px;\n                margin-right: 16px;\n                cursor: pointer;\n                white-space: pre-wrap;\n                border-radius: 30px;\n                align-items: center;\n                padding: 0 20px;\n\n                &:hover {\n                    background-color: ", ";\n                    color: ", ";\n                }\n\n                &:active {\n                    background-color: ", ";\n                }\n            }\n\n            .count-label {\n                color: ", ";\n\n                flex: 5;\n                text-align: right;\n                font-weight: 400;\n                font-size: 13px;\n            }\n        }\n    }\n"], ["\n    background-color: ", ";\n    border: 1px solid ", ";\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    width: 100%;\n    min-width: 350px;\n    margin-top: 4px;\n    padding: 16px 0 24px 0;\n\n    ", "\n\n    &:hover {\n        cursor: default;\n    }\n\n    @media screen and (min-width: ", ") {\n        max-height: 75vh;\n        overflow: auto;\n    }\n\n    @media screen and (max-width: ", ") {\n        width: 350px;\n    }\n\n    @media screen and (max-width: ", ") {\n        border: none;\n        width: 100%;\n        margin-top: 12px;\n        min-width: unset;\n        padding: 0;\n    }\n\n    .results-list-wrapper {\n        @media screen and (max-width: ", ") {\n            position: fixed;\n            top: 64px;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            overflow: scroll;\n        }\n    }\n\n    .search-query-link {\n        color: ", ";\n\n        font-weight: normal;\n        display: flex;\n        min-height: 20px;\n        padding: 12px 24px;\n        text-decoration: none;\n\n        .highlight {\n            color: ", ";\n        }\n\n        &:hover,\n        &.active {\n            background-color: ", ";\n        }\n    }\n\n    .results-list {\n        .filter-title {\n            margin: 24px 24px 16px 24px;\n            padding-bottom: 8px;\n            border-bottom: 1px solid ", ";\n            color: ", ";\n\n            @media screen and (max-width: ", ") {\n                margin-left: ", "px;\n            }\n        }\n\n        .list-item {\n            color: ", ";\n\n            text-decoration: none;\n            display: flex;\n            min-height: 20px;\n            align-items: center;\n            cursor: default;\n            padding: ", "px 24px;\n            margin: 0;\n            cursor: pointer;\n            font-weight: normal;\n\n            @media screen and (max-width: ", ") {\n                padding: ", "px ", "px;\n            }\n\n            img {\n                display: inline-block;\n                vertical-align: middle;\n                margin-right: 8px;\n            }\n\n            &:hover,\n            &.active {\n                background-color: ", ";\n            }\n\n            &:active {\n                background-color: ", ";\n            }\n\n            .tag-icon {\n                display: inline;\n                margin-right: 10px;\n\n                &:before {\n                    color: ", ";\n                    font-size: 18px;\n                    position: relative;\n                    top: 4px;\n                }\n            }\n\n            & > div:first-child {\n                justify-content: flex-start;\n                margin-right: 4px;\n            }\n\n            .avatar {\n                width: 25px;\n                height: 25px;\n                margin-right: 10px;\n                margin-left: 5px;\n                vertical-align: middle;\n                border-radius: 50%;\n            }\n\n            .name-tag-label {\n                color: ", ";\n                background-color: ", ";\n\n                font-size: 13px;\n                font-weight: 600;\n                display: flex;\n                height: 28px;\n                margin-right: 16px;\n                cursor: pointer;\n                white-space: pre-wrap;\n                border-radius: 30px;\n                align-items: center;\n                padding: 0 20px;\n\n                &:hover {\n                    background-color: ", ";\n                    color: ", ";\n                }\n\n                &:active {\n                    background-color: ", ";\n                }\n            }\n\n            .count-label {\n                color: ", ";\n\n                flex: 5;\n                text-align: right;\n                font-weight: 400;\n                font-size: 13px;\n            }\n        }\n    }\n"])), color(function (c) { return c.white; }), color(function (c) { return c.concrete; }), typography(function (t) { return t.normal; }), maxWidthForScreen('medium'), minWidthForScreen('large'), minWidthForScreen('medium'), maxWidthForScreen('medium'), color(function (c) { return c.concrete; }), color(function (c) { return c.charcoal; }), color(function (c) { return c.concrete; }), color(function (c) { return c.concrete; }), color(function (c) { return c.heather; }), maxWidthForScreen('medium'), bodyMargin * 2, color(function (c) { return c.navy; }), bodyMargin + 4, maxWidthForScreen('medium'), bodyMargin, bodyMargin * 2, color(function (c) { return c.concrete; }), color(function (c) { return c.concrete; }), color(function (c) { return c.concrete; }), color(function (c) { return c.heather; }), color(function (c) { return c.silver; }), color(function (c) { return c.concrete; }), color(function (c) { return c.white; }), color(function (c) { return c.charcoal; }), color(function (c) { return c.heather; }));
var templateObject_1;
//# sourceMappingURL=results-menu-style2020.js.map