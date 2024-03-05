import { jsx, jsxs } from "react/jsx-runtime";
import React, { Fragment } from "react";
import { e as createSvgIcon, bn as AccountCircleIcon, bo as AddAPhotoIcon, bp as ApiIcon, A as ArrowDropDownIcon, bq as CheckBoxOutlineBlankIcon, a$ as CheckCircleIcon, G as CheckIcon, H as CloseIcon, br as ComputerIcon, bs as DangerousIcon, bt as DarkModeIcon, bu as DevicesIcon, W as DoneAllIcon, a_ as ErrorIcon, bv as ErrorOutlineIcon, aS as ExitToAppIcon, bw as FileDownloadDoneIcon, bx as ForumIcon, by as GroupAddIcon, av as KeyboardArrowDownIcon, bz as LanguageIcon, bA as LightModeIcon, bB as LightbulbIcon, bC as LockIcon, M as LoginIcon, bD as MenuIcon, bE as NotificationsIcon, bF as PaymentsIcon, bG as PeopleIcon, bH as PersonIcon, bI as PhonelinkLockIcon, n as SearchIcon, bJ as SettingsIcon, bK as SmartphoneIcon, bL as TabletIcon, au as WarningIcon, R as ButtonBase, T as Trans, bM as elementToTree, bN as EnvatoIcon, bO as FacebookIcon$1, bP as TwitterIcon } from "../server-entry.mjs";
import { A as AddIcon, Q as ArrowBackIcon, aa as ArrowDownwardIcon, ab as ArrowRightAltIcon, ac as ChevronLeftIcon, a4 as DateRangeIcon, x as DeleteIcon, k as FileDownloadIcon, K as KeyboardArrowLeftIcon, f as KeyboardArrowRightIcon, L as LinkIcon, ad as MenuOpenIcon, M as MoreVertIcon, P as UnfoldMoreIcon } from "./UnfoldMore-39cfd8ca.mjs";
import { A as ArrowRightIcon, B as BackupIcon, C as ContentCopyIcon, d as CreateNewFolderIcon, f as DeleteForeverIcon, D as DriveFileMoveIcon, b as DriveFileRenameOutlineIcon, e as DriveFolderUploadIcon, F as FileUploadIcon, j as FolderIcon, G as GridViewIcon, i as GroupIcon, k as GroupsIcon, I as ImportExportIcon, m as InfoIcon, P as PersonAddIcon, R as RemoveRedEyeIcon, c as RestoreIcon, g as SortIcon, S as StarIcon, a as StarOutlineIcon, h as StorageIcon, U as UploadFileIcon, V as ViewListIcon, l as ViewModuleIcon } from "./Info-9a52876e.mjs";
import { C as CalendarTodayIcon, O as OpenInNewIcon } from "./OpenInNew-e9f1759c.mjs";
import { C as ChevronRightIcon, E as EditIcon, M as MoreHorizIcon } from "./Edit-0bb552cc.mjs";
import { C as CodeIcon, D as DragIndicatorIcon, a as FilterAltIcon, b as FormatAlignCenterIcon, c as FormatAlignJustifyIcon, d as FormatAlignLeftIcon, e as FormatAlignRightIcon, f as FormatBoldIcon, g as FormatClearIcon, h as FormatColorFillIcon, i as FormatColorTextIcon, j as FormatIndentDecreaseIcon, k as FormatIndentIncreaseIcon, l as FormatItalicIcon, m as FormatListBulletedIcon, n as FormatListNumberedIcon, o as FormatUnderlinedIcon, H as HorizontalRuleIcon, I as ImageIcon, N as NoteIcon, P as PauseIcon, p as PersonOffIcon, q as PlayArrowIcon, r as PriorityHighIcon, R as RedoIcon, s as ReportIcon, t as RestartAltIcon, S as SmartDisplayIcon, u as SyncIcon, T as TranslateIcon, v as TuneIcon, U as UndoIcon, w as UnfoldLessIcon, V as VisibilityIcon, x as useFilter, y as iconGridStyle } from "./admin-routes-5723402e.mjs";
import { T as TaskAltIcon } from "./TaskAlt-ae9c93d3.mjs";
import { b as TrendingDownIcon, a as TrendingFlatIcon, T as TrendingUpIcon } from "./TrendingUp-58bc999b.mjs";
import clsx from "clsx";
import "react-dom/server";
import "process";
import "http";
import "@tanstack/react-query";
import "axios";
import "react-router-dom/server.mjs";
import "framer-motion";
import "@internationalized/date";
import "nano-memoize";
import "zustand";
import "zustand/middleware/immer";
import "nanoid";
import "react-router-dom";
import "deepmerge";
import "@internationalized/number";
import "@react-stately/utils";
import "@react-aria/utils";
import "@floating-ui/react-dom";
import "react-merge-refs";
import "@react-aria/focus";
import "react-dom";
import "@react-aria/ssr";
import "react-hook-form";
import "dot-object";
import "immer";
import "axios-retry";
import "tus-js-client";
import "react-use-cookie";
import "mime-match";
import "react-use-clipboard";
import "@react-aria/interactions";
import "zustand/middleware";
import "react-colorful";
import "@react-stately/color";
import "deep-object-diff";
import "@tanstack/react-virtual";
import "slugify";
import "./use-resume-subscription-c4c1a8ac.mjs";
const AbcIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 11h-1.5v-.5h-2v3h2V13H21v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zM8 10v5H6.5v-1.5h-2V15H3v-5c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm-1.5.5h-2V12h2v-1.5zm7 1.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-4V9h4c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM11 10.5v.75h2v-.75h-2zm2 2.25h-2v.75h2v-.75z" }),
  "AbcOutlined"
);
const AcUnitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z" }),
  "AcUnitOutlined"
);
const AccessAlarmIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" }),
  "AccessAlarmOutlined"
);
const AccessAlarmsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m22 5.7-4.6-3.9-1.3 1.5 4.6 3.9L22 5.7zM7.9 3.4 6.6 1.9 2 5.7l1.3 1.5 4.6-3.8zM12.5 8H11v6l4.7 2.9.8-1.2-4-2.4V8zM12 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z" }),
  "AccessAlarmsOutlined"
);
const AccessTimeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" }),
  "AccessTimeOutlined"
);
const AccessTimeFilledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z" }),
  "AccessTimeFilledOutlined"
);
const AccessibilityIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" }),
  "AccessibilityOutlined"
);
const AccessibilityNewIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" }),
  "AccessibilityNewOutlined"
);
const AccessibleIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "12", cy: "4", r: "2" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-9 7c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07c-.41 1.16-1.52 2-2.83 2z" }, "1")],
  "AccessibleOutlined"
);
const AccessibleForwardIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "18", cy: "4.54", r: "2" }, "0"), /* @__PURE__ */ jsx("path", { d: "M15 17h-2c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3v-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5zm3-3.5h-1.86l1.67-3.67C18.42 8.5 17.44 7 15.96 7h-5.2c-.81 0-1.54.47-1.87 1.2L8.22 10l1.92.53.65-1.53H13l-1.83 4.1c-.6 1.33.39 2.9 1.85 2.9H18v5h2v-5.5c0-1.1-.9-2-2-2z" }, "1")],
  "AccessibleForwardOutlined"
);
const AccountBalanceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z" }),
  "AccountBalanceOutlined"
);
const AccountBalanceWalletIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "16", cy: "12", r: "1.5" }, "1")],
  "AccountBalanceWalletOutlined"
);
const AccountBoxIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 5v14H5V5h14m0-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 10H6v-1.53c0-2.5 3.97-3.58 6-3.58s6 1.08 6 3.58V18zm-9.69-2h7.38c-.69-.56-2.38-1.12-3.69-1.12s-3.01.56-3.69 1.12z" }),
  "AccountBoxOutlined"
);
const AccountTreeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z" }),
  "AccountTreeOutlined"
);
const AdUnitsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4V3h10v1H7zm0 14V6h10v12H7zm0 3v-1h10v1H7z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M16 7H8v2h8V7z" }, "1")],
  "AdUnitsOutlined"
);
const AdbIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }),
  "AdbOutlined"
);
const AddAlarmIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z" }),
  "AddAlarmOutlined"
);
const AddAlertIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zM12 6c2.76 0 5 2.24 5 5v7H7v-7c0-2.76 2.24-5 5-5zm0-4.5c-.83 0-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1l-2-2v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5zM13 8h-2v3H8v2h3v3h2v-3h3v-2h-3z" }),
  "AddAlertOutlined"
);
const AddBoxIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z" }),
  "AddBoxOutlined"
);
const AddBusinessIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zm-5.96-6 .6-3h11.72l.6 3H3.04z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3z" }, "1")],
  "AddBusinessOutlined"
);
const AddCardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h10v-2H4v-6h18V6c0-1.11-.89-2-2-2zm0 4H4V6h16v2zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3z" }),
  "AddCardOutlined"
);
const AddCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" }),
  "AddCircleOutlined"
);
const AddCircleOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }),
  "AddCircleOutlineOutlined"
);
const AddCommentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-2 13.17L18.83 16H4V4h16v13.17zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z" }),
  "AddCommentOutlined"
);
const AddIcCallIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 15.45c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.4 8.5 5.2 8.5 3.95c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 4.95h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.92c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51zM18 5.95v-3h-2v3h-3v2h3v3h2v-3h3v-2z" }),
  "AddIcCallOutlined"
);
const AddLinkIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 11h8v2H8v-2zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1zM3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z" }),
  "AddLinkOutlined"
);
const AddLocationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 6v3h3v2h-3v3h-2v-3H8V9h3V6h2zm5 4.2C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z" }),
  "AddLocationOutlined"
);
const AddLocationAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 1v3h3v2h-3v3h-2V6h-3V4h3V1h2zm-8 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1-9.94v2.02A6.53 6.53 0 0 0 12 5c-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.79 6-9.14V11h2v.2c0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 6.22 7.8 3 12 3c.34 0 .67.02 1 .06z" }),
  "AddLocationAltOutlined"
);
const AddModeratorIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M6 11.09v-4.7l6-2.25 6 2.25v3.69c.71.1 1.38.31 2 .6V5l-8-3-8 3v6.09c0 5.05 3.41 9.76 8 10.91.03-.01.05-.02.08-.02-.79-.78-1.4-1.76-1.75-2.84C7.76 17.53 6 14.42 6 11.09z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3 5.5h-2.5V20h-1v-2.5H14v-1h2.5V14h1v2.5H20v1z" }, "1")],
  "AddModeratorOutlined"
);
const AddPhotoAlternateIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z" }),
  "AddPhotoAlternateOutlined"
);
const AddReactionIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 9.5C7 8.67 7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5zm5 8c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5zm3.5-6.5c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zM22 1h-2v2h-2v2h2v2h2V5h2V3h-2V1zm-2 11c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.46 0 2.82.4 4 1.08V2.84C14.77 2.3 13.42 2 11.99 2 6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12c0-1.05-.17-2.05-.47-3H19.4c.38.93.6 1.94.6 3z" }),
  "AddReactionOutlined"
);
const AddRoadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2zM18 4h2v9h-2zM4 4h2v16H4zm7 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2z" }),
  "AddRoadOutlined"
);
const AddShoppingCartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z" }),
  "AddShoppingCartOutlined"
);
const AddTaskIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72zm7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3z" }),
  "AddTaskOutlined"
);
const AddToDriveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 11c.17 0 .33.01.49.02L15 3H9l5.68 9.84C15.77 11.71 17.3 11 19 11zM8.15 4.52 2 15.5 5 21l6.33-10.97zM13.2 15.5H9.9L6.73 21h7.81c-.96-1.06-1.54-2.46-1.54-4 0-.52.07-1.02.2-1.5zm6.8.5v-3h-2v3h-3v2h3v3h2v-3h3v-2z" }),
  "AddToDriveOutlined"
);
const AddToHomeScreenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 1.01 8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41V15z" }),
  "AddToHomeScreenOutlined"
);
const AddToPhotosIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z" }),
  "AddToPhotosOutlined"
);
const AddToQueueIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 15h2v-3h3v-2h-3V7h-2v3H8v2h3zM21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" }),
  "AddToQueueOutlined"
);
const AddchartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 5v2h-3v3h-2V7h-3V5h3V2h2v3h3zm-3 14H5V5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6zm-4-6v4h2v-4h-2zm-4 4h2V9h-2v8zm-2 0v-6H7v6h2z" }),
  "AddchartOutlined"
);
const AdfScannerIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3zM8 6h8v6H8V6zm12 12H4v-3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v3z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "18", cy: "16", r: "1" }, "1")],
  "AdfScannerOutlined"
);
const AdjustIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" }),
  "AdjustOutlined"
);
const AdminPanelSettingsIcon = createSvgIcon(
  /* @__PURE__ */ jsxs("g", { fillRule: "evenodd", children: [
    /* @__PURE__ */ jsx("circle", { cx: "17", cy: "15.5", r: "1.12" }),
    /* @__PURE__ */ jsx("path", { d: "M17 17.5c-.73 0-2.19.36-2.24 1.08.5.71 1.32 1.17 2.24 1.17s1.74-.46 2.24-1.17c-.05-.72-1.51-1.08-2.24-1.08z" }),
    /* @__PURE__ */ jsx("path", { d: "M18 11.09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55C13.18 21.99 14.97 23 17 23c3.31 0 6-2.69 6-6 0-2.97-2.16-5.43-5-5.91zM11 17c0 .56.08 1.11.23 1.62-.24.11-.48.22-.73.3-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4 5.5 2.4v3.51c-2.84.48-5 2.94-5 5.91zm6 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" })
  ] }),
  "AdminPanelSettingsOutlined"
);
const AgricultureIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M4 9h5c0-1.1-.9-2-2-2H4c-.55 0-1 .45-1 1s.45 1 1 1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M22 14.06V8c0-1.1-.9-2-2-2h-6.29l-1.06-1.06 1.41-1.41-.71-.71-3.53 3.53.71.71 1.41-1.41L13 6.71V9c0 1.1-.9 2-2 2H8.96c-.22-.16-.45-.3-.69-.43l-.4.89-.46-.21.4-.9C7.26 10.13 6.64 10 6 10c-.53 0-1.04.11-1.52.26l.34.91-.47.18-.35-.93c-1.06.46-1.91 1.28-2.43 2.31l.89.4-.21.46-.9-.4C1.13 13.74 1 14.36 1 15c0 .53.11 1.04.26 1.52l.91-.34.18.47-.93.35c.46 1.06 1.28 1.91 2.31 2.43l.4-.89.46.21-.4.9c.55.22 1.17.35 1.81.35.53 0 1.04-.11 1.52-.26l-.34-.91.47-.18.35.93c1.06-.46 1.91-1.28 2.43-2.31l-.89-.4.21-.46.9.4c.1-.26.18-.54.24-.82h5.16c-.02.17-.05.34-.05.51 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-.95-.38-1.81-1-2.44zM6 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm4.87-4c-.04-.18-.08-.35-.13-.52l-.91.34-.18-.47.93-.35H11c2.21 0 4-1.79 4-4V8h5v5.05c-.16-.02-.33-.05-.5-.05-.95 0-1.81.38-2.44 1h-6.19zm8.63 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" }, "1")],
  "AgricultureOutlined"
);
const AirIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z" }),
  "AirOutlined"
);
const AirlineSeatFlatIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 13c.78 0 1.55-.3 2.14-.9 1.16-1.19 1.14-3.08-.04-4.24C6.51 7.29 5.75 7 5 7c-.78 0-1.55.3-2.14.9-1.16 1.19-1.14 3.08.04 4.24.59.57 1.35.86 2.1.86zm-.71-3.7c.19-.19.44-.3.71-.3.26 0 .51.1.7.28.4.39.4 1.01.02 1.41-.2.2-.45.31-.72.31-.26 0-.51-.1-.7-.28-.4-.4-.4-1.02-.01-1.42zM18 7H9v6h13v-2c0-2.21-1.79-4-4-4zm-7 4V9h7c1.1 0 2 .9 2 2h-9zm-9 5h6v2h8v-2h6v-2H2z" }),
  "AirlineSeatFlatOutlined"
);
const AirlineSeatFlatAngledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 6.5c.31 0 .7.15.9.56.24.5.02 1.1-.47 1.34-.14.06-.28.1-.43.1-.3 0-.7-.15-.89-.56-.17-.34-.1-.63-.05-.78.05-.14.18-.4.51-.56.14-.06.28-.1.43-.1m6.47 2.11 6.69 2.41c.52.19.93.56 1.15 1.05.22.48.25 1.03.06 1.53l-.01.02-8.59-3.11.7-1.9M10 15.19l4 1.44V17h-4v-1.81M6 4.5c-.44 0-.88.1-1.3.3-1.49.71-2.12 2.5-1.4 4 .51 1.07 1.58 1.7 2.7 1.7.44 0 .88-.1 1.3-.3 1.49-.72 2.12-2.51 1.41-4C8.19 5.13 7.12 4.5 6 4.5zm5.28 1.55L9.2 11.71l12.36 4.47.69-1.89c.77-2.09-.31-4.39-2.41-5.15l-8.56-3.09zm-9.09 4.2-.69 1.89L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86z" }),
  "AirlineSeatFlatAngledOutlined"
);
const AirlineSeatIndividualSuiteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V7H1v10h22v-6c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z" }),
  "AirlineSeatIndividualSuiteOutlined"
);
const AirlineSeatLegroomExtraIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 12V3H2v9c0 2.76 2.24 5 5 5h6v-2H7c-1.66 0-3-1.34-3-3zm18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5-3.41-6.98C15.96 9.45 15.27 9 14.51 9H11V3H5v8c0 1.66 1.34 3 3 3h7l3.41 7 3.72-1.7c.77-.36 1.1-1.3.7-2.06z" }),
  "AirlineSeatLegroomExtraOutlined"
);
const AirlineSeatLegroomNormalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 12V3H3v9c0 2.76 2.24 5 5 5h6v-2H8c-1.66 0-3-1.34-3-3zm15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v7h4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" }),
  "AirlineSeatLegroomNormalOutlined"
);
const AirlineSeatLegroomReducedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.97 19.2c.18.96-.55 1.8-1.47 1.8H14v-3l1-4H9c-1.65 0-3-1.35-3-3V3h6v6h5c1.1 0 2 .9 2 2l-2 7h1.44c.73 0 1.39.49 1.53 1.2zM5 12V3H3v9c0 2.76 2.24 5 5 5h4v-2H8c-1.66 0-3-1.34-3-3z" }),
  "AirlineSeatLegroomReducedOutlined"
);
const AirlineSeatReclineExtraIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79.63-.9 1.88-1.12 2.79-.49.9.64 1.12 1.88.49 2.79-.64.9-1.88 1.12-2.79.49zM16 19H8.93c-1.48 0-2.74-1.08-2.96-2.54L4 7H2l1.99 9.76C4.37 19.2 6.47 21 8.94 21H16v-2zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38-.32-.09-.66-.12-.99-.06h-.02c-1.23.22-2.05 1.39-1.84 2.61l1.35 5.92C7.16 16.98 8.39 18 9.83 18h6.85l3.82 3 1.5-1.5-5.77-4.5z" }),
  "AirlineSeatReclineExtraOutlined"
);
const AirlineSeatReclineNormalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.59 5.41c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0 .78 2.05 0 2.83c-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z" }),
  "AirlineSeatReclineNormalOutlined"
);
const AirlineStopsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 8.7c-2.46 1.5-5.5 4.17-6 8.3h2v2H9v-2h2c-.5-4.5-4.37-8-9-8V7c4.39 0 8.22 2.55 10 6.3 1.38-2.97 3.86-5.03 5.96-6.31L14 7V5h7v7h-2V8.7z" }),
  "AirlineStopsOutlined"
);
const AirlinesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.34 18H5.8l8.25-12h5.54l-2.25 12zM13 4 2 20h17l3-16h-9zm1.5 5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S15.88 9 14.5 9z" }),
  "AirlinesOutlined"
);
const AirplaneTicketIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.19 4H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.81-2-1.81-2zM20 18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v12zM8.87 15.66l-1.66-2.88.93-.25 1.26.99 2.39-.64-2.4-4.16 1.4-.38 4.01 3.74 2.44-.65c.51-.14 1.04.17 1.18.68.13.51-.17 1.04-.69 1.19l-8.86 2.36z" }),
  "AirplaneTicketOutlined"
);
const AirplanemodeActiveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z" }),
  "AirplanemodeActiveOutlined"
);
const AirplanemodeInactiveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.5 7.67V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V9l8.5 5v2l-4.49-1.32-7.01-7.01zm9.28 14.94 1.41-1.41-7.69-7.7-3.94-3.94-6.75-6.75-1.42 1.41 6.38 6.38L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-2.67l6.28 6.28z" }),
  "AirplanemodeInactiveOutlined"
);
const AirplayIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M6 22h12l-6-6z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }, "1")],
  "AirplayOutlined"
);
const AirportShuttleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-6-6zm-2 2h1l3 3h-4V7zM9 7h4v3H9V7zM3 7h4v3H3V7zm3 10.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm12 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zM21 14h-.78c-.55-.61-1.34-1-2.22-1s-1.67.39-2.22 1H8.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3v-2h18v2z" }),
  "AirportShuttleOutlined"
);
const AlarmIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zm4.837-6.19 4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0 1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" }),
  "AlarmOutlined"
);
const AlarmAddIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17.337 1.81 4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0 1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3z" }),
  "AlarmAddOutlined"
);
const AlarmOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.04 6.29C10.66 6.11 11.32 6 12 6c3.86 0 7 3.14 7 7 0 .68-.11 1.34-.29 1.96l1.56 1.56c.47-1.08.73-2.27.73-3.52 0-4.97-4.03-9-9-9-1.25 0-2.44.26-3.53.72l1.57 1.57zm7.297-4.48 4.607 3.845-1.28 1.535-4.61-3.843zM3.02 2.1 1.61 3.51l1.37 1.37-.92.77 1.28 1.54 1.06-.88.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.03 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.1 2.1 1.41-1.41L3.02 2.1zM12 20c-3.86 0-7-3.14-7-7 0-1.7.61-3.26 1.62-4.47l9.85 9.85C15.26 19.39 13.7 20 12 20zM7.48 3.73l.46-.38-1.28-1.54-.6.5z" }),
  "AlarmOffOutlined"
);
const AlarmOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.54 14.53 8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06zm6.797-12.72 4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0 1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" }),
  "AlarmOnOutlined"
);
const AlbumIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }),
  "AlbumOutlined"
);
const AlignHorizontalCenterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z" }),
  "AlignHorizontalCenterOutlined"
);
const AlignHorizontalLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z" }),
  "AlignHorizontalLeftOutlined"
);
const AlignHorizontalRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2h2v20h-2V2zM2 10h16V7H2v3zm6 7h10v-3H8v3z" }),
  "AlignHorizontalRightOutlined"
);
const AlignVerticalBottomIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z" }),
  "AlignVerticalBottomOutlined"
);
const AlignVerticalCenterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 11h-5V6h-3v5h-4V3H7v8H1.84v2H7v8h3v-8h4v5h3v-5h5z" }),
  "AlignVerticalCenterOutlined"
);
const AlignVerticalTopIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z" }),
  "AlignVerticalTopOutlined"
);
const AllInboxIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 10h3.13c.21.78.67 1.47 1.27 2H5v-2zm14 2h-4.4c.6-.53 1.06-1.22 1.27-2H19v2zm0-4h-5v1c0 1.07-.93 2-2 2s-2-.93-2-2V8H5V5h14v3zm-2 7h-3v1c0 .47-.19.9-.48 1.25-.37.45-.92.75-1.52.75s-1.15-.3-1.52-.75c-.29-.35-.48-.78-.48-1.25v-1H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-4zM5 17h3.13c.02.09.06.17.09.25.24.68.65 1.28 1.18 1.75H5v-2zm14 2h-4.4c.54-.47.95-1.07 1.18-1.75.03-.08.07-.16.09-.25H19v2z" }),
  "AllInboxOutlined"
);
const AllInclusiveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l7.03-6.24c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z" }),
  "AllInclusiveOutlined"
);
const AllOutIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 4v4l4-4zm12 0 4 4V4zm4 16v-4l-4 4zM4 20h4l-4-4zm15-8c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" }),
  "AllOutOutlined"
);
const AltRouteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m9.78 11.16-1.42 1.42c-.68-.69-1.34-1.58-1.79-2.94l1.94-.49c.32.89.77 1.5 1.27 2.01zM11 6 7 2 3 6h3.02c.02.81.08 1.54.19 2.17l1.94-.49C8.08 7.2 8.03 6.63 8.02 6H11zm10 0-4-4-4 4h2.99c-.1 3.68-1.28 4.75-2.54 5.88-.5.44-1.01.92-1.45 1.55-.34-.49-.73-.88-1.13-1.24L9.46 13.6c.93.85 1.54 1.54 1.54 3.4v5h2v-5c0-2.02.71-2.66 1.79-3.63 1.38-1.24 3.08-2.78 3.2-7.37H21z" }),
  "AltRouteOutlined"
);
const AlternateEmailIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" }),
  "AlternateEmailOutlined"
);
const AnalyticsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M7 12h2v5H7zm8-5h2v10h-2zm-4 7h2v3h-2zm0-4h2v2h-2z" }, "1")],
  "AnalyticsOutlined"
);
const AnchorIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17 15 1.55 1.55c-.96 1.69-3.33 3.04-5.55 3.37V11h3V9h-3V7.82C14.16 7.4 15 6.3 15 5c0-1.65-1.35-3-3-3S9 3.35 9 5c0 1.3.84 2.4 2 2.82V9H8v2h3v8.92c-2.22-.33-4.59-1.68-5.55-3.37L7 15l-4-3v3c0 3.88 4.92 7 9 7s9-3.12 9-7v-3l-4 3zM12 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" }),
  "AnchorOutlined"
);
const AndroidIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17.6 9.48 1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" }),
  "AndroidOutlined"
);
const AnimationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 2c-2.71 0-5.05 1.54-6.22 3.78-1.28.67-2.34 1.72-3 3C3.54 9.95 2 12.29 2 15c0 3.87 3.13 7 7 7 2.71 0 5.05-1.54 6.22-3.78 1.28-.67 2.34-1.72 3-3C20.46 14.05 22 11.71 22 9c0-3.87-3.13-7-7-7zM9 20c-2.76 0-5-2.24-5-5 0-1.12.37-2.16 1-3 0 3.87 3.13 7 7 7-.84.63-1.88 1-3 1zm3-3c-2.76 0-5-2.24-5-5 0-1.12.37-2.16 1-3 0 3.86 3.13 6.99 7 7-.84.63-1.88 1-3 1zm4.7-3.3c-.53.19-1.1.3-1.7.3-2.76 0-5-2.24-5-5 0-.6.11-1.17.3-1.7.53-.19 1.1-.3 1.7-.3 2.76 0 5 2.24 5 5 0 .6-.11 1.17-.3 1.7zM19 12c0-3.86-3.13-6.99-7-7 .84-.63 1.87-1 3-1 2.76 0 5 2.24 5 5 0 1.12-.37 2.16-1 3z" }),
  "AnimationOutlined"
);
const AnnouncementIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM11 5h2v6h-2zm0 8h2v2h-2z" }),
  "AnnouncementOutlined"
);
const AodIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1zm-9 6h8v1.5H8V10zm1 3h6v1.5H9V13z" }),
  "AodOutlined"
);
const ApartmentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z" }),
  "ApartmentOutlined"
);
const AppBlockingIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-2.5 4c0-1.38 1.12-2.5 2.5-2.5.42 0 .8.11 1.15.29l-3.36 3.36c-.18-.35-.29-.73-.29-1.15zm2.5 2.5c-.42 0-.8-.11-1.15-.29l3.36-3.36c.18.35.29.73.29 1.15 0 1.38-1.12 2.5-2.5 2.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zM7 3h10v1H7V3zm10 18H7v-1h10v1z" }, "1")],
  "AppBlockingOutlined"
);
const AppRegistrationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm12 0h4v4h-4zm-5 13.86V20h2.1l5.98-5.97-2.12-2.12zm3-5.83V10h-4v4h2.03zm6.85-.47-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06 2.12 2.12 1.06-1.06c.2-.2.2-.51 0-.71z" }),
  "AppRegistrationOutlined"
);
const AppSettingsAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m21.81 12.74-.82-.63v-.22l.8-.63c.16-.12.2-.34.1-.51l-.85-1.48c-.07-.13-.21-.2-.35-.2-.05 0-.1.01-.15.03l-.95.38c-.08-.05-.11-.07-.19-.11l-.15-1.01c-.03-.21-.2-.36-.4-.36h-1.71c-.2 0-.37.15-.4.34l-.14 1.01c-.03.02-.07.03-.1.05l-.09.06-.95-.38c-.05-.02-.1-.03-.15-.03-.14 0-.27.07-.35.2l-.85 1.48c-.1.17-.06.39.1.51l.8.63v.23l-.8.63c-.16.12-.2.34-.1.51l.85 1.48c.07.13.21.2.35.2.05 0 .1-.01.15-.03l.95-.37c.08.05.12.07.2.11l.15 1.01c.03.2.2.34.4.34h1.71c.2 0 .37-.15.4-.34l.15-1.01c.03-.02.07-.03.1-.05l.09-.06.95.38c.05.02.1.03.15.03.14 0 .27-.07.35-.2l.85-1.48c.1-.17.06-.39-.1-.51zM18 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zM7 3h10v1H7V3zm10 18H7v-1h10v1z" }),
  "AppSettingsAltOutlined"
);
const AppShortcutIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zM7 3h10v1H7V3zm10 18H7v-1h10v1zm3.38-11.38L21 11l.62-1.38L23 9l-1.38-.62L21 7l-.62 1.38L19 9z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m16 8-1.25 2.75L12 12l2.75 1.25L16 16l1.25-2.75L20 12l-2.75-1.25zm5 5-.62 1.38L19 15l1.38.62L21 17l.62-1.38L23 15l-1.38-.62z" }, "1")],
  "AppShortcutOutlined"
);
const ApprovalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 16v6h16v-6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2zm14 2H6v-2h12v2zM12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5zm0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3l-3 4z" }),
  "ApprovalOutlined"
);
const AppsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" }),
  "AppsOutlined"
);
const AppsOutageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6 6h4v-4h-4v4zm3-20c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 8h-1V7h1v1zm0-2h-1V2h1v4zM16 14h4v-2.07c-.33.05-.66.07-1 .07-1.07 0-2.09-.24-3-.68V14zM10 4v4h2.68c-.44-.91-.68-1.93-.68-3 0-.34.02-.67.07-1H10z" }),
  "AppsOutageOutlined"
);
const ArchitectureIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.36 18.78 6.61 21l1.62-1.54 2.77-7.6c-.68-.17-1.28-.51-1.77-.98l-2.87 7.9zm8.41-7.9c-.49.47-1.1.81-1.77.98l2.77 7.6L17.39 21l.26-2.22-2.88-7.9zM15 8c0-1.3-.84-2.4-2-2.82V3h-2v2.18C9.84 5.6 9 6.7 9 8c0 1.66 1.34 3 3 3s3-1.34 3-3zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }),
  "ArchitectureOutlined"
);
const ArchiveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z" }),
  "ArchiveOutlined"
);
const ArrowBackIosIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" }),
  "ArrowBackIosOutlined"
);
const ArrowBackIosNewIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z" }),
  "ArrowBackIosNewOutlined"
);
const ArrowCircleDownIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 10V8h-2v4H8l4 4 4-4h-3z" }),
  "ArrowCircleDownOutlined"
);
const ArrowCircleLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm18 0c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8zM8 12l4-4 1.41 1.41L11.83 11H16v2h-4.17l1.59 1.59L12 16l-4-4z" }),
  "ArrowCircleLeftOutlined"
);
const ArrowCircleRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zM4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8zm12 0-4 4-1.41-1.41L12.17 13H8v-2h4.17l-1.59-1.59L12 8l4 4z" }),
  "ArrowCircleRightOutlined"
);
const ArrowCircleUpIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm-1-10v4h2v-4h3l-4-4-4 4h3z" }),
  "ArrowCircleUpOutlined"
);
const ArrowDropDownCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13-4-4h8z" }),
  "ArrowDropDownCircleOutlined"
);
const ArrowDropUpIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m7 14 5-5 5 5H7z" }),
  "ArrowDropUpOutlined"
);
const ArrowForwardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" }),
  "ArrowForwardOutlined"
);
const ArrowForwardIosIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" }),
  "ArrowForwardIosOutlined"
);
const ArrowLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14 7-5 5 5 5V7z" }),
  "ArrowLeftOutlined"
);
const ArrowUpwardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" }),
  "ArrowUpwardOutlined"
);
const ArtTrackIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z" }),
  "ArtTrackOutlined"
);
const ArticleIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" }, "1")],
  "ArticleOutlined"
);
const AspectRatioIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z" }),
  "AspectRatioOutlined"
);
const AssessmentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" }),
  "AssessmentOutlined"
);
const AssignmentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" }),
  "AssignmentOutlined"
);
const AssignmentIndIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.22 0 .41.1.55.25.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5.14-.15.33-.25.55-.25zM19 19H5V5h14v14zM12 6c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6 6.47V18h12v-1.53c0-2.5-3.97-3.58-6-3.58s-6 1.07-6 3.58zM8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31z" }),
  "AssignmentIndOutlined"
);
const AssignmentLateIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 15h2v2h-2zm0-8h2v6h-2zm8-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" }),
  "AssignmentLateOutlined"
);
const AssignmentReturnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 14h4v-4h-4V7l-5 5 5 5zm7-11h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" }),
  "AssignmentReturnOutlined"
);
const AssignmentReturnedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 12h-3V8h-4v4H7l5 5zm2-9h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" }),
  "AssignmentReturnedOutlined"
);
const AssignmentTurnedInIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18 9-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" }),
  "AssignmentTurnedInOutlined"
);
const AssistantIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-7-1 1.88-4.12L18 11l-4.12-1.88L12 5l-1.88 4.12L6 11l4.12 1.88z" }),
  "AssistantOutlined"
);
const AssistantDirectionIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-4.99 0-9-4.01-9-9s4.01-9 9-9 9 4.01 9 9-4.01 9-9 9z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19.73 11.42 12.54 4.2c-.36-.27-.8-.27-1.15 0L4.2 11.42c-.27.36-.27.8 0 1.16l7.19 7.22c.36.27.8.27 1.15 0l7.19-7.22c.36-.36.36-.89 0-1.16zM13.5 14.5l-1.41-1.41L13.17 12H10v3H8v-4c0-.6.4-1 1-1h4.17l-1.09-1.09L13.5 7.5 17 11l-3.5 3.5z" }, "1")],
  "AssistantDirectionOutlined"
);
const AssistantPhotoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12.36 6 .08.39.32 1.61H18v6h-3.36l-.08-.39-.32-1.61H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6L14 4z" }),
  "AssistantPhotoOutlined"
);
const AssuredWorkloadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 10h2v7H5zm6 0h2v7h-2zm11-4L12 1 2 6v2h20V6zM6.47 6 12 3.24 17.53 6H6.47zM2 19v2h12.4c-.21-.64-.32-1.31-.36-2H2zm17-6.74V10h-2v3.26zM20 14l-4 2v2.55c0 2.52 1.71 4.88 4 5.45 2.29-.57 4-2.93 4-5.45V16l-4-2zm-.72 7-2.03-2.03 1.06-1.06.97.97 2.41-2.38 1.06 1.06L19.28 21z" }),
  "AssuredWorkloadOutlined"
);
const AtmIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 9v1.5h2.25V15h1.5v-4.5H14V9H8zM6 9H3c-.55 0-1 .45-1 1v5h1.5v-1.5h2V15H7v-5c0-.55-.45-1-1-1zm-.5 3h-2v-1.5h2V12zM21 9h-4.5c-.55 0-1 .45-1 1v5H17v-4.5h1V14h1.5v-3.51h1V15H22v-5c0-.55-.45-1-1-1z" }),
  "AtmOutlined"
);
const AttachEmailIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m3 6 8 5 8-5v3h2V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h10v-2H3V6zm16-2-8 5-8-5h16z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5c0-1.38-1.12-2.5-2.5-2.5S15 12.12 15 13.5V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2z" }, "1")],
  "AttachEmailOutlined"
);
const AttachFileIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" }),
  "AttachFileOutlined"
);
const AttachMoneyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" }),
  "AttachMoneyOutlined"
);
const AttachmentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.5 16H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h12.5c1.38 0 2.5 1.12 2.5 2.5S20.88 13 19.5 13H9c-.55 0-1-.45-1-1s.45-1 1-1h9.5V9.5H9c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h10.5c2.21 0 4-1.79 4-4s-1.79-4-4-4H7c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5h11.5V16z" }),
  "AttachmentOutlined"
);
const AttractionsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.15 14.42c.23-.77.35-1.58.35-2.42s-.12-1.65-.35-2.42c.78-.6 1.02-1.7.51-2.58s-1.58-1.23-2.49-.85c-1.11-1.17-2.56-2.03-4.18-2.42C13.85 2.75 13.01 2 12 2s-1.85.75-1.98 1.73c-1.63.39-3.07 1.25-4.19 2.42-.91-.38-1.98-.03-2.49.85s-.27 1.98.51 2.58c-.23.77-.35 1.58-.35 2.42s.12 1.65.35 2.42c-.78.6-1.02 1.7-.51 2.58s1.58 1.23 2.49.85c.4.42.83.79 1.3 1.12L5.78 22h1.88l.98-2.19c.44.19.9.34 1.38.46.13.98.97 1.73 1.98 1.73s1.85-.75 1.98-1.73c.46-.11.91-.26 1.34-.44L16.3 22h1.88l-1.34-3c.48-.34.93-.72 1.34-1.15.91.38 1.99.03 2.49-.85.5-.88.26-1.98-.52-2.58zm-6.59 4.33c-.37-.46-.93-.75-1.56-.75s-1.2.29-1.57.75c-.4-.09-.79-.21-1.16-.37l1.43-3.19c.4.16.84.25 1.3.25.44 0 .87-.08 1.26-.23l1.42 3.18c-.36.15-.73.27-1.12.36zm-3.08-6.73c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm8.23 1.99c-.61.07-1.18.41-1.52.99-.32.56-.34 1.2-.12 1.75-.28.29-.58.55-.9.79l-1.5-3.35c.49-.59.78-1.34.78-2.16 0-1.89-1.55-3.41-3.46-3.41s-3.46 1.53-3.46 3.41c0 .8.28 1.54.75 2.13l-1.52 3.39c-.31-.23-.6-.48-.87-.76.26-.56.24-1.22-.09-1.79-.34-.59-.93-.94-1.56-.99-.22-.68-.33-1.4-.33-2.15 0-.64.09-1.26.25-1.85.66-.03 1.3-.38 1.65-1 .37-.63.35-1.38.01-1.98.92-.98 2.11-1.69 3.45-2.03.34.59.99 1 1.73 1s1.39-.4 1.73-1c1.34.34 2.53 1.07 3.44 2.05-.32.59-.33 1.33.03 1.95.35.6.96.95 1.6 1 .16.59.25 1.21.25 1.86 0 .75-.12 1.47-.34 2.15z" }),
  "AttractionsOutlined"
);
const AttributionIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 8.5c-.91 0-2.75.46-2.75 1.38v4.62h1.5V19h2.5v-4.5h1.5V9.88c0-.91-1.84-1.38-2.75-1.38zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "6.5", r: "1.5" }, "1")],
  "AttributionOutlined"
);
const AudioFileIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88c-.36-.24-.79-.38-1.25-.38-1.24 0-2.25 1.01-2.25 2.25S9.51 19 10.75 19 13 17.99 13 16.75V13h3v-2z" }),
  "AudioFileOutlined"
);
const AudiotrackIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }),
  "AudiotrackOutlined"
);
const AutoAwesomeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm0 6-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25zm-7.5-5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zm-1.51 3.49L9 15.17l-.99-2.18L5.83 12l2.18-.99L9 8.83l.99 2.18 2.18.99-2.18.99z" }),
  "AutoAwesomeOutlined"
);
const AutoAwesomeMosaicIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5v14c0 1.1.89 2 2 2h6V3H5c-1.11 0-2 .9-2 2zm6 14H5V5h4v14zM19 3h-6v8h8V5c0-1.1-.9-2-2-2zm0 6h-4V5h4v4zm-6 12h6c1.1 0 2-.9 2-2v-6h-8v8zm2-6h4v4h-4v-4z" }),
  "AutoAwesomeMosaicOutlined"
);
const AutoAwesomeMotionIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 2H4c-1.1 0-2 .9-2 2v10h2V4h10V2zm4 4H8c-1.1 0-2 .9-2 2v10h2V8h10V6zm2 4h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10h-8v-8h8v8z" }),
  "AutoAwesomeMotionOutlined"
);
const AutoDeleteIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68c1.12 2.36 3.53 4 6.32 4 3.87 0 7-3.13 7-7s-3.13-7-7-7zm-7 7c0 .34.03.67.08 1H4V7h8v3.26c-1.81 1.27-3 3.36-3 5.74zm7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M16.5 12H15v5l3.6 2.1.8-1.2-2.9-1.7z" }, "1")],
  "AutoDeleteOutlined"
);
const AutoFixHighIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zM8.5 7l.94-2.06L11.5 4l-2.06-.94L8.5 1l-.94 2.06L5.5 4l2.06.94zM20 12.5l-.94 2.06-2.06.94 2.06.94.94 2.06.94-2.06L23 15.5l-2.06-.94zm-2.29-3.38-2.83-2.83c-.2-.19-.45-.29-.71-.29-.26 0-.51.1-.71.29L2.29 17.46c-.39.39-.39 1.02 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42zm-3.54-.7 1.41 1.41L14.41 11 13 9.59l1.17-1.17zM5.83 19.59l-1.41-1.41L11.59 11 13 12.41l-7.17 7.18z" }),
  "AutoFixHighOutlined"
);
const AutoFixNormalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-2.29 2.12-2.83-2.83c-.2-.19-.45-.29-.71-.29-.26 0-.51.1-.71.29L2.29 17.46c-.39.39-.39 1.02 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42zm-3.54-.7 1.41 1.41L14.41 11 13 9.59l1.17-1.17zM5.83 19.59l-1.41-1.41L11.59 11 13 12.41l-7.17 7.18z" }),
  "AutoFixNormalOutlined"
);
const AutoFixOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-5.83 1.42 1.41 1.41-1.46 1.46 1.41 1.41 2.17-2.17c.39-.39.39-1.02 0-1.41l-2.83-2.83c-.19-.19-.44-.29-.7-.29-.26 0-.51.1-.71.29l-2.17 2.17 1.41 1.41 1.47-1.45zM1.39 4.22l7.07 7.07-6.17 6.17c-.39.39-.39 1.02 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l6.17-6.17 7.07 7.07 1.41-1.41L2.81 2.81 1.39 4.22zm9.9 9.9-5.46 5.46-1.41-1.41 5.46-5.46 1.41 1.41z" }),
  "AutoFixOffOutlined"
);
const AutoGraphIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.06 9.94 12 9l2.06-.94L15 6l.94 2.06L18 9l-2.06.94L15 12l-.94-2.06zM4 14l.94-2.06L7 11l-2.06-.94L4 8l-.94 2.06L1 11l2.06.94L4 14zm4.5-5 1.09-2.41L12 5.5 9.59 4.41 8.5 2 7.41 4.41 5 5.5l2.41 1.09L8.5 9zm-4 11.5 6-6.01 4 4L23 8.93l-1.41-1.41-7.09 7.97-4-4L3 19l1.5 1.5z" }),
  "AutoGraphOutlined"
);
const AutoStoriesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22.47 5.2c-.47-.24-.96-.44-1.47-.61v12.03c-1.14-.41-2.31-.62-3.5-.62-1.9 0-3.78.54-5.5 1.58V5.48C10.38 4.55 8.51 4 6.5 4c-1.79 0-3.48.44-4.97 1.2-.33.16-.53.51-.53.88v12.08c0 .58.47.99 1 .99.16 0 .32-.04.48-.12C3.69 18.4 5.05 18 6.5 18c2.07 0 3.98.82 5.5 2 1.52-1.18 3.43-2 5.5-2 1.45 0 2.81.4 4.02 1.04.16.08.32.12.48.12.52 0 1-.41 1-.99V6.08c0-.37-.2-.72-.53-.88zM10 16.62C8.86 16.21 7.69 16 6.5 16s-2.36.21-3.5.62V6.71C4.11 6.24 5.28 6 6.5 6c1.2 0 2.39.25 3.5.72v9.9zM19 .5l-5 5V15l5-4.5V.5z" }),
  "AutoStoriesOutlined"
);
const AutofpsSelectIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12.03 6.3h-.06l-1.02 2.89h2.1zM3 17h2v5H3z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M12 15c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm-.63-10h1.25l2.63 7h-1.21l-.63-1.79h-2.83L9.96 12H8.74l2.63-7zM7 17h2v5H7zm4 0h2v5h-2zm4 0h6v5h-6z" }, "1")],
  "AutofpsSelectOutlined"
);
const AutorenewIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" }),
  "AutorenewOutlined"
);
const AvTimerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z" }),
  "AvTimerOutlined"
);
const BabyChangingStationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 8v2h-3L8.31 8.82 7 12.75V22H3V12l1.58-4.63c.38-1.12 1.64-1.68 2.72-1.19l4.15 1.83L14 8zM8 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm1 18h12v-2H9v2zm10.5-3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM13 12c0-.55-.45-1-1-1H9v2h2v1c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3h-2v2h-2v-1z" }),
  "BabyChangingStationOutlined"
);
const BackpackIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 4.14V2h-3v2h-4V2H7v2.14c-1.72.45-3 2-3 3.86v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.86-1.28-3.41-3-3.86zM18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v12zm-1.5-8v4h-2v-2h-7v-2h9z" }),
  "BackpackOutlined"
);
const BackspaceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z" }),
  "BackspaceOutlined"
);
const BackupTableIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 6v14H6v2h14c1.1 0 2-.9 2-2V6h-2z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 16H4v-5h5v5zm7 0h-5v-5h5v5zm0-7H4V4h12v5z" }, "1")],
  "BackupTableOutlined"
);
const BadgeIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M14 12h4v1.5h-4zm0 3h4v1.5h-4z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0V4h2v5h-2V7zm9 13H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5v11z" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "9", cy: "13.5", r: "1.5" }, "2"), /* @__PURE__ */ jsx("path", { d: "M11.08 16.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39z" }, "3")],
  "BadgeOutlined"
);
const BakeryDiningIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.5 10.94c.13-.32.1-.23.15-.39.3-1.21-.34-2.47-1.5-2.93l-2.01-.8c-.46-.18-.95-.21-1.41-.12-.11-.33-.29-.63-.52-.89-.48-.52-1.15-.81-1.85-.81h-2.71c-.71 0-1.38.29-1.85.81-.24.26-.42.56-.53.88-.46-.09-.95-.06-1.41.12l-2.01.8c-1.16.46-1.8 1.72-1.5 2.93l.15.38C1.1 15.55 1 15.55 1 16.38c0 .91.46 1.74 1.24 2.22 1.42.88 2.49.14 4-.61h11.53c1.52.76 1.86 1.01 2.63 1.01 1 0 2.61-.77 2.61-2.61-.01-.85-.13-.88-2.51-5.45zm-.38 5.99-1.68-.84 1.08-2.7 1.41 2.71c.28.53-.29 1.09-.81.83zm-5.03-.94.62-6.9c.03-.33.37-.54.68-.42l2.01.8c.22.09.34.31.31.54l-2.4 5.98h-1.22zm-7.41 0-2.4-5.98c-.03-.23.09-.45.31-.54l2.01-.8c.31-.12.65.08.68.42l.62 6.9H7.68zm-4.61.11 1.41-2.72 1.08 2.71-1.68.84c-.52.26-1.09-.3-.81-.83zm7.08-8.56c-.03-.31.23-.54.5-.54h2.71c.27 0 .53.23.5.54l-.77 8.45h-2.17l-.77-8.45z" }),
  "BakeryDiningOutlined"
);
const BalanceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 7.83c.85-.3 1.53-.98 1.83-1.83H18l-3 7c0 1.66 1.57 3 3.5 3s3.5-1.34 3.5-3l-3-7h2V4h-6.17c-.41-1.17-1.52-2-2.83-2s-2.42.83-2.83 2H3v2h2l-3 7c0 1.66 1.57 3 3.5 3S9 14.66 9 13L6 6h3.17c.3.85.98 1.53 1.83 1.83V19H2v2h20v-2h-9V7.83zM20.37 13h-3.74l1.87-4.36L20.37 13zm-13 0H3.63L5.5 8.64 7.37 13zM12 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }),
  "BalanceOutlined"
);
const BalconyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 10v2H8v-2h2zm6 2v-2h-2v2h2zm5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4h1zM7 16H5v4h2v-4zm4 0H9v4h2v-4zm0-11.92C8.16 4.56 6 7.03 6 10v4h5V4.08zM13 14h5v-4c0-2.97-2.16-5.44-5-5.92V14zm2 2h-2v4h2v-4zm4 0h-2v4h2v-4z" }),
  "BalconyOutlined"
);
const BallotIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 7.5h5v2h-5zm0 7h5v2h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM11 6H6v5h5V6zm-1 4H7V7h3v3zm1 3H6v5h5v-5zm-1 4H7v-3h3v3z" }),
  "BallotOutlined"
);
const BarChartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" }),
  "BarChartOutlined"
);
const BatchPredictionIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 8H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-4 12.5h-2V19h2v1.5zm0-2.5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 2-2.5 3.5-2.5 5zm5-11.5H6C6 5.67 6.67 5 7.5 5h9c.83 0 1.5.67 1.5 1.5zm-1-3H7C7 2.67 7.67 2 8.5 2h7c.83 0 1.5.67 1.5 1.5z" }),
  "BatchPredictionOutlined"
);
const BathroomIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 14c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm4 1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-3-7.5c-1.76 0-3.22 1.31-3.46 3h6.93c-.25-1.69-1.71-3-3.47-3M12 6c2.76 0 5 2.24 5 5v1H7v-1c0-2.76 2.24-5 5-5zM9 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm5-14H4v16h16V4m0-2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16z" }),
  "BathroomOutlined"
);
const BathtubIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "7", cy: "7", r: "2" }, "0"), /* @__PURE__ */ jsx("path", { d: "M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25c.15-.15.36-.24.58-.24.46 0 .83.37.83.83V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.31-.15-.65-.23-1-.23C6 10.01 5 11.01 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2zm0 6H4v-4h16v4z" }, "1")],
  "BathtubOutlined"
);
const Battery20Icon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z"
      }
    )
  ] }),
  "Battery20Outlined"
);
const Battery30Icon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z" })
  ] }),
  "Battery30Outlined"
);
const Battery50Icon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V13h10V5.33z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M7 13v7.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13H7z" })
  ] }),
  "Battery50Outlined"
);
const Battery60Icon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z" })
  ] }),
  "Battery60Outlined"
);
const Battery80Icon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h10V5.33z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M7 9v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9H7z" })
  ] }),
  "Battery80Outlined"
);
const Battery90Icon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h10V5.33z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M7 8v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8H7z" })
  ] }),
  "Battery90Outlined"
);
const BatteryAlertIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z" }),
  "BatteryAlertOutlined"
);
const BatteryCharging20Icon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z"
      }
    )
  ] }),
  "BatteryCharging20Outlined"
);
const BatteryCharging30Icon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v9.17h2L13 7v5.5h2l-1.07 2H17V5.33C17 4.6 16.4 4 15.67 4z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M11 20v-5.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07L11 20z" })
  ] }),
  "BatteryCharging30Outlined"
);
const BatteryCharging50Icon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4z"
      }
    )
  ] }),
  "BatteryCharging50Outlined"
);
const BatteryCharging60Icon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h3.87L13 7v4h4V5.33C17 4.6 16.4 4 15.67 4z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11h-4v1.5z" })
  ] }),
  "BatteryCharging60Outlined"
);
const BatteryCharging80Icon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h4.93L13 7v2h4V5.33C17 4.6 16.4 4 15.67 4z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M13 12.5h2L11 20v-5.5H9L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4v3.5z" })
  ] }),
  "BatteryCharging80Outlined"
);
const BatteryCharging90Icon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z" })
  ] }),
  "BatteryCharging90Outlined"
);
const BatteryChargingFullIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z" }),
  "BatteryChargingFullOutlined"
);
const BatteryFullIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" }),
  "BatteryFullOutlined"
);
const BatterySaverIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 4h-2V2h-4v2H8c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 10h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z" }),
  "BatterySaverOutlined"
);
const BatteryStdIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" }),
  "BatteryStdOutlined"
);
const BatteryUnknownIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm1.3-5.31s-.38.42-.67.71c-.48.48-.83 1.15-.83 1.6h-1.6c0-.83.46-1.52.93-2l.93-.94c.27-.27.44-.65.44-1.06 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .66-.27 1.26-.7 1.69z" }),
  "BatteryUnknownOutlined"
);
const BeachAccessIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m21 19.57-1.427 1.428-6.442-6.442 1.43-1.428zM13.12 3c-2.58 0-5.16.98-7.14 2.95l-.01.01c-3.95 3.95-3.95 10.36 0 14.31l14.3-14.31C18.3 3.99 15.71 3 13.12 3zM6.14 17.27C5.4 16.03 5 14.61 5 13.12c0-.93.16-1.82.46-2.67.19 1.91.89 3.79 2.07 5.44l-1.39 1.38zm2.84-2.84C7.63 12.38 7.12 9.93 7.6 7.6c.58-.12 1.16-.18 1.75-.18 1.8 0 3.55.55 5.08 1.56l-5.45 5.45zm1.47-8.97c.85-.3 1.74-.46 2.67-.46 1.49 0 2.91.4 4.15 1.14l-1.39 1.39c-1.65-1.18-3.52-1.88-5.43-2.07z" }),
  "BeachAccessOutlined"
);
const BedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5V8zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2H4z" }),
  "BedOutlined"
);
const BedroomBabyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.94 14.04c-.34.34-.71.64-1.1.92L16 13.5V11h1v-1h-5.62L9.65 7H6l1 .76L5.5 9.5l.95 1L8 9.51v3.99l-.84 1.46c-.39-.27-.76-.58-1.1-.92L5 15.1c1.87 1.87 4.36 2.9 7 2.9s5.13-1.03 7-2.9l-1.06-1.06zm-9.49 1.67.03-.06.81-1.41c1.74.65 3.66.65 5.4 0l.81 1.41.03.06c-1.1.51-2.3.79-3.55.79s-2.43-.27-3.53-.79zM20 4v16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" }),
  "BedroomBabyOutlined"
);
const BedroomChildIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4v16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3.5 8.67V9c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v1.67c-.88.35-1.5 1.2-1.5 2.2V17h1.5v-1.5h9V17H18v-4.13c0-1-.62-1.85-1.5-2.2zM15 8.5v2H9v-2h6zm-7.5 4.37c0-.48.39-.87.87-.87h7.27c.48 0 .87.39.87.87V14h-9v-1.13H7.5z" }),
  "BedroomChildOutlined"
);
const BedroomParentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.35 11.45V9c0-1.1-.9-2-2-2H13c-.37 0-.72.12-1 .32-.28-.2-.63-.32-1-.32H7.65c-1.1 0-2 .9-2 2v2.45c-.4.46-.65 1.06-.65 1.72V17h1.5v-1.5h11V17H19v-3.83c0-.66-.25-1.26-.65-1.72zm-1.6-.95h-4v-2h4v2zm-9.5-2h4v2h-4v-2zM17.5 14h-11v-1c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v1zM20 4v16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" }),
  "BedroomParentOutlined"
);
const BedtimeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.27 4.49c-1.63 7.54 3.75 12.41 7.66 13.8C15.54 19.38 13.81 20 12 20c-4.41 0-8-3.59-8-8 0-3.45 2.2-6.4 5.27-7.51m2.72-2.48C6.4 2.01 2 6.54 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.97h-.35z" }),
  "BedtimeOutlined"
);
const BedtimeOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.27 4.49c-.13.59-.2 1.15-.24 1.71l2.05 2.05c-.27-2.05.1-4.22 1.26-6.23-.12 0-.23-.01-.35-.01-2.05 0-3.93.61-5.5 1.65l1.46 1.46c.42-.24.86-.46 1.32-.63zm-7.88-.27 2.27 2.27C2.61 8.07 2 9.97 2 12c0 5.52 4.48 10 10 10 2.04 0 3.92-.63 5.5-1.67l2.28 2.28 1.41-1.41L2.81 2.81 1.39 4.22zm3.74 3.74 10.92 10.92C14.84 19.6 13.45 20 12 20c-4.41 0-8-3.59-8-8 0-1.48.42-2.85 1.13-4.04z" }),
  "BedtimeOffOutlined"
);
const BeenhereIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-7 19.6-7-4.66V3h14v12.93l-7 4.67zm-2.01-7.42-2.58-2.59L6 12l4 4 8-8-1.42-1.42z" }),
  "BeenhereOutlined"
);
const BentoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 6h-6V7h6v4zM4 7h8v10H4V7zm10 10v-4h6v4h-6zm-4.5-5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" }),
  "BentoOutlined"
);
const BikeScooterIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M10 14h.74L8.82 5.56C8.61 4.65 7.8 4 6.87 4H3v2h3.87l1.42 6.25h-.01c-2.16.65-3.81 2.48-4.19 4.75H0v2h6v-1c0-2.21 1.79-4 4-4zm9-6h-.82l-1.35-3.69C16.55 3.52 15.8 3 14.96 3H11v2h3.96l1.1 3H10.4l.46 2H15c-.43.58-.75 1.25-.9 2h-2.79l.46 2h2.33c.44 2.23 2.31 3.88 4.65 3.99 2.8.13 5.25-2.19 5.25-5C24 10.2 21.8 8 19 8zm0 8c-1.68 0-3-1.32-3-3 0-.93.41-1.73 1.05-2.28l.96 2.64 1.88-.68-.97-2.67c.03 0 .06-.01.09-.01 1.68 0 3 1.32 3 3s-1.33 3-3.01 3z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M10 15c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }, "1")],
  "BikeScooterOutlined"
);
const BiotechIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.47-2.57.41.59 1.06 1 1.83 1.06.7.06 1.36-.19 1.85-.62l.59 1.61.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.52-.94.34-.34-.94-1.88.68.34.94-.94.35.56 1.55c-1.17-.04-2.19.75-2.48 1.86C6.27 8.14 5 9.92 5 12c0 2.76 2.24 5 5 5v2H7zm5.86-14.48 1.71 4.7-.94.34-1.71-4.7.94-.34zM10.5 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" }),
  "BiotechOutlined"
);
const BlenderIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M16.13 15.13 18 3h-4V2h-4v1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87zM5 9V5h1.31l.62 4H5zm10.67-4-1.38 9H9.72L8.33 5h7.34zM16 20H8v-1c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3v1z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "18", r: "1" }, "1")],
  "BlenderOutlined"
);
const BlockIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" }),
  "BlockOutlined"
);
const BloodtypeIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M9 16h6v2H9zm4-7h-2v2H9v2h2v2h2v-2h2v-2h-2z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z" }, "1")],
  "BloodtypeOutlined"
);
const BluetoothIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.71 7.71 12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z" }),
  "BluetoothOutlined"
);
const BluetoothAudioIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14.24 12.01 2.32 2.32c.28-.72.44-1.51.44-2.33s-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z" }),
  "BluetoothAudioOutlined"
);
const BluetoothConnectedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m7 12-2-2-2 2 2 2 2-2zm10.71-4.29L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88zM19 10l-2 2 2 2 2-2-2-2z" }),
  "BluetoothConnectedOutlined"
);
const BluetoothDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m13 5.83 1.88 1.88-1.6 1.6 1.41 1.41 3.02-3.02L12 2h-1v5.03l2 2v-3.2zM5.41 4 4 5.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l4.29-4.29 2.3 2.29L20 18.59 5.41 4zM13 18.17v-3.76l1.88 1.88L13 18.17z" }),
  "BluetoothDisabledOutlined"
);
const BluetoothDriveIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "6.5", cy: "14.5", r: "1.5" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "14.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("path", { d: "M18 17H4v-5h11v-2H4.81l1.04-3H15V5H5.5c-.66 0-1.21.42-1.42 1.01L2 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8h-2v5z" }, "2"), /* @__PURE__ */ jsx("path", { d: "M22 3.85 19.15 1h-.5v3.79l-2.3-2.29-.7.7L18.44 6l-2.79 2.79.7.71 2.3-2.3V11h.5L22 8.14 19.85 6 22 3.85zm-2.35-.94.94.94-.94.94V2.91zm.94 5.23-.94.94V7.2l.94.94z" }, "3")],
  "BluetoothDriveOutlined"
);
const BluetoothSearchingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14.24 12.01 2.32 2.32c.28-.72.44-1.51.44-2.33s-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z" }),
  "BluetoothSearchingOutlined"
);
const BlurCircularIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-3-3c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3-6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm3 6c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-4c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm2-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" }),
  "BlurCircularOutlined"
);
const BlurLinearIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" }),
  "BlurLinearOutlined"
);
const BlurOffIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "14", cy: "6", r: "1" }, "0"), /* @__PURE__ */ jsx("path", { d: "m13.8 11.48.2.02c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5l.02.2c.09.67.61 1.19 1.28 1.28zM14 3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-4 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "18", cy: "10", r: "1" }, "2"), /* @__PURE__ */ jsx("circle", { cx: "18", cy: "6", r: "1" }, "3"), /* @__PURE__ */ jsx("path", { d: "M21 10.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z" }, "4"), /* @__PURE__ */ jsx("circle", { cx: "10", cy: "6", r: "1" }, "5"), /* @__PURE__ */ jsx("circle", { cx: "18", cy: "14", r: "1" }, "6"), /* @__PURE__ */ jsx("circle", { cx: "6", cy: "18", r: "1" }, "7"), /* @__PURE__ */ jsx("path", { d: "M14 20.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7-7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-18 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z" }, "8"), /* @__PURE__ */ jsx("circle", { cx: "10", cy: "18", r: "1" }, "9"), /* @__PURE__ */ jsx("path", { d: "M3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 11c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z" }, "10"), /* @__PURE__ */ jsx("circle", { cx: "6", cy: "14", r: "1" }, "11"), /* @__PURE__ */ jsx("path", { d: "M2.5 5.27 6 8.77l.28.28L6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47 0 .83.67 1.5 1.5 1.5.74 0 1.36-.54 1.47-1.25l2.81 2.81c-.09-.03-.18-.06-.28-.06-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l3.78 3.78h.01l1.41-1.41L3.91 3.86 2.5 5.27z" }, "12")],
  "BlurOffOutlined"
);
const BlurOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" }),
  "BlurOnOutlined"
);
const BoltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21z" }),
  "BoltOutlined"
);
const BookIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z" }),
  "BookOutlined"
);
const BookOnlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 4H7V3h10v1zm0 17H7v-1h10v1zm0-20H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 6h10v12H7V6zm9 5V9.14C16 8.51 15.55 8 15 8H9c-.55 0-1 .51-1 1.14v1.96c.55 0 1 .45 1 1s-.45 1-1 1v1.76c0 .63.45 1.14 1 1.14h6c.55 0 1-.51 1-1.14V13c-.55 0-1-.45-1-1s.45-1 1-1zm-3.5 3.5h-1v-1h1v1zm0-2h-1v-1h1v1zm0-2h-1v-1h1v1z" }),
  "BookOnlineOutlined"
);
const BookmarkIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" }),
  "BookmarkOutlined"
);
const BookmarkAddIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 11v6.97l-5-2.14-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V11h-2zm4-4h-2v2h-2V7h-2V5h2V3h2v2h2v2z" }),
  "BookmarkAddOutlined"
);
const BookmarkAddedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 11v6.97l-5-2.14-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V11h-2zm.83-2L15 6.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L17.83 9z" }),
  "BookmarkAddedOutlined"
);
const BookmarkBorderIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z" }),
  "BookmarkBorderOutlined"
);
const BookmarkRemoveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 11v6.97l-5-2.14-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V11h-2zm4-4h-6V5h6v2z" }),
  "BookmarkRemoveOutlined"
);
const BookmarksIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z" }),
  "BookmarksOutlined"
);
const BorderAllIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z" }),
  "BorderAllOutlined"
);
const BorderBottomIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 11H7v2h2v-2zm4 4h-2v2h2v-2zM9 3H7v2h2V3zm4 8h-2v2h2v-2zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 4h-2v2h2v-2zm-4-8h-2v2h2V3zm4 0h-2v2h2V3zm2 10h2v-2h-2v2zm0 4h2v-2h-2v2zM5 7H3v2h2V7zm14-4v2h2V3h-2zm0 6h2V7h-2v2zM5 11H3v2h2v-2zM3 21h18v-2H3v2zm2-6H3v2h2v-2z" }),
  "BorderBottomOutlined"
);
const BorderClearIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z" }),
  "BorderClearOutlined"
);
const BorderColorIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m16.81 8.94-3.75-3.75L4 14.25V18h3.75l9.06-9.06zM6 16v-.92l7.06-7.06.92.92L6.92 16H6zm13.71-9.96c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM2 20h20v4H2z" }),
  "BorderColorOutlined"
);
const BorderHorizontalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 21h2v-2H3v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zm4 4h2v-2H7v2zM5 3H3v2h2V3zm4 0H7v2h2V3zm8 0h-2v2h2V3zm-4 4h-2v2h2V7zm0-4h-2v2h2V3zm6 14h2v-2h-2v2zm-8 4h2v-2h-2v2zm-8-8h18v-2H3v2zM19 3v2h2V3h-2zm0 6h2V7h-2v2zm-8 8h2v-2h-2v2zm4 4h2v-2h-2v2zm4 0h2v-2h-2v2z" }),
  "BorderHorizontalOutlined"
);
const BorderInnerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 21h2v-2H3v2zm4 0h2v-2H7v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zM9 3H7v2h2V3zM5 3H3v2h2V3zm12 0h-2v2h2V3zm2 6h2V7h-2v2zm0-6v2h2V3h-2zm-4 18h2v-2h-2v2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3zm6 18h2v-2h-2v2zm0-4h2v-2h-2v2z" }),
  "BorderInnerOutlined"
);
const BorderLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 21h2v-2h-2v2zm0-4h2v-2h-2v2zm0-12h2V3h-2v2zm0 4h2V7h-2v2zm0 4h2v-2h-2v2zm-4 8h2v-2H7v2zM7 5h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2V3H3v18zM19 9h2V7h-2v2zm-4 12h2v-2h-2v2zm4-4h2v-2h-2v2zm0-14v2h2V3h-2zm0 10h2v-2h-2v2zm0 8h2v-2h-2v2zm-4-8h2v-2h-2v2zm0-8h2V3h-2v2z" }),
  "BorderLeftOutlined"
);
const BorderOuterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z" }),
  "BorderOuterOutlined"
);
const BorderRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z" }),
  "BorderRightOutlined"
);
const BorderStyleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z" }),
  "BorderStyleOutlined"
);
const BorderTopIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 21h2v-2H7v2zm0-8h2v-2H7v2zm4 0h2v-2h-2v2zm0 8h2v-2h-2v2zm-8-4h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2zm0-4h2V7H3v2zm8 8h2v-2h-2v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zM3 3v2h18V3H3zm16 14h2v-2h-2v2zm-4 4h2v-2h-2v2zM11 9h2V7h-2v2zm8 12h2v-2h-2v2zm-4-8h2v-2h-2v2z" }),
  "BorderTopOutlined"
);
const BorderVerticalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z" }),
  "BorderVerticalOutlined"
);
const BoyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 7.5c.97 0 1.75-.78 1.75-1.75S12.97 4 12 4s-1.75.78-1.75 1.75S11.03 7.5 12 7.5zM14 20v-5h1v-4.5c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2V15h1v5h4z" }),
  "BoyOutlined"
);
const BrandingWatermarkIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z" }),
  "BrandingWatermarkOutlined"
);
const BreakfastDiningIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45 0-2.21-1.79-4-4-4zm1 5.72-1 .58V19H6V9.31l-.99-.58C4.38 8.35 4 7.71 4 7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2 0 .71-.38 1.36-1 1.72z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M12.71 9.29C12.51 9.1 12.26 9 12 9s-.51.1-.71.29l-3 3c-.39.39-.39 1.02 0 1.41l3 3c.2.2.45.3.71.3s.51-.1.71-.29l3-3c.39-.39.39-1.02 0-1.41l-3-3.01zM12 14.58 10.41 13 12 11.41 13.59 13 12 14.58z" }, "1")],
  "BreakfastDiningOutlined"
);
const Brightness1Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" }),
  "Brightness1Outlined"
);
const Brightness2Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07C10.9 17.77 12 14.95 12 12s-1.1-5.77-3.01-7.93C9.32 4.02 9.66 4 10 4m0-2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z" }),
  "Brightness2Outlined"
);
const Brightness3Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.7 4.91C15.25 6.24 17 8.92 17 12s-1.75 5.76-4.3 7.09c1.46-2 2.3-4.46 2.3-7.09s-.84-5.09-2.3-7.09M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54s-2.94 8.27-7 9.54c.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z" }),
  "Brightness3Outlined"
);
const Brightness4Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12.29 7c-.74 0-1.45.17-2.08.46 1.72.79 2.92 2.53 2.92 4.54s-1.2 3.75-2.92 4.54c.63.29 1.34.46 2.08.46 2.76 0 5-2.24 5-5s-2.24-5-5-5z" }),
  "Brightness4Outlined"
);
const Brightness5Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" }),
  "Brightness5Outlined"
);
const Brightness6Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6.5v11c3.03 0 5.5-2.47 5.5-5.5S15.03 6.5 12 6.5z" }),
  "Brightness6Outlined"
);
const Brightness7Icon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "2" }, "1")],
  "Brightness7Outlined"
);
const BrightnessAutoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m11 7-3.2 9h1.9l.7-2h3.2l.7 2h1.9L13 7h-2zm-.15 5.65L12 9l1.15 3.65h-2.3zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48z" }),
  "BrightnessAutoOutlined"
);
const BrightnessHighIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "2.5" }, "1")],
  "BrightnessHighOutlined"
);
const BrightnessLowIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" }),
  "BrightnessLowOutlined"
);
const BrightnessMediumIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6v12c3.31 0 6-2.69 6-6s-2.69-6-6-6z" }),
  "BrightnessMediumOutlined"
);
const BrokenImageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-4.58l.99.99 4-4 4 4 4-3.99L19 12.43V19zm0-9.41-1.01-1.01-4 4.01-4-4-4 4-.99-1V5h14v4.59z" }),
  "BrokenImageOutlined"
);
const BrowserNotSupportedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 6v10.5l1.95 1.95c.03-.15.05-.3.05-.45V6c0-1.1-.9-2-2-2H6.5l2 2H19zM3.22 3.32 1.95 4.59 3 5.64V18c0 1.1.9 2 2 2h12.36l2.06 2.06 1.27-1.27L3.22 3.32zM15 18H5V7.64L15.36 18H15z" }),
  "BrowserNotSupportedOutlined"
);
const BrowserUpdatedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 13v3c0 1.1-.9 2-2 2h-3l1 1v2H6v-2l1-1H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8v2H4v11h16v-3h2zm-7 2-5-5 1.41-1.41L14 11.17V3h2v8.17l2.59-2.58L20 10l-5 5z" }),
  "BrowserUpdatedOutlined"
);
const BrunchDiningIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 21.5c0 .28.22.5.49.5h13.02c.27 0 .49-.22.49-.5V20H2v1.5zM15.5 16H11v-2H7v2H2.5c-.28 0-.5.22-.5.5V18h14v-1.5c0-.28-.22-.5-.5-.5zm4.97-.55c.99-1.07 1.53-2.48 1.53-3.94V2h-6v9.47c0 1.48.58 2.92 1.6 4l.4.42V22h4v-2h-2v-4.03l.47-.52zM18 4h2v4h-2V4zm1.03 10.07c-.65-.71-1.03-1.65-1.03-2.6V10h2v1.51c0 .95-.34 1.85-.97 2.56z" }),
  "BrunchDiningOutlined"
);
const BrushIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 16c.55 0 1 .45 1 1 0 1.1-.9 2-2 2-.17 0-.33-.02-.5-.05.31-.55.5-1.21.5-1.95 0-.55.45-1 1-1M18.67 3c-.26 0-.51.1-.71.29L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41l-1.34-1.34c-.2-.2-.45-.29-.7-.29zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z" }),
  "BrushOutlined"
);
const BubbleChartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8.01-1c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM16.5 3C13.47 3 11 5.47 11 8.5s2.47 5.5 5.5 5.5S22 11.53 22 8.5 19.53 3 16.5 3zm0 9c-1.93 0-3.5-1.57-3.5-3.5S14.57 5 16.5 5 20 6.57 20 8.5 18.43 12 16.5 12z" }),
  "BubbleChartOutlined"
);
const BugReportIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-4 4v3c0 .22-.03.47-.07.7l-.1.65-.37.65c-.72 1.24-2.04 2-3.46 2s-2.74-.77-3.46-2l-.37-.64-.1-.65C8.03 15.48 8 15.23 8 15v-4c0-.23.03-.48.07-.7l.1-.65.37-.65c.3-.52.72-.97 1.21-1.31l.57-.39.74-.18c.31-.08.63-.12.94-.12.32 0 .63.04.95.12l.68.16.61.42c.5.34.91.78 1.21 1.31l.38.65.1.65c.04.22.07.47.07.69v1zm-6 2h4v2h-4zm0-4h4v2h-4z" }),
  "BugReportOutlined"
);
const BuildIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m22.61 18.99-9.08-9.08c.93-2.34.45-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11 6.08 7.52 2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.4-.38.4-1.01 0-1.41zm-3 1.6-9.46-9.46c-.61.45-1.29.72-2 .82-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09 4.24-4.24-3.09-3.09c1.24-.07 2.49.37 3.44 1.31 1.08 1.08 1.49 2.57 1.24 3.96-.12.71-.42 1.37-.88 1.96l9.45 9.45-.88.89z" }),
  "BuildOutlined"
);
const BuildCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsxs("g", { fillRule: "evenodd", children: [
    /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }),
    /* @__PURE__ */ jsx("path", { d: "M13.49 11.38c.43-1.22.17-2.64-.81-3.62-1.11-1.11-2.79-1.3-4.1-.59l2.35 2.35-1.41 1.41-2.35-2.35c-.71 1.32-.52 2.99.59 4.1.98.98 2.4 1.24 3.62.81l3.41 3.41c.2.2.51.2.71 0l1.4-1.4c.2-.2.2-.51 0-.71l-3.41-3.41z" })
  ] }),
  "BuildCircleOutlined"
);
const BungalowIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 14h-2v-2h2v2zm5.1 2.56L17 14.79V21H7v-6.2l-1.1 1.76-1.7-1.06L12 3l7.8 12.5-1.7 1.06zM15 11.59l-3-4.8-3 4.8V19h2v-3h2v3h2v-7.41z" }),
  "BungalowOutlined"
);
const BurstModeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 12H11V7h10v10zm-3.57-4.38-2 2.57L14 13.47l-2 2.52h8z" }),
  "BurstModeOutlined"
);
const BusAlertIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "6.5", cy: "15.5", r: "1.5" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "13.5", cy: "15.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("path", { d: "M4 11V8h7.29C11.1 7.37 11 6.7 11 6H4.43c.83-.71 2.98-1.09 6.65-.98.1-.7.3-1.37.59-1.99C2.97 2.67 2 5.02 2 7v9.5c0 .95.38 1.81 1 2.44V21c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2.06c.62-.63 1-1.49 1-2.44V13c-1.91 0-3.63-.76-4.89-2H4zm12 5c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-3h12v3z" }, "2"), /* @__PURE__ */ jsx("path", { d: "M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 8h-1V8h1v1zm0-2h-1V3h1v4z" }, "3")],
  "BusAlertOutlined"
);
const BusinessIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" }),
  "BusinessOutlined"
);
const BusinessCenterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z" }),
  "BusinessCenterOutlined"
);
const CabinIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1h2zm2 2L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4 12 3zm1.94 4h-3.89L12 5.52 13.94 7zm-6.5 2h9.12L18 10.1v.9H6v-.9L7.44 9zM18 13v2H6v-2h12zM6 19v-2h12v2H6z" }),
  "CabinOutlined"
);
const CableIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 5V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1h-1v4c0 .55.45 1 1 1h1v7c0 1.1-.9 2-2 2s-2-.9-2-2V7c0-2.21-1.79-4-4-4S5 4.79 5 7v7H4c-.55 0-1 .45-1 1v4h1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h1v-4c0-.55-.45-1-1-1H7V7c0-1.1.9-2 2-2s2 .9 2 2v10c0 2.21 1.79 4 4 4s4-1.79 4-4v-7h1c.55 0 1-.45 1-1V5h-1z" }),
  "CableOutlined"
);
const CachedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" }),
  "CachedOutlined"
);
const CakeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3zm1 11H5v-3c.9-.01 1.76-.37 2.4-1.01l1.09-1.07 1.07 1.07c1.31 1.31 3.59 1.3 4.89 0l1.08-1.07 1.07 1.07c.64.64 1.5 1 2.4 1.01v3zm0-4.5c-.51-.01-.99-.2-1.35-.57l-2.13-2.13-2.14 2.13c-.74.74-2.03.74-2.77 0L8.48 12.8l-2.14 2.13c-.35.36-.83.56-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3.5z" }),
  "CakeOutlined"
);
const CalculateIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M6.25 7.72h5v1.5h-5zM13 15.75h5v1.5h-5zm0-2.5h5v1.5h-5zM8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2zm6.09-7.05 1.41-1.41 1.41 1.41 1.06-1.06-1.41-1.42 1.41-1.41L16.91 6 15.5 7.41 14.09 6l-1.06 1.06 1.41 1.41-1.41 1.42z" }, "1")],
  "CalculateOutlined"
);
const CalendarViewDayIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z" }),
  "CalendarViewDayOutlined"
);
const CalendarViewMonthIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 11H4V6h4v5zm6 0h-4V6h4v5zm6 0h-4V6h4v5zM8 18H4v-5h4v5zm6 0h-4v-5h4v5zm6 0h-4v-5h4v5z" }),
  "CalendarViewMonthOutlined"
);
const CalendarViewWeekIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 2h2.5v12H13V6zm-2 12H8.5V6H11v12zM4 6h2.5v12H4V6zm16 12h-2.5V6H20v12z" }),
  "CalendarViewWeekOutlined"
);
const CallIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" }),
  "CallOutlined"
);
const CallEndIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.59 10.52c1.05.51 2.04 1.15 2.96 1.91l-1.07 1.07c-.58-.47-1.21-.89-1.88-1.27v-1.71m-13.2 0v1.7c-.65.37-1.28.79-1.87 1.27l-1.07-1.07c.91-.75 1.9-1.38 2.94-1.9M12 7C7.46 7 3.34 8.78.29 11.67c-.18.18-.29.43-.29.71s.11.53.29.7l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.1.7-.28.79-.73 1.68-1.36 2.66-1.85.33-.16.56-.51.56-.9v-3.1C8.85 9.25 10.4 9 12 9s3.15.25 4.59.73v3.1c0 .4.23.74.56.9.98.49 1.88 1.11 2.67 1.85.18.17.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.11-.53-.29-.71C20.66 8.78 16.54 7 12 7z" }),
  "CallEndOutlined"
);
const CallMadeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" }),
  "CallMadeOutlined"
);
const CallMergeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 20.41 18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z" }),
  "CallMergeOutlined"
);
const CallMissedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9L19.59 7z" }),
  "CallMissedOutlined"
);
const CallMissedOutgoingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m3 8.41 9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z" }),
  "CallMissedOutgoingOutlined"
);
const CallReceivedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41z" }),
  "CallReceivedOutlined"
);
const CallSplitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14 4 2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4h-6zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3L10 4z" }),
  "CallSplitOutlined"
);
const CallToActionIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5z" }),
  "CallToActionOutlined"
);
const CameraIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14.25 2.26-.08-.04-.01.02C13.46 2.09 12.74 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-4.75-3.31-8.72-7.75-9.74zM19.41 9h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7zM13.1 4.08 10.27 9l-1.15 2L6.4 6.3C7.84 4.88 9.82 4 12 4c.37 0 .74.03 1.1.08zM5.7 7.09 8.54 12l1.15 2H4.26C4.1 13.36 4 12.69 4 12c0-1.85.64-3.55 1.7-4.91zM4.59 15h7.98l-2.71 4.7c-2.4-.67-4.34-2.42-5.27-4.7zm6.31 4.91L14.89 13l2.72 4.7C16.16 19.12 14.18 20 12 20c-.38 0-.74-.04-1.1-.09zm7.4-3-4-6.91h5.43c.17.64.27 1.31.27 2 0 1.85-.64 3.55-1.7 4.91z" }),
  "CameraOutlined"
);
const CameraAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" }),
  "CameraAltOutlined"
);
const CameraEnhanceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 10-.94 2.06L9 13l2.06.94L12 16l.94-2.06L15 13l-2.06-.94zm8-5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l.59-.65L9.88 5h4.24l1.24 1.35.59.65H20v12zM12 8c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" }),
  "CameraEnhanceOutlined"
);
const CameraFrontIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zM11.99 8C13.1 8 14 7.1 14 6s-.9-2-2.01-2S10 4.9 10 6s.89 2 1.99 2zM17 0H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 16H7v-2h10v2zm0-3.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2h10v10.5z" }),
  "CameraFrontOutlined"
);
const CameraIndoorIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 13v-1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12L14 13zm-2-7.5 6 4.5v9H6v-9l6-4.5M12 3 4 9v12h16V9l-8-6z" }),
  "CameraIndoorOutlined"
);
const CameraOutdoorIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 13c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12L18 14v-1zM12 3 4 9v12h16v-2H6v-9l6-4.5 6 4.5v1h2V9l-8-6z" }),
  "CameraOutdoorOutlined"
);
const CameraRearIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 16H7V2h10v14zm-5-9c1.1 0 2-.9 1.99-2 0-1.1-.9-2-2-2S10 3.9 10 5s.89 2 2 2z" }),
  "CameraRearOutlined"
);
const CameraRollIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5h-8zm6 13h-8v2H4V5h3V3h2v2h3v2h8v11zM9 15h2v2H9zm0-7h2v2H9zm4 7h2v2h-2zm0-7h2v2h-2zm4 7h2v2h-2zm0-7h2v2h-2z" }),
  "CameraRollOutlined"
);
const CameraswitchIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M16 7h-1l-1-1h-4L9 7H8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H8V9h1.83l1-1h2.34l1 1H16v6z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "2" }, "1"), /* @__PURE__ */ jsx("path", { d: "M8.57.52 13.05 5l1.41-1.41-1.54-1.54C17.7 2.46 21.53 6.24 22 11h2C23.36 3.3 15.79-1.67 8.57.52zm.97 19.89 1.54 1.54C6.3 21.54 2.47 17.76 2 13H0c.64 7.7 8.21 12.67 15.43 10.48L10.95 19l-1.41 1.41z" }, "2")],
  "CameraswitchOutlined"
);
const CampaignIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm5.03 1.71L11 9.53v4.94l-1.97-1.18-.48-.29H4v-2h4.55l.48-.29zM15.5 12c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z" }),
  "CampaignOutlined"
);
const CancelIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" }),
  "CancelOutlined"
);
const CancelPresentationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9.41 15.95 12 13.36l2.59 2.59L16 14.54l-2.59-2.59L16 9.36l-1.41-1.41L12 10.54 9.41 7.95 8 9.36l2.59 2.59L8 14.54z" }),
  "CancelPresentationOutlined"
);
const CancelScheduleSendIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M16.5 9c-.42 0-.83.04-1.24.11L1.01 3 1 10l10.06 1.34c-.42.44-.78.93-1.09 1.46L1 14l.01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9zM3 8.25l.01-2.22 7.51 3.22-7.52-1zm6.1 7.11L3 17.97v-2.22l6.17-.82c-.03.14-.05.28-.07.43zM16.5 22c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m18.27 14.03-1.77 1.76-1.77-1.76-.7.7 1.76 1.77-1.76 1.77.7.7 1.77-1.76 1.77 1.76.7-.7-1.76-1.77 1.76-1.77z" }, "1")],
  "CancelScheduleSendOutlined"
);
const CandlestickChartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 4H7v2H5v12h2v2h2v-2h2V6H9V4zm0 12H7V8h2v8zm10-8h-2V4h-2v4h-2v7h2v5h2v-5h2V8zm-2 5h-2v-3h2v3z" }),
  "CandlestickChartOutlined"
);
const CarRentalIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "9", cy: "16.5", r: "1" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "15", cy: "16.5", r: "1" }, "1"), /* @__PURE__ */ jsx("path", { d: "M17.25 9.6c-.02-.02-.03-.04-.05-.07-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06-.07.11-.14.24-.19.4-.22.66-.74 2.22-1.56 4.69v6.5c0 .45.35.81.78.81h.44c.43 0 .78-.36.78-.81V20h10v1.19c0 .45.34.81.78.81h.44c.43 0 .78-.36.78-.81v-6.5c-.82-2.46-1.34-4.03-1.56-4.69-.05-.16-.12-.29-.19-.4zM8.33 11h7.34l.23.69.43 1.31H7.67l.66-2zM17 18H7v-3h10v3zM10.83 3C10.41 1.83 9.3 1 8 1 6.34 1 5 2.34 5 4c0 1.65 1.34 3 3 3 1.3 0 2.41-.84 2.83-2H16v2h2V5h1V3h-8.17zM8 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }, "2")],
  "CarRentalOutlined"
);
const CarRepairIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "9", cy: "10.5", r: "1" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "15", cy: "10.5", r: "1" }, "1"), /* @__PURE__ */ jsx("path", { d: "M5.78 16h.44c.43 0 .78-.36.78-.81V14h10v1.19c0 .45.34.81.78.81h.44c.43 0 .78-.36.78-.81v-6.5S17.66 4.66 17.44 4c-.05-.16-.12-.29-.19-.4-.02-.02-.03-.04-.05-.07-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06-.07.11-.14.24-.19.4C6.34 4.66 5 8.69 5 8.69v6.5c0 .45.35.81.78.81zM8.33 5h7.34l.23.69.43 1.31H7.67l.66-2zM7 9.01V9h10v3H7V9.01zm-3 8V19h7v3h2v-3h7v-1.99z" }, "2")],
  "CarRepairOutlined"
);
const CardGiftcardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z" }),
  "CardGiftcardOutlined"
);
const CardMembershipIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z" }),
  "CardMembershipOutlined"
);
const CardTravelIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z" }),
  "CardTravelOutlined"
);
const CarpenterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.73 14.23 7 1.5 3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83zM5.71 5.62 7 4.33l8.49 8.49-2.81 2.81L5.71 5.62zm8.36 14.26-1.41-1.41 4.24-4.24 1.41 1.41-4.24 4.24z" }),
  "CarpenterOutlined"
);
const CasesIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M3 9H1v11c0 1.11.89 2 2 2h17v-2H3V9z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z" }, "1")],
  "CasesOutlined"
);
const CasinoIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "16.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "7.5", r: "1.5" }, "2"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1.5" }, "3"), /* @__PURE__ */ jsx("circle", { cx: "16.5", cy: "16.5", r: "1.5" }, "4"), /* @__PURE__ */ jsx("circle", { cx: "16.5", cy: "7.5", r: "1.5" }, "5")],
  "CasinoOutlined"
);
const CastIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z" }),
  "CastOutlined"
);
const CastConnectedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 7v2h12v6h-3v2h5V7z" }),
  "CastConnectedOutlined"
);
const CastForEducationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm10 1.09v2L14.5 15l3.5-1.91v-2L14.5 13 11 11.09zM14.5 6 9 9l5.5 3L20 9l-5.5-3z" }),
  "CastForEducationOutlined"
);
const CastleIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9V9h-2zm0 10h-5v-1c0-2.21-1.79-4-4-4s-4 1.79-4 4v1H3v-6h4V7h10v6h4v6z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M9 9h2v3H9zm4 0h2v3h-2z" }, "1")],
  "CastleOutlined"
);
const CatchingPokemonIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.5 12c0 1.38-1.12 2.5-2.5 2.5S9.5 13.38 9.5 12s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5zm7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8z" }),
  "CatchingPokemonOutlined"
);
const CategoryIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 2-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z" }),
  "CategoryOutlined"
);
const CelebrationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m2 22 14-5-9-9-5 14zm10.35-5.82L5.3 18.7l2.52-7.05 4.53 4.53zm2.18-3.65 5.59-5.59c.49-.49 1.28-.49 1.77 0l.59.59 1.06-1.06-.59-.59c-1.07-1.07-2.82-1.07-3.89 0l-5.59 5.59 1.06 1.06zm-4.47-5.65-.59.59 1.06 1.06.59-.59c1.07-1.07 1.07-2.82 0-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76zm7 5-1.59 1.59 1.06 1.06 1.59-1.59c.49-.49 1.28-.49 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61c-1.08-1.07-2.82-1.07-3.89 0zm-2-6-3.59 3.59 1.06 1.06 3.59-3.59c1.07-1.07 1.07-2.82 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77z" }),
  "CelebrationOutlined"
);
const CellTowerIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m7.3 14.7 1.2-1.2c-1-1-1.5-2.3-1.5-3.5 0-1.3.5-2.6 1.5-3.5L7.3 5.3c-1.3 1.3-2 3-2 4.7s.7 3.4 2 4.7zM19.1 2.9l-1.2 1.2c1.6 1.6 2.4 3.8 2.4 5.9 0 2.1-.8 4.3-2.4 5.9l1.2 1.2c2-2 2.9-4.5 2.9-7.1 0-2.6-1-5.1-2.9-7.1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M6.1 4.1 4.9 2.9C3 4.9 2 7.4 2 10c0 2.6 1 5.1 2.9 7.1l1.2-1.2c-1.6-1.6-2.4-3.8-2.4-5.9 0-2.1.8-4.3 2.4-5.9zm10.6 10.6c1.3-1.3 2-3 2-4.7-.1-1.7-.7-3.4-2-4.7l-1.2 1.2c1 1 1.5 2.3 1.5 3.5 0 1.3-.5 2.6-1.5 3.5l1.2 1.2zM14.5 10c0-1.38-1.12-2.5-2.5-2.5S9.5 8.62 9.5 10c0 .76.34 1.42.87 1.88L7 22h2l.67-2h4.67l.66 2h2l-3.37-10.12c.53-.46.87-1.12.87-1.88zm-4.17 8L12 13l1.67 5h-3.34z" }, "1")],
  "CellTowerOutlined"
);
const CellWifiIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 22h16V5.97L6 22zm14-2h-2v-7.22l2-2V20zM5.22 7.22 3.93 5.93c3.9-3.91 10.24-3.91 14.15 0l-1.29 1.29c-3.19-3.19-8.38-3.19-11.57 0zm7.71 3.85L11 13l-1.93-1.93c1.07-1.06 2.79-1.06 3.86 0zm1.29-1.28c-1.78-1.77-4.66-1.77-6.43 0L6.5 8.5c2.48-2.48 6.52-2.48 9 0l-1.28 1.29z" }),
  "CellWifiOutlined"
);
const CenterFocusStrongIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zm-5 3c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm-7 0H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z" }),
  "CenterFocusStrongOutlined"
);
const CenterFocusWeakIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm7 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7-11h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z" }),
  "CenterFocusWeakOutlined"
);
const ChairIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 8V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3zM6 6c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H7v-2c0-.88-.39-1.67-1-2.22V6zm15 10c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h14v-4c0-.55.45-1 1-1s1 .45 1 1v5z" }),
  "ChairOutlined"
);
const ChairAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H7c-1.1 0-2 .9-2 2v7h2v-3h10v3h2v-7c0-1.1-.9-2-2-2h-1v-2h1zM7 8V5h10v3H7zm10 8H7v-2h10v2zm-3-4h-4v-2h4v2z" }),
  "ChairAltOutlined"
);
const ChaletIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.5 15 10 7.5 2.5 15l1.41 1.41L5 15.33V20h10v-4.67l1.09 1.09L17.5 15zM13 18h-2v-3H9v3H7v-4.67l3-3 3 3V18zm9-10.5h-1.19l.75.75-.71.71-1.46-1.46h-.89v.89l1.45 1.45-.71.71-.74-.74V11h-1V9.81l-.75.75-.71-.71 1.45-1.45v-.9h-.89l-1.45 1.45-.71-.71.75-.75H14v-1h1.19l-.75-.75.71-.71 1.45 1.45h.89v-.87l-1.45-1.45.71-.71.75.75V3h1v1.19l.75-.75.71.71-1.46 1.46v.89h.89l1.45-1.45.71.71-.74.74H22v1z" }),
  "ChaletOutlined"
);
const ChangeCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.17-5.24-1.1-1.1c.71-1.33.53-3.01-.59-4.13C13.79 8.84 12.9 8.5 12 8.5c-.03 0-.06.01-.09.01L13 9.6l-1.06 1.06-2.83-2.83L11.94 5 13 6.06l-.96.96c1.27.01 2.53.48 3.5 1.44 1.7 1.71 1.91 4.36.63 6.3zm-1.28 1.41L12.06 19 11 17.94l.95-.95c-1.26-.01-2.52-.5-3.48-1.46-1.71-1.71-1.92-4.35-.64-6.29l1.1 1.1c-.71 1.33-.53 3.01.59 4.13.7.7 1.63 1.04 2.56 1.01L11 14.4l1.06-1.06 2.83 2.83z" }),
  "ChangeCircleOutlined"
);
const ChangeHistoryIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 7.77 18.39 18H5.61L12 7.77M12 4 2 20h20L12 4z" }),
  "ChangeHistoryOutlined"
);
const ChargingStationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14.5 11-3 6v-4h-2l3-6v4h2zM17 3H7v1h10V3m0 17H7v1h10v-1m0-19c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h10zM7 18h10V6H7v12z" }),
  "ChargingStationOutlined"
);
const ChatIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" }),
  "ChatOutlined"
);
const ChatBubbleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" }),
  "ChatBubbleOutlined"
);
const ChatBubbleOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" }),
  "ChatBubbleOutlineOutlined"
);
const CheckBoxIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z" }),
  "CheckBoxOutlined"
);
const CheckCircleOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" }),
  "CheckCircleOutlineOutlined"
);
const CheckroomIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5 6 4.5H6z" }),
  "CheckroomOutlined"
);
const ChildCareIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "14.5", cy: "10.5", r: "1.25" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "9.5", cy: "10.5", r: "1.25" }, "1"), /* @__PURE__ */ jsx("path", { d: "M22.94 11.34c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17-.04.21-.06.43-.06.66 0 .23.02.45.06.66.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17.04-.21.06-.43.06-.66 0-.23-.02-.45-.06-.66zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2zm-7 3c2.01 0 3.74-1.23 4.5-3h-9c.76 1.77 2.49 3 4.5 3z" }, "2")],
  "ChildCareOutlined"
);
const ChildFriendlyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 2v8h8c0-4.42-3.58-8-8-8zm2 6V4.34c1.7.6 3.05 1.95 3.66 3.66H15zm-8.56 3-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61C20.37 14.54 21 12.84 21 11H6.44zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20zm.74-5.34-.29.37c-.14-.02-.3-.03-.45-.03-1.39 0-2.6.82-3.16 2h-2.68c-.5-1.04-1.5-1.8-2.68-1.97l-.44-.67c-.1-.17-.34-.69-.67-1.36h11.29c-.21.59-.52 1.15-.92 1.66z" }),
  "ChildFriendlyOutlined"
);
const ChromeReaderModeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z" }),
  "ChromeReaderModeOutlined"
);
const ChurchIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6 9v3.22L2 14v8h9v-4c0-.55.45-1 1-1s1 .45 1 1v4h9v-8l-4-1.78zM20 20h-5v-2.04c0-1.69-1.35-3.06-3-3.06s-3 1.37-3 3.06V20H4v-4.79l4-1.81v-3.35L12 8l4 2.04v3.35l4 1.81V20z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1.5" }, "1")],
  "ChurchOutlined"
);
const CircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }),
  "CircleOutlined"
);
const CircleNotificationsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 18.5c.83 0 1.5-.67 1.5-1.5h-3c0 .83.67 1.5 1.5 1.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-8.61c0-2.11-1.03-3.92-3-4.39v-.5c0-.57-.43-1-1-1s-1 .43-1 1V7c-1.97.47-3 2.27-3 4.39V14H7v2h10v-2h-1v-2.61zM14 14h-4v-3c0-1.1.9-2 2-2s2 .9 2 2v3z" }),
  "CircleNotificationsOutlined"
);
const ClassIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z" }),
  "ClassOutlined"
);
const CleanHandsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m16.99 5 .63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37L14.99 7l1.37-.63.63-1.37M20 14c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2zm-9-7.9V4h2c.57 0 1.1.17 1.55.45l1.43-1.43C15.15 2.39 14.13 2 13 2H7.5v2H9v2.11c-1.78.37-3.2 1.68-3.75 3.39h2.16C7.94 8.61 8.89 8 10 8c1.62 0 2.94 1.29 2.99 2.9l2.01.75V11c0-2.42-1.72-4.44-4-4.9zM22 19v1l-8 2.5-7-1.94V22H1V11h7.97l6.16 2.3c1.12.42 1.87 1.5 1.87 2.7h2c1.66 0 3 1.34 3 3zM5 20v-7H3v7h2zm14.9-1.43c-.16-.33-.51-.56-.9-.56h-5.35c-.54 0-1.07-.09-1.58-.26l-2.38-.79.63-1.9 2.38.79c.31.1 2.3.15 2.3.15 0-.37-.23-.7-.57-.83L8.61 13H7v5.48l6.97 1.93 5.93-1.84z" }),
  "CleanHandsOutlined"
);
const CleaningServicesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm-5-8h2v8h-2V3zm8 18h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z" }),
  "CleaningServicesOutlined"
);
const ClearIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" }),
  "ClearOutlined"
);
const ClearAllIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" }),
  "ClearAllOutlined"
);
const CloseFullscreenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 3.41 16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2 22 3.41zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59 3.41 22z" }),
  "CloseFullscreenOutlined"
);
const ClosedCaptionIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12zM7 15h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm7 0h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z" }),
  "ClosedCaptionOutlined"
);
const ClosedCaptionDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1h-1.5v-.5h-2v1L13 10zm3.5 3.5 1.21 1.21c.18-.19.29-.44.29-.71v-1h-1.5v.5zM8.83 6H19v10.17l1.98 1.98c0-.05.02-.1.02-.16V6c0-1.1-.9-2-2-2H6.83l2 2zm10.95 16.61L17.17 20H5c-1.11 0-2-.9-2-2V6c0-.05.02-.1.02-.15L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM7.5 13.5h2V13h.67l-2.5-2.5H7.5v3zm7.67 4.5L11 13.83V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.32.16-.59.4-.78L5 7.83V18h10.17z" }),
  "ClosedCaptionDisabledOutlined"
);
const ClosedCaptionOffIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M7 15h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm7 0h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z" }, "1")],
  "ClosedCaptionOffOutlined"
);
const CloudIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4z" }),
  "CloudOutlined"
);
const CloudCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.29-9.81c-.4-2.01-2.16-3.52-4.29-3.52-1.69 0-3.15.96-3.88 2.36C6.36 9.21 5 10.7 5 12.5 5 14.43 6.57 16 8.5 16h7.58c1.61 0 2.92-1.31 2.92-2.92 0-1.54-1.2-2.79-2.71-2.89zM16 14H8.5c-.83 0-1.5-.67-1.5-1.5S7.67 11 8.5 11h.9l.49-1.05c.41-.79 1.22-1.28 2.11-1.28 1.13 0 2.11.8 2.33 1.91l.28 1.42H16c.55 0 1 .45 1 1s-.45 1-1 1z" }),
  "CloudCircleOutlined"
);
const CloudDoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-9-3.82-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z" }),
  "CloudDoneOutlined"
);
const CloudDownloadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4 4-4h-2.55z" }),
  "CloudDownloadOutlined"
);
const CloudOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M24 15c0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4c-1.33 0-2.57.36-3.65.97l1.49 1.49C10.51 6.17 11.23 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 .99-.48 1.85-1.21 2.4l1.41 1.41c1.09-.92 1.8-2.27 1.8-3.81zM4.41 3.86 3 5.27l2.77 2.77h-.42C2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h11.73l2 2 1.41-1.41L4.41 3.86zM6 18c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73l8 8H6z" }),
  "CloudOffOutlined"
);
const CloudQueueIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z" }),
  "CloudQueueOutlined"
);
const CloudSyncIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.5 14.98c-.02 0-.03 0-.05.01C21.2 13.3 19.76 12 18 12c-1.4 0-2.6.83-3.16 2.02C13.26 14.1 12 15.4 12 17c0 1.66 1.34 3 3 3l6.5-.02c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5zm.01 3.02H15c-.55 0-1-.45-1-1s.45-1 1-1h1.25v-.25c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75V17h1.76c.28 0 .5.22.5.5-.01.27-.23.5-.5.5zM10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73C5.06 16.54 4 14.4 4 12c0-3.73 2.55-6.85 6-7.74zM20 6h-2.73c1.43 1.26 2.41 3.01 2.66 5h-2.02c-.23-1.36-.93-2.55-1.91-3.44V10h-2V4h6v2z" }),
  "CloudSyncOutlined"
);
const CloudUploadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z" }),
  "CloudUploadOutlined"
);
const Co2Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 9h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-.5 4.5h-2v-3h2v3zM8 13v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H6.5v-.5h-2v3h2V13H8zm12.5 2.5h-2v1h3V18H17v-2.5c0-.55.45-1 1-1h2v-1h-3V12h3.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1z" }),
  "Co2Outlined"
);
const CoPresentIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M13 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm8.39 6.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56C1.61 17.07 1 18.1 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM15 20H3c0-.72-.1-1.34.52-1.66C4.71 17.73 6.63 17 9 17c2.37 0 4.29.73 5.48 1.34.63.32.52.95.52 1.66z" }, "1")],
  "CoPresentOutlined"
);
const CodeOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17 19.17 12zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81 1.39 4.22z" }),
  "CodeOffOutlined"
);
const CoffeeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm0 5v1c0 2.76-2.24 5-5 5s-5-2.24-5-5v-1m12.5-2H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4v-2z" }),
  "CoffeeOutlined"
);
const CoffeeMakerIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 6V4h2V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14v-2h-4.03c1.23-.91 2.03-2.36 2.03-4v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1zm-8 10v-3h6v3c0 1.65-1.35 3-3 3s-3-1.35-3-3z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "13", cy: "9", r: "1" }, "1")],
  "CoffeeMakerOutlined"
);
const CollectionsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67 1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" }),
  "CollectionsOutlined"
);
const CollectionsBookmarkIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 2v5l-1-.75L15 9V4h2zm3 12H8V4h5v9l3-2.25L19 13V4h1v12z" }),
  "CollectionsBookmarkOutlined"
);
const ColorLensIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "6.5", cy: "11.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "9.5", cy: "7.5", r: "1.5" }, "2"), /* @__PURE__ */ jsx("circle", { cx: "14.5", cy: "7.5", r: "1.5" }, "3"), /* @__PURE__ */ jsx("circle", { cx: "17.5", cy: "11.5", r: "1.5" }, "4")],
  "ColorLensOutlined"
);
const ColorizeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17.66 5.41.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19 5 17.08l8.06-8.06 1.92 1.92L6.92 19z" }),
  "ColorizeOutlined"
);
const CommentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM20 4v13.17L18.83 16H4V4h16zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" }),
  "CommentOutlined"
);
const CommentBankIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 14V6h-5v8l2.5-1.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" }, "1")],
  "CommentBankOutlined"
);
const CommentsDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.83 16H20V4H6.83l-2-2H20c1.1 0 2 .9 2 2v15.17L18.83 16zM18 6H8.83l2 2H18V6zm0 3h-6.17l2 2H18V9zm0 5v-2h-3.17l2 2H18zm3.9 7.9-1.41 1.41L15.17 18H4c-1.1 0-2-.9-2-2V4.83L.69 3.51 2.1 2.1l19.8 19.8zM13.17 16l-2-2H6v-2h3.17l-1-1H6V9h.17L4 6.83V16h9.17z" }),
  "CommentsDisabledOutlined"
);
const CommitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.9 11c-.46-2.28-2.48-4-4.9-4s-4.44 1.72-4.9 4H2v2h5.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4H22v-2h-5.1zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" }),
  "CommitOutlined"
);
const CommuteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-1 1v1h1l2-2h2v-5H4V6h9v2h2V7c0-1.66-1.34-3-3-3zM5 14c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66l-1.42 4.11v5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V18h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14l-1.43-4.11zm-8.16.34h7.19l1.03 3h-9.25l1.03-3zM12 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }),
  "CommuteOutlined"
);
const CompareIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }),
  "CompareOutlined"
);
const CompareArrowsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z" }),
  "CompareArrowsOutlined"
);
const CompassCalibrationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-17C8.1 3 4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08s3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3zm4.84 6.47c-1.44-.91-3.1-1.4-4.84-1.4-1.74 0-3.41.49-4.85 1.41L4.94 7.26C6.99 5.79 9.44 5 12 5c2.56 0 5 .79 7.05 2.26l-2.21 2.21z" }),
  "CompassCalibrationOutlined"
);
const CompressIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 9v2h16V9H4zm12-5-1.41-1.41L13 4.17V1h-2v3.19L9.39 2.61 8 4l4 4 4-4zM4 14h16v-2H4v2zm4 5 1.39 1.39L11 18.81V22h2v-3.17l1.59 1.59L16 19l-4-4-4 4z" }),
  "CompressOutlined"
);
const ConfirmationNumberIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z" }),
  "ConfirmationNumberOutlined"
);
const ConnectWithoutContactIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 14H9c0-4.97 4.03-9 9-9v2c-3.87 0-7 3.13-7 7zm7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3zM7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2zm4.45.5h-2C9.21 5.92 7.99 7 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74c1.86-.59 3.25-2.23 3.45-4.24zM19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 1h-3c-1.49 0-2.71-1.08-2.95-2.5h-2c.2 2.01 1.59 3.65 3.45 4.24V22h6v-2.5c0-.83-.67-1.5-1.5-1.5z" }),
  "ConnectWithoutContactOutlined"
);
const ConnectedTvIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2zm0 14H4V5h16v12zM5 14v2h2c0-1.11-.89-2-2-2zm0-3v1.43c1.97 0 3.57 1.6 3.57 3.57H10c0-2.76-2.24-5-5-5zm0-3v1.45c3.61 0 6.55 2.93 6.55 6.55H13c0-4.42-3.59-8-8-8z" }),
  "ConnectedTvOutlined"
);
const ConnectingAirportsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m15.4 17 1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2 .6 2h-1l-.75-1H15.4zM5.75 7 5 6H4l.6 2-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7H5.75z" }),
  "ConnectingAirportsOutlined"
);
const ConstructionIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m13.7826 15.1719 2.1213-2.1213 5.9963 5.9962-2.1213 2.1213zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49c-1.17-1.17-3.07-1.17-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21z" }),
  "ConstructionOutlined"
);
const ContactMailIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zm0 16H2V5h20v14zM21 6h-7v5h7V6zm-1 2-2.5 1.75L15 8V7l2.5 1.75L20 7v1zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.41zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z" }),
  "ContactMailOutlined"
);
const ContactPageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.17 4 18 8.83V20H6V4h7.17M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.99 0-1.93.21-2.78.58C8.48 15.9 8 16.62 8 17.43V18h8v-.57z" }),
  "ContactPageOutlined"
);
const ContactPhoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zm0 16H2V5h20v14zm-2.99-1.01L21 16l-1.51-2h-1.64c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2h1.64L21 8l-1.99-1.99c-1.31.98-2.28 2.37-2.73 3.99-.18.64-.28 1.31-.28 2s.1 1.36.28 2c.45 1.61 1.42 3.01 2.73 3.99zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.41zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z" }),
  "ContactPhoneOutlined"
);
const ContactSupportIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 23.59v-3.6c-5.01-.26-9-4.42-9-9.49C2 5.26 6.26 1 11.5 1S21 5.26 21 10.5c0 4.95-3.44 9.93-8.57 12.4l-1.43.69zM11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3zm-1 11.5h2v2h-2zm2-1.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" }),
  "ContactSupportOutlined"
);
const ContactlessIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M7.1 10.18c.26.56.39 1.16.4 1.8.01.63-.13 1.25-.4 1.86l1.37.62c.37-.81.55-1.65.54-2.5-.01-.84-.19-1.65-.54-2.4l-1.37.62zm6.23-2.85c.78 1.57 1.18 3.14 1.18 4.64 0 1.51-.4 3.09-1.18 4.69l1.35.66c.88-1.81 1.33-3.61 1.33-5.35 0-1.74-.45-3.53-1.33-5.31l-1.35.67zM10.2 8.72c.53 1.07.8 2.21.8 3.4 0 1.17-.26 2.23-.78 3.15l1.3.74c.65-1.15.98-2.45.98-3.89 0-1.42-.32-2.79-.96-4.07l-1.34.67z" }, "1")],
  "ContactlessOutlined"
);
const ContactsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM4 0h16v2H4zm0 22h16v2H4zm8-10c1.38 0 2.5-1.12 2.5-2.5S13.38 7 12 7 9.5 8.12 9.5 9.5 10.62 12 12 12zm0-3.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 7.49C17 13.9 13.69 13 12 13s-5 .9-5 2.99V17h10v-1.01zm-8.19-.49c.61-.52 2.03-1 3.19-1 1.17 0 2.59.48 3.2 1H8.81z" }),
  "ContactsOutlined"
);
const ContentCutIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z" }),
  "ContentCutOutlined"
);
const ContentPasteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" }),
  "ContentPasteOutlined"
);
const ContentPasteGoIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M5 5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m18.01 13-1.42 1.41 1.58 1.58H12v2h6.17l-1.58 1.59 1.42 1.41 3.99-4z" }, "1")],
  "ContentPasteGoOutlined"
);
const ContentPasteOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.42zM5 19V7.83L16.17 19H5zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5H17zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" }),
  "ContentPasteOffOutlined"
);
const ContentPasteSearchIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4-2.7-2.7zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" }, "1")],
  "ContentPasteSearchOutlined"
);
const ContrastIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z" }),
  "ContrastOutlined"
);
const ControlCameraIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M5.54 8.46 2 12l3.54 3.54 1.76-1.77L5.54 12l1.76-1.77zm6.46 10-1.77-1.76-1.77 1.76L12 22l3.54-3.54-1.77-1.76zm6.46-10-1.76 1.77L18.46 12l-1.76 1.77 1.76 1.77L22 12zm-10-2.92 1.77 1.76L12 5.54l1.77 1.76 1.77-1.76L12 2z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" }, "1")],
  "ControlCameraOutlined"
);
const ControlPointIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }),
  "ControlPointOutlined"
);
const ControlPointDuplicateIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" }),
  "ControlPointDuplicateOutlined"
);
const CookieIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "10.5", cy: "8.5", r: "1.5" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "13.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "15", cy: "15", r: "1" }, "2"), /* @__PURE__ */ jsx("path", { d: "M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.97 1-5.78-1.59-5.19-4.56C7.11.74 2 6.41 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01zM12 20c-4.41 0-8-3.59-8-8 0-3.31 2.73-8.18 8.08-8.02.42 2.54 2.44 4.56 4.99 4.94.07.36.52 2.55 2.92 3.63C19.7 16.86 16.06 20 12 20z" }, "3")],
  "CookieOutlined"
);
const CopyAllIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z" }),
  "CopyAllOutlined"
);
const CopyrightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91c.48.22 1.05.34 1.7.34.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }),
  "CopyrightOutlined"
);
const CoronavirusIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.5 12c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm4.25-2c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-3.5 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM22 11.25v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75h-1.54c-.15 1.37-.69 2.63-1.52 3.65l1.09 1.09.01-.01c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.06 1.06c-.29.29-.77.29-1.06 0-.29-.29-.29-.76-.01-1.05l-1.09-1.09a7.015 7.015 0 0 1-3.64 1.51v1.54h.01c.41 0 .75.34.75.75s-.34.75-.75.75h-1.5c-.41 0-.75-.34-.75-.75s.33-.74.74-.75v-1.55c-1.37-.15-2.62-.69-3.63-1.51l-1.09 1.09.01.01c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0L4.4 18.54c-.29-.29-.29-.77 0-1.06.29-.29.76-.29 1.05-.01l1.09-1.09c-.82-1.02-1.36-2.26-1.5-3.63H3.5c0 .41-.34.75-.75.75S2 13.16 2 12.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75h1.54c.15-1.37.69-2.61 1.5-3.63L5.45 6.53c-.29.28-.76.28-1.05-.01-.29-.29-.29-.77 0-1.06L5.46 4.4c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.01.01L7.6 6.56c1.02-.82 2.26-1.36 3.63-1.51V3.5c-.41-.01-.74-.34-.74-.75.01-.41.35-.75.76-.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75h-.01v1.54c1.37.14 2.62.69 3.64 1.51l1.09-1.09c-.29-.29-.28-.76.01-1.05.29-.29.77-.29 1.06 0l1.06 1.06c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.01-.01-1.09 1.08c.82 1.02 1.37 2.27 1.52 3.65h1.54c0-.41.34-.75.75-.75s.75.34.75.75zM17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zm-5-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.5 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-1.75 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" }),
  "CoronavirusOutlined"
);
const CorporateFareIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z" }),
  "CorporateFareOutlined"
);
const CottageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 3 6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4 12 3zm6 16h-5v-4h-2v4H6v-8.9l6-4.58 6 4.58V19zM10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1h2z" }),
  "CottageOutlined"
);
const CountertopsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 10h-4V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1v3H8c1.1 0 2-.9 2-2V4H4v4c0 1.1.9 2 2 2H2v2h2v8h16v-8h2v-2zM6 6h2v2H6V6zm0 12v-6h5v6H6zm12 0h-5v-6h5v6z" }),
  "CountertopsOutlined"
);
const CreateIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" }),
  "CreateOutlined"
);
const CreditCardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" }),
  "CreditCardOutlined"
);
const CreditCardOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.83 4H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L20 17.17V12h-5.17l-4-4H20V6H8.83l-2-2zm13.66 19.31L17.17 20H4c-1.11 0-2-.89-2-2l.01-12c0-.34.08-.66.23-.93L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM4 6.83V8h1.17L4 6.83zM15.17 18l-6-6H4v6h11.17z" }),
  "CreditCardOffOutlined"
);
const CreditScoreIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h5v-2H4v-6h18V6c0-1.11-.89-2-2-2zm0 4H4V6h16v2zm-5.07 11.17-2.83-2.83-1.41 1.41L14.93 22 22 14.93l-1.41-1.41-5.66 5.65z" }),
  "CreditScoreOutlined"
);
const CribIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 9h-6V4H8C5.79 4 4 5.79 4 8v6c0 1.1.9 2 2 2h2v2.93c-.61-.35-1.16-.78-1.65-1.27l-1.42 1.42C6.74 20.88 9.24 22 12 22c2.76 0 5.26-1.12 7.07-2.93l-1.42-1.42c-.49.49-1.05.92-1.65 1.27V16h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm-4 10.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4v3.75zM18 14H6V8c0-1.1.9-2 2-2h2v5h8v3z" }),
  "CribOutlined"
);
const CropIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z" }),
  "CropOutlined"
);
const Crop169Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" }),
  "Crop169Outlined"
);
const Crop32Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z" }),
  "Crop32Outlined"
);
const Crop54Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z" }),
  "Crop54Outlined"
);
const Crop75Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z" }),
  "Crop75Outlined"
);
const CropDinIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }),
  "CropDinOutlined"
);
const CropFreeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z" }),
  "CropFreeOutlined"
);
const CropLandscapeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z" }),
  "CropLandscapeOutlined"
);
const CropOriginalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" }),
  "CropOriginalOutlined"
);
const CropPortraitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z" }),
  "CropPortraitOutlined"
);
const CropRotateIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z" }),
  "CropRotateOutlined"
);
const CropSquareIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z" }),
  "CropSquareOutlined"
);
const CssIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.5 14v-1H11v.5h2v-1h-2.5c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H13v-.5h-2v1h2.5c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1zm7.5 1h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1h-2.5v-1h2v.5H21v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2V13H16v1c0 .55.45 1 1 1zm-9-5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1H6.5v.5h-2v-3h2v.5H8v-1z" }),
  "CssOutlined"
);
const CurrencyExchangeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44zM3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4 4.97 0 9-4.03 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67V21zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3c-4.97 0-9 4.03-9 9H1z" }),
  "CurrencyExchangeOutlined"
);
const CurrencyFrancIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z" }),
  "CurrencyFrancOutlined"
);
const CurrencyLiraIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 8.76V3h2v4.51L15 5v2.36l-4 2.51.01 2.35L15 9.72v2.36l-4 2.51V19c2.76 0 5-2.24 5-5h2c0 3.87-3.13 7-7 7H9v-5.16l-3 1.88v-2.36l3-1.88v-2.36L6 13v-2.36l3-1.88z" }),
  "CurrencyLiraOutlined"
);
const CurrencyPoundIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 21c1.93 0 3.62-1.17 4-3l-1.75-.88C16 18.21 15.33 19 14 19H9.1c.83-1 1.5-2.34 1.5-4 0-.35-.03-.69-.08-1H14v-2H9.82C9 10.42 8 9.6 8 8c0-1.93 1.57-3.5 3.5-3.5 1.5 0 2.79.95 3.28 2.28L16.63 6c-.8-2.05-2.79-3.5-5.13-3.5C8.46 2.5 6 4.96 6 8c0 1.78.79 2.9 1.49 4H6v2h2.47c.08.31.13.64.13 1 0 2.7-2.6 4-2.6 4v2h8z" }),
  "CurrencyPoundOutlined"
);
const CurrencyRubleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.5 3H7v9H5v2h2v2H5v2h2v3h2v-3h4v-2H9v-2h4.5c3.04 0 5.5-2.46 5.5-5.5S16.54 3 13.5 3zm0 9H9V5h4.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12z" }),
  "CurrencyRubleOutlined"
);
const CurrencyRupeeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7h7.66z" }),
  "CurrencyRupeeOutlined"
);
const CurrencyYenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.92 11H18v2h-5v2h5v2h-5v4h-2v-4H6v-2h5v-2H6v-2h4.08L5 3h2.37L12 10.29 16.63 3H19z" }),
  "CurrencyYenOutlined"
);
const CurrencyYuanIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.28 12H18v2h-5v7h-2v-7H6v-2h4.72L5 3h2.37L12 10.29 16.63 3H19z" }),
  "CurrencyYuanOutlined"
);
const DashboardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" }),
  "DashboardOutlined"
);
const DashboardCustomizeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13-2h-2v3h-3v2h3v3h2v-3h3v-2h-3z" }),
  "DashboardCustomizeOutlined"
);
const DataArrayIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z" }),
  "DataArrayOutlined"
);
const DataObjectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 7v2c0 .55-.45 1-1 1H2v4h1c.55 0 1 .45 1 1v2c0 1.65 1.35 3 3 3h3v-2H7c-.55 0-1-.45-1-1v-2c0-1.3-.84-2.42-2-2.83v-.34C5.16 11.42 6 10.3 6 9V7c0-.55.45-1 1-1h3V4H7C5.35 4 4 5.35 4 7zm17 3c-.55 0-1-.45-1-1V7c0-1.65-1.35-3-3-3h-3v2h3c.55 0 1 .45 1 1v2c0 1.3.84 2.42 2 2.83v.34c-1.16.41-2 1.52-2 2.83v2c0 .55-.45 1-1 1h-3v2h3c1.65 0 3-1.35 3-3v-2c0-.55.45-1 1-1h1v-4h-1z" }),
  "DataObjectOutlined"
);
const DataSaverOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" }),
  "DataSaverOffOutlined"
);
const DataSaverOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 8v3H8v2h3v3h2v-3h3v-2h-3V8h-2zm2-5.95v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" }),
  "DataSaverOnOutlined"
);
const DataThresholdingIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-1.73L19 17.27V19zm0-3h-.85l-3 3h-1.62l3-3h-2.12l-3 3H9.8l3-3h-2.12l-3 3H5.84l3-3H6.72L5 17.72V5h14v11z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m10.67 11 2 2 5.08-5.09-1.41-1.41-3.67 3.67-2-2-4.42 4.42L7.66 14z" }, "1")],
  "DataThresholdingOutlined"
);
const DataUsageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" }),
  "DataUsageOutlined"
);
const DeblurIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "6", cy: "14", r: "1" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "6", cy: "18", r: "1" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "6", cy: "10", r: "1" }, "2"), /* @__PURE__ */ jsx("circle", { cx: "3", cy: "10", r: ".5" }, "3"), /* @__PURE__ */ jsx("circle", { cx: "6", cy: "6", r: "1" }, "4"), /* @__PURE__ */ jsx("circle", { cx: "3", cy: "14", r: ".5" }, "5"), /* @__PURE__ */ jsx("circle", { cx: "10", cy: "21", r: ".5" }, "6"), /* @__PURE__ */ jsx("circle", { cx: "10", cy: "3", r: ".5" }, "7"), /* @__PURE__ */ jsx("circle", { cx: "10", cy: "6", r: "1" }, "8"), /* @__PURE__ */ jsx("circle", { cx: "10", cy: "14", r: "1.5" }, "9"), /* @__PURE__ */ jsx("circle", { cx: "10", cy: "10", r: "1.5" }, "10"), /* @__PURE__ */ jsx("circle", { cx: "10", cy: "18", r: "1" }, "11"), /* @__PURE__ */ jsx("path", { d: "M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z" }, "12")],
  "DeblurOutlined"
);
const DeckIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M22 9 12 2 2 9h9v13h2V9h9zM12 4.44 15.66 7H8.34L12 4.44z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z" }, "1")],
  "DeckOutlined"
);
const DehazeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z" }),
  "DehazeOutlined"
);
const DeleteOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z" }),
  "DeleteOutlineOutlined"
);
const DeleteSweepIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zm5-6H6L5 5H2v2h12V5h-3z" }),
  "DeleteSweepOutlined"
);
const DeliveryDiningIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM4 14v-1c0-1.1.9-2 2-2h2v3H4zm3 3c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }, "1")],
  "DeliveryDiningOutlined"
);
const DensityLargeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 3h18v2H3zm0 16h18v2H3z" }),
  "DensityLargeOutlined"
);
const DensityMediumIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3z" }),
  "DensityMediumOutlined"
);
const DensitySmallIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 2h18v2H3zm0 18h18v2H3zm0-6h18v2H3zm0-6h18v2H3z" }),
  "DensitySmallOutlined"
);
const DepartureBoardIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "5.5", cy: "16.5", r: "1.5" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12.5", cy: "16.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("path", { d: "M16 1c-2.39 0-4.49 1.2-5.75 3.02C9.84 4.01 9.43 4 9 4c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V22c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22v-3.08c3.39-.49 6-3.39 6-6.92 0-3.87-3.13-7-7-7zM9 6h.29c-.09.32-.16.66-.21.99H3.34C3.89 6.46 5.31 6 9 6zM3 8.99h6.08c.16 1.11.57 2.13 1.18 3.01H3V8.99zM15 18c0 .37-.21.62-.34.73l-.29.27H3.63l-.29-.27C3.21 18.62 3 18.37 3 18v-4h9.41c.78.47 1.65.79 2.59.92V18zm1-5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm.5-9H15v5l3.62 2.16.75-1.23-2.87-1.68z" }, "2")],
  "DepartureBoardOutlined"
);
const DescriptionIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" }),
  "DescriptionOutlined"
);
const DeselectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 13h2v-2H3v2zm4 8h2v-2H7v2zm6-18h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zm8 4h2v-2h-2v2zm8-8h2v-2h-2v2zm0-4h2V7h-2v2zm-4-4h2V3h-2v2zM7.83 5 7 4.17V3h2v2H7.83zm12 12-.83-.83V15h2v2h-1.17zm1.36 4.19L2.81 2.81 1.39 4.22 4.17 7H3v2h2V7.83l2 2V17h7.17l2 2H15v2h2v-1.17l2.78 2.78 1.41-1.42zM9 15v-3.17L12.17 15H9zm6-2.83V9h-3.17l-2-2H17v7.17l-2-2z" }),
  "DeselectOutlined"
);
const DesignServicesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.97 7.27c.39-.39.39-1.02 0-1.41l-2.83-2.83a.9959.9959 0 0 0-1.41 0l-4.49 4.49-3.89-3.89c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l3.89 3.89L3 16.76V21h4.24l4.52-4.52 3.89 3.89c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-3.89-3.89 4.48-4.48zM5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.2 1.2-1.9 1.9-3.88-3.88zm11.23 7.44-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9-3.89-3.89 1.9-1.9 1.21 1.21zM6.41 19H5v-1.41l9.61-9.61 1.3 1.3.11.11L6.41 19zm9.61-12.44 1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41z" }),
  "DesignServicesOutlined"
);
const DesktopAccessDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1.41 1.69 0 3.1l1 .99V16c0 1.1.89 2 1.99 2H10v2H8v2h8v-2h-2v-2h.9l6 6 1.41-1.41-20.9-20.9zM2.99 16V6.09L12.9 16H2.99zM4.55 2l2 2H21v12h-2.45l2 2h.44c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4.55z" }),
  "DesktopAccessDisabledOutlined"
);
const DesktopMacIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z" }),
  "DesktopMacOutlined"
);
const DesktopWindowsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" }),
  "DesktopWindowsOutlined"
);
const DetailsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 3 2 21h20L12 3zm1 5.92L18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z" }),
  "DetailsOutlined"
);
const DeveloperBoardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6v-4zm6-6h4v3h-4V7zM6 7h5v5H6V7zm6 4h4v6h-4v-6z" }),
  "DeveloperBoardOutlined"
);
const DeveloperBoardOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.83 5H18v10.17L19.83 17H22v-2h-2v-2h2v-2h-2V9h2V7h-2V5c0-1.1-.9-2-2-2H5.83l2 2zM12 9.17V7h4v3h-3.17L12 9.17zM9.83 7H11v1.17L9.83 7zm4 4H16v2.17L13.83 11zM18 21c.06 0 .11 0 .16-.01l2.32 2.32 1.41-1.41L2.1 2.1.69 3.51l1.32 1.32C2 4.89 2 4.94 2 5v14c0 1.1.9 2 2 2h14zM4 19V6.83l2 2V12h3.17l1 1H6v4h5v-3.17l1 1V17h2.17l2 2H4z" }),
  "DeveloperBoardOffOutlined"
);
const DeveloperModeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17 6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z" }),
  "DeveloperModeOutlined"
);
const DeviceHubIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17 16-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z" }),
  "DeviceHubOutlined"
);
const DeviceThermostatIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1h-2z" }),
  "DeviceThermostatOutlined"
);
const DeviceUnknownIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM12 6.72c-1.96 0-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75s1.75.82 1.75 1.75c0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45 0-1.96-1.54-3.47-3.5-3.47zM11 16h2v2h-2v-2z" }),
  "DeviceUnknownOutlined"
);
const DevicesOtherIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22 0 .89.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z" }),
  "DevicesOtherOutlined"
);
const DialerSipIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 3h1v5h-1zm-1 2h-2V4h2V3h-3v3h2v1h-2v1h3zm3-2v5h1V6h2V3h-3zm2 2h-1V4h1v1zm0 10.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.7.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.27-.26.35-.65.24-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.46 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8zM19 18.97c-1.32-.09-2.59-.35-3.8-.75l1.2-1.2c.85.24 1.71.39 2.59.45v1.5z" }),
  "DialerSipOutlined"
);
const DialpadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }),
  "DialpadOutlined"
);
const DiamondIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5L2 9l10 12L22 9l-3-6zM9.62 8l1.5-3h1.76l1.5 3H9.62zM11 10v6.68L5.44 10H11zm2 0h5.56L13 16.68V10zm6.26-2h-2.65l-1.5-3h2.65l1.5 3zM6.24 5h2.65l-1.5 3H4.74l1.5-3z" }),
  "DiamondOutlined"
);
const DifferenceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14v2zM14.5 7V5h-2v2h-2v2h2v2h2V9h2V7h-2zm2 6h-6v2h6v-2zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7l-6-6zm4 16H8V3h6.17L19 7.83V17z" }),
  "DifferenceOutlined"
);
const DiningIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.75 6c-1.37 0-2.5 1.52-2.5 3.4 0 1.48.7 2.71 1.67 3.18l.08.04V19h1.5v-6.38l.08-.03c.97-.47 1.67-1.7 1.67-3.18 0-1.88-1.12-3.41-2.5-3.41M10.5 6c-.27 0-.5.22-.5.5V9h-.75V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V9H7.5V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3.8c0 .93.64 1.71 1.5 1.93V19h1.5v-6.77c.86-.22 1.5-1 1.5-1.93V6.5c0-.28-.22-.5-.5-.5zM20 4H4v16h16V4m0-2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16z" }),
  "DiningOutlined"
);
const DinnerDiningIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m2 19 2 2h16l2-2zm1-1h16.97c.29-3.26-2.28-6-5.48-6-2.35 0-4.35 1.48-5.14 3.55-.41-.23-.87-.38-1.35-.47V9h1.75C10.99 9 12 7.99 12 6.75h9v-1.5h-9C12 4.01 10.99 3 9.75 3H3v1.5h1v.75H3v1.5h1v.75H3V9h1v7.39c-.44.46-.78 1-1 1.61zm11.5-4c.99 0 1.91.4 2.58 1.14.24.26.44.55.58.86h-6.32c.58-1.21 1.81-2 3.16-2zM8 4.5h2v.75H8V4.5zm0 2.25h2v.75H8v-.75zM5.5 4.5h1v.75h-1V4.5zm0 2.25h1v.75h-1v-.75zM5.5 9h1v6.06c-.35.06-.68.17-1 .3V9z" }),
  "DinnerDiningOutlined"
);
const DirectionsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m22.43 10.59-9.01-9.01c-.75-.75-2.07-.76-2.83 0l-9 9c-.78.78-.78 2.04 0 2.82l9 9c.39.39.9.58 1.41.58.51 0 1.02-.19 1.41-.58l8.99-8.99c.79-.76.8-2.02.03-2.82zm-10.42 10.4-9-9 9-9 9 9-9 9zM8 11v4h2v-3h4v2.5l3.5-3.5L14 7.5V10H9c-.55 0-1 .45-1 1z" }),
  "DirectionsOutlined"
);
const DirectionsBikeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10 2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" }),
  "DirectionsBikeOutlined"
);
const DirectionsBoatIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 3v1h-2V3h2m-1 7.11 5.38 1.77 2.39.78-1.12 3.97c-.54-.3-.94-.71-1.14-.94L16 13.96l-1.51 1.72c-.34.4-1.28 1.32-2.49 1.32s-2.15-.92-2.49-1.32L8 13.96l-1.51 1.72c-.2.23-.6.63-1.14.93l-1.13-3.96 2.4-.79L12 10.11M15 1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1zM6 9.97V6h12v3.97L12 8 6 9.97zm10 9.71c-1.22.85-2.61 1.28-4 1.28s-2.78-.43-4-1.28C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 1.26.64 2.63.97 4 .97s2.74-.32 4-.97c1.26.65 2.62.99 4 .99h2v-2h-2c-1.39 0-2.78-.47-4-1.32z" }),
  "DirectionsBoatOutlined"
);
const DirectionsBoatFilledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m19.77 12.66-1.12 3.97c-.78-.43-1.07-.86-2.65-2.67-1.6 1.82-2.43 3.04-4 3.04-1.53 0-2.34-1.15-4-3.04-1.6 1.82-1.87 2.21-2.65 2.65l-1.13-3.96L12 10.11l7.77 2.55zM15 1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.63.19-.81.84-.66 1.28L3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.91-6.68c.11-.37.04-1.06-.66-1.28l-1.3-.42V6c0-1.1-.9-2-2-2h-3V1zM6 9.97V6h12v3.97L12 8 6 9.97zm10 9.71c-1.22.85-2.61 1.28-4 1.28s-2.78-.43-4-1.28C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 1.26.64 2.63.97 4 .97s2.74-.32 4-.97c1.26.65 2.62.99 4 .99h2v-2h-2c-1.39 0-2.78-.47-4-1.32z" }),
  "DirectionsBoatFilledOutlined"
);
const DirectionsBusIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4zm5.66 2.99H6.34C6.89 4.46 8.31 4 12 4s5.11.46 5.66.99zm.34 2V10H6V6.99h12zm-.34 9.74-.29.27H6.63l-.29-.27C6.21 16.62 6 16.37 6 16v-4h12v4c0 .37-.21.62-.34.73z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "14.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "14.5", r: "1.5" }, "2")],
  "DirectionsBusOutlined"
);
const DirectionsBusFilledIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2c-4 0-8 .5-8 4v9.5c0 .95.38 1.81 1 2.44V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2.06c.62-.63 1-1.49 1-2.44V6c0-3.5-3.58-4-8-4zm0 2c3.71 0 5.13.46 5.67 1H6.43c.6-.52 2.05-1 5.57-1zm6 11c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-3h12v3zm0-5H6V7h12v3z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "14.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "14.5", r: "1.5" }, "2")],
  "DirectionsBusFilledOutlined"
);
const DirectionsCarIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "14.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "16.5", cy: "14.5", r: "1.5" }, "2")],
  "DirectionsCarOutlined"
);
const DirectionsCarFilledIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-5h14v5z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "14.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "16.5", cy: "14.5", r: "1.5" }, "2")],
  "DirectionsCarFilledOutlined"
);
const DirectionsOffIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m21.71 11.29-9-9a.9959.9959 0 0 0-1.41 0L8.21 5.38l1.41 1.41L12 4.42 19.58 12l-2.38 2.38 1.41 1.41 3.09-3.09c.4-.37.4-1 .01-1.41z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M13 7.5v2.67l2.17 2.17L16.5 11zM1.39 4.22l3.99 3.99-3.09 3.09c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l3.09-3.09 3.99 3.99 1.41-1.41L2.81 2.81 1.39 4.22zm6.64 6.63c-.01.05-.04.1-.04.15v4h2v-2.18l4.38 4.38L12 19.58 4.42 12 6.8 9.62l1.23 1.23z" }, "1")],
  "DirectionsOffOutlined"
);
const DirectionsRailwayIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 1c-4.42 0-8 .5-8 4v10.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4zm0 2c6 0 6 1.2 6 2H6c0-.8 0-2 6-2zm6 4v3H6V7h12zm-1.5 10h-9c-.83 0-1.5-.67-1.5-1.5V12h12v3.5c0 .83-.67 1.5-1.5 1.5zM12 12.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }),
  "DirectionsRailwayOutlined"
);
const DirectionsRailwayFilledIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm0 2c3.71 0 5.13.46 5.67 1H6.43c.6-.52 2.05-1 5.57-1zm6 11.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V12h12v3.5zm0-5.5H6V7h12v3z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "14.5", r: "1.5" }, "1")],
  "DirectionsRailwayFilledOutlined"
);
const DirectionsRunIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9 1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" }),
  "DirectionsRunOutlined"
);
const DirectionsSubwayIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm5.66 3H6.43c.61-.52 2.06-1 5.57-1 3.71 0 5.12.46 5.66 1zM11 7v3H6V7h5zm2 0h5v3h-5V7zm3.5 10h-9c-.83 0-1.5-.67-1.5-1.5V12h12v3.5c0 .83-.67 1.5-1.5 1.5z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "14.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "14.5", r: "1.5" }, "2")],
  "DirectionsSubwayOutlined"
);
const DirectionsSubwayFilledIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm0 2c3.71 0 5.13.46 5.67 1H6.43c.6-.52 2.05-1 5.57-1zM6 7h5v3H6V7zm12 8.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V12h12v3.5zm0-5.5h-5V7h5v3z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "14.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "14.5", r: "1.5" }, "2")],
  "DirectionsSubwayFilledOutlined"
);
const DirectionsTransitIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm5.66 3H6.43c.61-.52 2.06-1 5.57-1 3.71 0 5.12.46 5.66 1zM11 7v3H6V7h5zm2 0h5v3h-5V7zm3.5 10h-9c-.83 0-1.5-.67-1.5-1.5V12h12v3.5c0 .83-.67 1.5-1.5 1.5z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "14.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "14.5", r: "1.5" }, "2")],
  "DirectionsTransitOutlined"
);
const DirectionsTransitFilledIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm0 2c3.71 0 5.13.46 5.67 1H6.43c.6-.52 2.05-1 5.57-1zM6 7h5v3H6V7zm12 8.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V12h12v3.5zm0-5.5h-5V7h5v3z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "14.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "14.5", r: "1.5" }, "2")],
  "DirectionsTransitFilledOutlined"
);
const DirectionsWalkIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.56-.89-1.68-1.25-2.65-.84L6 8.3V13h2V9.6l1.8-.7" }),
  "DirectionsWalkOutlined"
);
const DirtyLensIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-7.02c-.22-.84-.52-1.76-.13-2.33.81-1.12 2.67 1.77 3.81-.09.77-1.57-1.58-1.29-1.64-2.12-.05-.84 3.68.17 3.04-1.66-.61-1.73-2.42.48-2.76-.53-.58-1.74 4.7-1.68 2.85-4.01-1.76-2.22-2.47 2.85-4.41 2.33-1.34-.36-1.01-2.88-2.65-2.44-1.88.51 1.03 2.2 0 2.86-.96.63-1.72-.92-2.51-1.19-.2-.07-.69-.05-.91.19-.78.86.28 1.16.25 1.91-.02.75-1.59.49-1.51 1.49.12 1.6 2.18.45 2.4 1.24.55 1.98-1.89 2.15-.5 3.27 1.53.71 1.91-1.94 2.8-1.35.58.38.3 1.45.16 2.43H4V7h4.05l1.83-2h4.24l1.83 2H20v12z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M17.28 17.15c0 .48.39.86.86.86.48 0 .86-.38.86-.86s-.39-.86-.86-.86c-.48 0-.86.38-.86.86z" }, "1")],
  "DirtyLensOutlined"
);
const DisabledByDefaultIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 19H5V5h14v14zM3 3v18h18V3H3zm14 12.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" }),
  "DisabledByDefaultOutlined"
);
const DiscFullIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 7h2v5h-2zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm10-4h2v2h-2zm-10-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }),
  "DiscFullOutlined"
);
const DisplaySettingsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 3H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 14H4V5h16v12z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M6 8.25h8v1.5H6zm10.5 1.5H18v-1.5h-1.5V7H15v4h1.5zm-6.5 2.5h8v1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5z" }, "1")],
  "DisplaySettingsOutlined"
);
const DnsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z" }),
  "DnsOutlined"
);
const DoDisturbIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" }),
  "DoDisturbOutlined"
);
const DoDisturbAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8 1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z" }),
  "DoDisturbAltOutlined"
);
const DoDisturbOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4c4.41 0 8 3.59 8 8 0 1.41-.37 2.73-1.01 3.88l1.46 1.46C21.43 15.79 22 13.96 22 12c0-5.52-4.48-10-10-10-1.96 0-3.79.57-5.33 1.55l1.46 1.46C9.27 4.37 10.59 4 12 4zm5 7h-2.88l2 2H17zM2.41 2.13 1 3.54l2.78 2.78C2.66 7.93 2 9.89 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78L20.46 23l1.41-1.41L2.41 2.13zM12 20c-4.41 0-8-3.59-8-8 0-1.56.45-3 1.23-4.23L8.46 11H7v2h3.46l5.77 5.77C15 19.55 13.56 20 12 20z" }),
  "DoDisturbOffOutlined"
);
const DoDisturbOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" }),
  "DoDisturbOnOutlined"
);
const DoNotDisturbIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" }),
  "DoNotDisturbOutlined"
);
const DoNotDisturbAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8 1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z" }),
  "DoNotDisturbAltOutlined"
);
const DoNotDisturbOffIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.94 5.12C9.14 4.41 10.52 4 12 4c4.41 0 8 3.59 8 8 0 1.48-.41 2.86-1.12 4.06l1.46 1.46C21.39 15.93 22 14.04 22 12c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66l1.45 1.46zM2.81 2.81 1.39 4.22l2.27 2.27C2.61 8.07 2 9.96 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.41L2.81 2.81zM12 20c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06L8.17 11H7v2h3.17l5.88 5.88C14.86 19.59 13.48 20 12 20z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m13.83 11 2 2H17v-2z" }, "1")],
  "DoNotDisturbOffOutlined"
);
const DoNotDisturbOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }),
  "DoNotDisturbOnOutlined"
);
const DoNotDisturbOnTotalSilenceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.6-6-6-6zm3 7H9v-2h6v2z" }),
  "DoNotDisturbOnTotalSilenceOutlined"
);
const DoNotStepIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18.51 15.68-1.41-1.41 4.48-4.48L23 11.2l-4.49 4.48zm-3.53-3.53 3.07-3.07-4.25-4.26-3.08 3.07L9.3 6.47 13.8 2l7.08 7.08-4.48 4.48-1.42-1.41zm6.2 9.05-1.41 1.41-5.94-5.94L10.5 20H1v-2.63c0-.84.52-1.57 1.3-1.88.58-.23 1.28-.56 1.97-1.02l1.38 1.38c.09.1.22.15.35.15s.26-.05.36-.15c.2-.2.2-.51 0-.71l-1.28-1.28c.27-.24.53-.51.77-.8l1.27 1.27c.09.1.23.15.35.15s.25-.05.35-.15c.2-.2.2-.51 0-.71l-1.4-1.4c.19-.34.34-.72.45-1.12l1.71 1.72c.09.1.23.15.35.15s.25-.05.35-.15c.19-.2.19-.5.01-.7l-7.9-7.9 1.42-1.41L21.18 21.2zm-8.76-5.94-1.67-1.68-3.33 3.32c-.78.78-2.05.78-2.83-.01l-.19-.17-.47.24c-.29.14-.59.27-.89.39l-.01.65h6.64l2.75-2.74z" }),
  "DoNotStepOutlined"
);
const DoNotTouchIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2.81 2.81 1.39 4.22 7 9.83v4.3l-2.6-1.48c-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26L2 13.88l6.8 7.18c.57.6 1.35.94 2.18.94H17c.62 0 1.18-.19 1.66-.52l1.12 1.12 1.41-1.41L2.81 2.81zM17 20h-6c-.39 0-.64-.23-.75-.36L6.87 16H9v-4.17l8.14 8.14c-.05.01-.09.03-.14.03zm-3.17-9H14V3.25c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25V11h1V5.25c0-.69.56-1.25 1.25-1.25S20 4.56 20 5.25v11.92l-2-2V13h-2.17l-2-2zm-.83-.83V2.25C13 1.56 12.44 1 11.75 1s-1.25.56-1.25 1.25v5.42l2.5 2.5zm-3.5-3.5V4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67z" }),
  "DoNotTouchOutlined"
);
const DockIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z" }),
  "DockOutlined"
);
const DocumentScannerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 3H4v3H2V1h5v2zm15 3V1h-5v2h3v3h2zM7 21H4v-3H2v5h5v-2zm13-3v3h-3v2h5v-5h-2zM17 6H7v12h10V6zm2 12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12zM15 8H9v2h6V8zm0 3H9v2h6v-2zm0 3H9v2h6v-2z" }),
  "DocumentScannerOutlined"
);
const DomainIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" }),
  "DomainOutlined"
);
const DomainAddIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 7V3H2v18h14v-2h-4v-2h2v-2h-2v-2h2v-2h-2V9h8v6h2V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm14 12v2h-2v2h-2v-2h-2v-2h2v-2h2v2h2zm-6-8h-2v2h2v-2zm0 4h-2v2h2v-2z" }),
  "DomainAddOutlined"
);
const DomainDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1.41 1.69 0 3.1l2 2V21h15.9l3 3 1.41-1.41-20.9-20.9zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm-2-4V9h2v2H4zm6 8H8v-2h2v2zm-2-4v-2h2v2H8zm4 4v-2h1.9l2 2H12zM8 5h2v2h-.45L12 9.45V9h8v8.45l2 2V7H12V3H5.55L8 5.45zm8 6h2v2h-2z" }),
  "DomainDisabledOutlined"
);
const DomainVerificationIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m16.6 10.88-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z" }, "1")],
  "DomainVerificationOutlined"
);
const DoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" }),
  "DoneOutlined"
);
const DoneOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m19.77 4.93 1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z" }),
  "DoneOutlineOutlined"
);
const DonutLargeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 5.08c3.06.44 5.48 2.86 5.92 5.92h3.03c-.47-4.72-4.23-8.48-8.95-8.95v3.03zM18.92 13c-.44 3.06-2.86 5.48-5.92 5.92v3.03c4.72-.47 8.48-4.23 8.95-8.95h-3.03zM11 18.92c-3.39-.49-6-3.4-6-6.92s2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95 0 5.19 3.95 9.45 9 9.95v-3.03z" }),
  "DonutLargeOutlined"
);
const DonutSmallIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.82 11h7.13c-.47-4.72-4.23-8.48-8.95-8.95v7.13c.85.31 1.51.97 1.82 1.82zM15 4.58C17 5.4 18.6 7 19.42 9h-3.43c-.28-.37-.62-.71-.99-.99V4.58zM2 12c0 5.19 3.95 9.45 9 9.95v-7.13C9.84 14.4 9 13.3 9 12c0-1.3.84-2.4 2-2.82V2.05c-5.05.5-9 4.76-9 9.95zm7-7.42v3.44c-1.23.92-2 2.39-2 3.98 0 1.59.77 3.06 2 3.99v3.44C6.04 18.24 4 15.35 4 12c0-3.35 2.04-6.24 5-7.42zm4 10.24v7.13c4.72-.47 8.48-4.23 8.95-8.95h-7.13c-.31.85-.97 1.51-1.82 1.82zm2 1.17c.37-.28.71-.61.99-.99h3.43C18.6 17 17 18.6 15 19.42v-3.43z" }),
  "DonutSmallOutlined"
);
const DoorBackIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M9 11h2v2H9z" }, "1")],
  "DoorBackOutlined"
);
const DoorFrontIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14zm-4-8h2v2h-2v-2z" }),
  "DoorFrontOutlined"
);
const DoorSlidingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 13H8v-2h2v2zm6-2h-2v2h2v-2zm5 8v2H3v-2h1V5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v14h1zM11 5H6v14h5V5zm7 0h-5v14h5V5z" }),
  "DoorSlidingOutlined"
);
const DoorbellIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 16.5h2c0 .55-.45 1-1 1s-1-.45-1-1zm4-1.5v-2.34c0-1.54-.81-2.82-2.25-3.16v-.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.25C9.82 9.84 9 11.12 9 12.66V15H8v1h8v-1h-1zm-3-9.5L6 10v9h12v-9l-6-4.5M12 3l8 6v12H4V9l8-6z" }),
  "DoorbellOutlined"
);
const DoubleArrowIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M15.5 5H11l5 7-5 7h4.5l5-7z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M8.5 5H4l5 7-5 7h4.5l5-7z" }, "1")],
  "DoubleArrowOutlined"
);
const DownhillSkiingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.5 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2.72 16.4.76.27c.62.21 1.27.33 1.96.33.84 0 1.65-.18 2.38-.5L22 22.13c-1.05.55-2.24.87-3.5.87-.86 0-1.68-.14-2.45-.41L2 17.47l.5-1.41 6.9 2.51 1.72-4.44-3.57-3.73c-.89-.94-.67-2.47.45-3.12l3.48-2.01c1.1-.64 2.52-.1 2.91 1.11l.33 1.08c.44 1.42 1.48 2.57 2.83 3.14l.52-1.6 1.43.46-1.12 3.45c-2.45-.4-4.48-2.07-5.38-4.32l-2.53 1.45 3.03 3.46-2.22 5.76 3.09 1.12 2.1-6.44c.46.18.94.31 1.44.41l-2.13 6.55z" }),
  "DownhillSkiingOutlined"
);
const DownloadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z" }),
  "DownloadOutlined"
);
const DownloadDoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z" }),
  "DownloadDoneOutlined"
);
const DownloadForOfflineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2.59-11.41L16 10l-4 4-4-4 1.41-1.41L11 10.17V6h2v4.17l1.59-1.58zM17 17H7v-2h10v2z" }),
  "DownloadForOfflineOutlined"
);
const DownloadingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.32 4.26C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zm-1.62 5.9 1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm2.59-9.34L13 13.17V7h-2v6.17l-2.59-2.59L7 12l5 5 5-5-1.41-1.41zM11 19.93v2.02c-5.05-.5-9-4.76-9-9.95s3.95-9.45 9-9.95v2.02C7.05 4.56 4 7.92 4 12s3.05 7.44 7 7.93z" }),
  "DownloadingOutlined"
);
const DraftsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zm-2 0v.01L12 13 4 8l8-4.68L19.99 8zM4 18v-7.66l8 5.02 7.99-4.99L20 18H4z" }),
  "DraftsOutlined"
);
const DragHandleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 9H4v2h16V9zM4 15h16v-2H4v2z" }),
  "DragHandleOutlined"
);
const DriveEtaIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 6h10.29l1.04 3H5.81l1.04-3zM19 16H5v-4.66l.12-.34h13.77l.11.34V16z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "13.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "16.5", cy: "13.5", r: "1.5" }, "2")],
  "DriveEtaOutlined"
);
const DryIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.75 16c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h6.75c.69 0 1.25-.56 1.25-1.25 0-.67-.53-1.2-1.18-1.24L8.87 10l1.48-2.6c.09-.17.14-.34.14-.54 0-.26-.09-.5-.26-.7L9.12 5l-7.18 6.8c-.6.56-.94 1.35-.94 2.17V20c0 1.66 1.34 3 3 3h13.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h7.75c.69 0 1.25-.56 1.25-1.25S20.44 17 19.75 17H12v-1h8.75zM10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3v9zm5.65-16.14-.07-.07c-.57-.62-.82-1.41-.67-2.2L15 2h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm4 0-.07-.07c-.57-.62-.82-1.41-.67-2.2L19 2h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71z" }),
  "DryOutlined"
);
const DryCleaningIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.56 11.36 13 8.44V7c0-.55-.45-1-1-1s-1-.45-1-1 .45-1 1-1 1 .45 1 1h2c0-1.84-1.66-3.3-3.56-2.95-1.18.22-2.15 1.17-2.38 2.35-.3 1.56.6 2.94 1.94 3.42v.63l-6.56 2.92c-.88.38-1.44 1.25-1.44 2.2v.01C3 14.92 4.08 16 5.42 16H7v6h10v-6h1.58c1.34 0 2.42-1.08 2.42-2.42v-.01c0-.95-.56-1.82-1.44-2.21zM15 20H9v-5h6v5zm3.58-6H17v-1H7v1H5.42c-.46 0-.58-.65-.17-.81l6.75-3 6.75 3c.42.19.28.81-.17.81z" }),
  "DryCleaningOutlined"
);
const DuoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2h-8C6.38 2 2 6.66 2 12.28 2 17.5 6.49 22 11.72 22 17.39 22 22 17.62 22 12V4c0-1.1-.9-2-2-2zm-3 13-3-2v2H7V9h7v2l3-2v6z" }),
  "DuoOutlined"
);
const DvrIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z" }),
  "DvrOutlined"
);
const DynamicFeedIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M8 8H6v7c0 1.1.9 2 2 2h9v-2H8V8z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8h-8V7h8v4zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4v-7z" }, "1")],
  "DynamicFeedOutlined"
);
const DynamicFormIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 11H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h9v7zM4 9h7V6H4v3zm11 11H4c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h11v7zM4 18h9v-3H4v3zm18-9h-2l2-5h-7v7h2v9l5-11zM4.75 17.25h1.5v-1.5h-1.5v1.5zm0-9h1.5v-1.5h-1.5v1.5z" }),
  "DynamicFormOutlined"
);
const EMobiledataIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9h6z" }),
  "EMobiledataOutlined"
);
const EarbudsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 3c-2.76 0-5 2.24-5 5v8c0 1.66-1.34 3-3 3s-3-1.34-3-3V9h.83C7.44 9 8.89 7.82 9 6.21 9.12 4.52 7.84 3.11 6.2 3 4.44 2.89 3 4.42 3 6.19V16c0 2.76 2.24 5 5 5s5-2.24 5-5V8c0-1.66 1.34-3 3-3s3 1.34 3 3v7h-.83c-1.61 0-3.06 1.18-3.17 2.79-.12 1.69 1.16 3.1 2.8 3.21 1.76.12 3.2-1.42 3.2-3.18V8c0-2.76-2.24-5-5-5zM5 6c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1H5V6zm14 12c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1h1v1z" }),
  "EarbudsOutlined"
);
const EarbudsBatteryIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 7h-1V6h-2v1h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 9h-2V9h2v7zm-6-6.62C14 7.51 12.49 6 10.62 6S7.25 7.51 7.25 9.38v5.25c0 1.04-.84 1.88-1.88 1.88s-1.87-.85-1.87-1.89v-4.7c.16.05.33.08.5.08 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2v6.62C2 16.49 3.51 18 5.38 18s3.38-1.51 3.38-3.38V9.38c0-1.04.84-1.88 1.88-1.88s1.88.84 1.88 1.88v4.7c-.18-.05-.35-.08-.52-.08-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V9.38z" }),
  "EarbudsBatteryOutlined"
);
const EastIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z" }),
  "EastOutlined"
);
const EdgesensorHighIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 7h2v7H3V7zm-3 3h2v7H0v-7zm22-3h2v7h-2V7zm-3 3h2v7h-2v-7zm-3-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99zM16 20H8v-1h8v1zm0-3H8V7h8v10zM8 5V4h8v1H8z" }),
  "EdgesensorHighOutlined"
);
const EdgesensorLowIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 7h2v7H2V7zm18 3h2v7h-2v-7zm-4-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99zM16 20H8v-1h8v1zm0-3H8V7h8v10zM8 5V4h8v1H8z" }),
  "EdgesensorLowOutlined"
);
const EditAttributesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.63 7H6.37C3.96 7 2 9.24 2 12s1.96 5 4.37 5h11.26c2.41 0 4.37-2.24 4.37-5s-1.96-5-4.37-5zm0 8H6.37C5.09 15 4 13.63 4 12s1.09-3 2.37-3h11.26C18.91 9 20 10.37 20 12s-1.09 3-2.37 3zM7.24 13.06l-1.87-1.87-.7.7 2.57 2.57 4.22-4.22-.7-.7z" }),
  "EditAttributesOutlined"
);
const EditLocationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.17 4.91 17.1 3.84l-5.55 5.55v1.08h1.08l5.54-5.56zM16 2.74l1.29-1.29a1.49 1.49 0 0 1 2.12 0l1.15 1.15c.59.59.59 1.54 0 2.12l-.68.68-.02.02-.58.58-6 6H10V8.74l6-6zm-2.28-.55-.55.55-1.27 1.27c-3.3.05-5.9 2.6-5.9 6.2 0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.79 6-9.14v-.1l1.8-1.8c.13.6.2 1.24.2 1.9 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8 0-4.98 3.8-8.2 8-8.2.58 0 1.16.06 1.72.18z" }),
  "EditLocationOutlined"
);
const EditLocationAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 11h2.12l6.16-6.16-2.12-2.12L11 8.88V11zm9.71-9L20 1.29a.9959.9959 0 0 0-1.41 0l-.72.72 2.12 2.12.72-.72c.39-.39.39-1.02 0-1.41zM17.9 9.05c.06.36.1.74.1 1.15 0 1.71-1.08 4.64-6 9.14-4.92-4.49-6-7.43-6-9.14C6 6.17 9.09 4 12 4c.32 0 .65.03.97.08l1.65-1.65C13.78 2.16 12.9 2 12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8 0-1.01-.16-1.94-.45-2.8L17.9 9.05z" }),
  "EditLocationAltOutlined"
);
const EditNotificationsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17.58 6.25 1.77 1.77L14.37 13H12.6v-1.77l4.98-4.98zm3.27-.44-1.06-1.06c-.2-.2-.51-.2-.71 0l-.85.85L20 7.37l.85-.85c.2-.2.2-.52 0-.71zM18 12.2V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.82.21 1.57.59 2.21 1.09l-1.43 1.43C13.64 6.26 12.85 6 12 6c-2.21 0-4 1.79-4 4v7h8v-2.8l2-2zM10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2z" }),
  "EditNotificationsOutlined"
);
const EditOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14.06 9.02.92.92-1.11 1.11 1.41 1.41 2.52-2.52-3.75-3.75-2.52 2.52 1.41 1.41 1.12-1.1zm6.65-1.98c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM2.81 2.81 1.39 4.22l7.32 7.32L3 17.25V21h3.75l5.71-5.71 7.32 7.32 1.41-1.41L2.81 2.81zM5.92 19H5v-.92l5.13-5.13.92.92L5.92 19z" }),
  "EditOffOutlined"
);
const EditRoadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 4h-2v7.9l2-2zM4 4h2v16H4zm6 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2zm12.56-3.41-1.15-1.15c-.59-.59-1.54-.59-2.12 0L14 16.73V20h3.27l5.29-5.29c.59-.59.59-1.54 0-2.12zm-5.98 5.86h-1.03v-1.03L19 13.97 20.03 15l-3.45 3.45z" }),
  "EditRoadOutlined"
);
const EggIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11zm0 16c-2.76 0-5-2.24-5-5 0-4.09 3.07-9 5-9s5 4.91 5 9c0 2.76-2.24 5-5 5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M13 16c-.58 0-3-.08-3-3 0-.55-.45-1-1-1s-1 .45-1 1c0 3 1.99 5 5 5 .55 0 1-.45 1-1s-.45-1-1-1z" }, "1")],
  "EggOutlined"
);
const EggAltIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 9c-2-2-3.01-7-9.03-7C4.95 2 1.94 6 2 11.52 2.06 17.04 6.96 19 9.97 19c2.01 0 2.01 3 6.02 3C19 22 22 19 22 15.02 22 12 21.01 11 19 9zm-3.01 11c-1.49 0-1.96-.5-2.68-1.26-.65-.69-1.65-1.74-3.34-1.74-1.64 0-5.92-.99-5.97-5.5-.03-2.51.68-4.62 1.99-5.95C7.01 4.52 8.35 4 9.97 4c3.34 0 4.51 1.86 5.86 4.02.55.88 1.07 1.71 1.76 2.39 1.9 1.89 2.41 2.4 2.41 4.61 0 2.85-2.12 4.98-4.01 4.98z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3.5" }, "1")],
  "EggAltOutlined"
);
const EightKIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 15H10c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H7.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-5h1.5v1.5H8V10zm0 2.5h1.5V14H8v-1.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M14.5 12.75 16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z" }, "2")],
  "EightKOutlined"
);
const EightKPlusIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7 15h2c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-5h1v1.5h-1V10zm0 2.5h1V14h-1v-1.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M12.5 12.75 14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z" }, "2")],
  "EightKPlusOutlined"
);
const EightMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M11 11.5h2.5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H11c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-5H13V8h-1.5V6.5zm0 2.5H13v1.5h-1.5V9z" }, "2")],
  "EightMpOutlined"
);
const EighteenMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M8.5 11.5H10v-6H7V7h1.5zm4.5 0h2.5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-5H15V8h-1.5V6.5zm0 2.5H15v1.5h-1.5V9z" }, "2")],
  "EighteenMpOutlined"
);
const EightteenMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M8.5 11.5H10v-6H7V7h1.5zm4.5 0h2.5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-5H15V8h-1.5V6.5zm0 2.5H15v1.5h-1.5V9z" }, "2")],
  "EightteenMpOutlined"
);
const EjectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 17h14v2H5zm7-12L5.33 15h13.34L12 5zm0 3.6 2.93 4.4H9.07L12 8.6z" }),
  "EjectOutlined"
);
const ElderlyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6.5 7V23h-1V12.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1h-1v-.69c-1.46-.38-2.7-1.29-3.51-2.52-.31.87-.49 1.78-.49 2.71 0 .23.02.46.03.69L15 16.5V23h-2v-5l-1.78-2.54L11 19l-3 4-1.6-1.2L9 18.33V13c0-1.15.18-2.29.5-3.39l-1.5.85V14H6V9.3l5.4-3.07v.01c.59-.31 1.32-.33 1.94.03.36.21.63.51.8.85l.79 1.67C15.58 10.1 16.94 11 18.5 11c.83 0 1.5.67 1.5 1.5z" }),
  "ElderlyOutlined"
);
const ElderlyWomanIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.5 11c-1.56 0-2.92-.9-3.58-2.21l-.79-1.67C14.12 7.1 13.63 6 12.34 6 8.72 6 6 16.69 6 19h2.5l-2.1 2.8L8 23l3-4h2v4h2v-4.03L13 13l.49-2.71c.81 1.23 2.05 2.14 3.51 2.52v.69h1v-1c0-.28.22-.5.5-.5s.5.22.5.5V23h1V12.5c0-.83-.67-1.5-1.5-1.5zm-6.9-8.09c-.06.19-.1.38-.1.59 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.21 0-.4.04-.59.1-.15-.35-.5-.6-.91-.6-.55 0-1 .45-1 1 0 .41.25.76.6.91z" }),
  "ElderlyWomanOutlined"
);
const ElectricBikeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 7h-.82l-1.7-4.68C16.19 1.53 15.44 1 14.6 1H12v2h2.6l1.46 4h-4.81l-.36-1H12V4H7v2h1.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 6.87 0 9.2 0 12c0 2.8 2.2 5 5 5 2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99 2.8.13 5.25-2.19 5.25-5C24 9.2 21.8 7 19 7zM7.82 13c-.4 1.17-1.49 2-2.82 2-1.68 0-3-1.32-3-3s1.32-3 3-3c1.33 0 2.42.83 2.82 2H5v2h2.82zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2zm4.9 4c-1.68 0-3-1.32-3-3 0-.93.41-1.73 1.05-2.28l.96 2.64 1.88-.68-.97-2.67c.02 0 .05-.01.08-.01 1.68 0 3 1.32 3 3s-1.32 3-3 3zm-8 5H7l6 3v-2h4l-6-3z" }),
  "ElectricBikeOutlined"
);
const ElectricCarIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11c-.66 0-1.21.42-1.42 1.01L3 8v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8l-2.08-5.99zM6.85 3h10.29l1.08 3.11H5.77L6.85 3zM19 13H5V8h14v5z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "10.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "16.5", cy: "10.5", r: "1.5" }, "2"), /* @__PURE__ */ jsx("path", { d: "M7 20h4v-2l6 3h-4v2z" }, "3")],
  "ElectricCarOutlined"
);
const ElectricMopedIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 5c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 12H10V7H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 8.35V5zM4 12v-1c0-1.1.9-2 2-2h2v3H4zm3 3c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M5 4h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7 20h4v-2l6 3h-4v2z" }, "1")],
  "ElectricMopedOutlined"
);
const ElectricRickshawIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 11.18V9.72c0-.47-.16-.92-.46-1.28L16.6 3.72c-.38-.46-.94-.72-1.54-.72H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h.18C3.6 16.16 4.7 17 6 17s2.4-.84 2.82-2h8.37c.41 1.16 1.51 2 2.82 2 1.66 0 3-1.34 3-3-.01-1.3-.85-2.4-2.01-2.82zM6 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-3.83c-.31-.11-.65-.17-1-.17-1.3 0-2.42.84-2.83 2H3v-3h4v1.17zM7 8H3V5h4v3zm7 5H9v-3h3V8H9V5h5v8zm2-6.88L18.4 9H16V6.12zM17.17 13H16v-2h3v.17c-.85.3-1.53.98-1.83 1.83zM20 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7 20h4v-2l6 3h-4v2z" }),
  "ElectricRickshawOutlined"
);
const ElectricScooterIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44C17.63 1.65 16.82 1 15.89 1H12v2h3.89l1.4 6.25h-.01c-2.16.65-3.81 2.48-4.19 4.75H7.82c-.48-1.34-1.86-2.24-3.42-1.94-1.18.23-2.13 1.2-2.35 2.38C1.7 16.34 3.16 18 5 18c1.3 0 2.4-.84 2.82-2zM5 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-8 4H7l6 3v-2h4l-6-3z" }, "1")],
  "ElectricScooterOutlined"
);
const ElectricalServicesIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M21 14c0-.55-.45-1-1-1h-2v2h2c.55 0 1-.45 1-1zm-1 3h-2v2h2c.55 0 1-.45 1-1s-.45-1-1-1zm-8-3h-2v4h2c0 1.1.9 2 2 2h3v-8h-3c-1.1 0-2 .9-2 2z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M5 13c0-1.1.9-2 2-2h1.5c1.93 0 3.5-1.57 3.5-3.5S10.43 4 8.5 4H5c-.55 0-1 .45-1 1s.45 1 1 1h3.5c.83 0 1.5.67 1.5 1.5S9.33 9 8.5 9H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2H7c-1.1 0-2-.9-2-2z" }, "1")],
  "ElectricalServicesOutlined"
);
const ElevatorIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4h3zM8.5 8.5c.69 0 1.25-.56 1.25-1.25S9.19 6 8.5 6s-1.25.56-1.25 1.25S7.81 8.5 8.5 8.5zM18 11l-2.5-4-2.5 4h5zm-5 2 2.5 4 2.5-4h-5z" }),
  "ElevatorOutlined"
);
const ElevenMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M9.5 11.5H11v-6H8V7h1.5zm5 0H16v-6h-3V7h1.5z" }, "2")],
  "ElevenMpOutlined"
);
const EmailIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" }),
  "EmailOutlined"
);
const EmojiEmotionsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "9.5", r: "1.5" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "9.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("path", { d: "M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z" }, "2"), /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, "3")],
  "EmojiEmotionsOutlined"
);
const EmojiEventsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm7 6c-1.65 0-3-1.35-3-3V5h6v6c0 1.65-1.35 3-3 3zm7-6c0 1.3-.84 2.4-2 2.82V7h2v1z" }),
  "EmojiEventsOutlined"
);
const EmojiFlagsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14 9-1-2H7V5.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V21h2v-4h5l1 2h7V9h-6zm4 8h-4l-1-2H7V9h5l1 2h5v6z" }),
  "EmojiFlagsOutlined"
);
const EmojiFoodBeverageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 19h18v2H2zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h3v1.4L7.19 7.85c-.12.09-.19.24-.19.39v4.26c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5V8.24c0-.15-.07-.3-.19-.39L10 6.4V5h6v8zM9.5 7.28l1.5 1.2V12H8V8.48l1.5-1.2zM20 8h-2V5h2v3z" }),
  "EmojiFoodBeverageOutlined"
);
const EmojiNatureIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.94 4.88c-.18-.53-.69-.88-1.26-.88H19.6l-.31-.97C19.15 2.43 18.61 2 18 2s-1.15.43-1.29 1.04L16.4 4h-1.07c-.57 0-1.08.35-1.26.88-.19.56.04 1.17.56 1.48l.87.52-.4 1.24c-.23.58-.04 1.25.45 1.62.23.17.51.26.78.26.31 0 .61-.11.86-.32l.81-.7.81.7c.25.21.55.32.86.32.27 0 .55-.09.78-.26.5-.37.68-1.04.45-1.62l-.39-1.24.87-.52c.51-.31.74-.92.56-1.48zM18 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-4.51 3.51c-.43-.43-.94-.73-1.49-.93V8h-1v1.38c-.11-.01-.23-.03-.34-.03-1.02 0-2.05.39-2.83 1.17l-.5.5-1.33-.5c-1.56-.55-3.28.27-3.83 1.82-.27.75-.23 1.57.12 2.29.23.48.58.87 1 1.16-.38 1.35-.06 2.85 1 3.91.78.78 1.8 1.17 2.83 1.17.37 0 .73-.07 1.09-.17.29.42.68.77 1.16 1 .41.2.84.3 1.28.3.34 0 .68-.06 1.01-.17 1.56-.55 2.38-2.27 1.82-3.85l-.49-1.3.5-.5c.87-.87 1.24-2.04 1.14-3.17H16v-1h-1.59c-.19-.55-.49-1.06-.92-1.5zm-5.91 8.31c-.15.04-.3.06-.46.06-.53 0-1.04-.21-1.41-.59-.38-.38-.59-.88-.59-1.41 0-.16.03-.32.06-.47.14.01.28.03.42.03.85 0 1.68-.2 2.44-.48-.32.89-.54 1.87-.46 2.86zm-2.91-4.53c-.25-.09-.45-.27-.57-.51s-.13-.51-.04-.76c.19-.52.76-.79 1.26-.61l3.16 1.19c-1.15.6-2.63 1.11-3.81.69zm6.32 5.65c-.25.09-.52.08-.76-.04-.24-.11-.42-.32-.51-.57-.42-1.18.09-2.65.7-3.8l1.18 3.13c.18.52-.09 1.1-.61 1.28zm1.21-5.34-.61-1.61c0-.01-.01-.02-.02-.03l-.06-.12c-.02-.04-.04-.07-.07-.11l-.09-.09-.09-.09c-.03-.03-.07-.05-.11-.07-.04-.02-.07-.05-.12-.06-.01 0-.02-.01-.03-.02l-1.6-.6c.36-.29.79-.46 1.26-.46.53 0 1.04.21 1.41.59.73.73.77 1.88.13 2.67z" }),
  "EmojiNatureOutlined"
);
const EmojiObjectsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28c.35.6.98 1 1.72 1s1.38-.4 1.72-1H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46C18.09 13.95 19 12.08 19 10c0-3.87-3.13-7-7-7zm2 14h-4v-1h4v1zm-4 2v-1h4v1h-4zm5.31-5.26c-.09.08-.16.18-.24.26H8.92c-.08-.09-.15-.19-.24-.27-1.32-1.18-1.91-2.94-1.59-4.7.36-1.94 1.96-3.55 3.89-3.93.34-.07.68-.1 1.02-.1 2.76 0 5 2.24 5 5 0 1.43-.61 2.79-1.69 3.74z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M11.5 11h1v3h-1z" }, "1"), /* @__PURE__ */ jsx("path", { d: "m9.6724 9.5808.7071-.7071 2.1214 2.1213-.7071.7071z" }, "2"), /* @__PURE__ */ jsx("path", { d: "m12.2081 11.7124-.707-.7071 2.1212-2.1214.7071.7072z" }, "3")],
  "EmojiObjectsOutlined"
);
const EmojiPeopleIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "12", cy: "4", r: "2" }, "0"), /* @__PURE__ */ jsx("path", { d: "M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54C8.24 6.99 6 4.75 6 2H4c0 3.16 2.11 5.84 5 6.71V22h2v-6h2v6h2V10.05L18.95 14l1.41-1.41-4.47-4.48z" }, "1")],
  "EmojiPeopleOutlined"
);
const EmojiSymbolsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M3 2h8v2H3zm3 9h2V7h3V5H3v2h3zm6.4036 9.1819 7.7782-7.7782 1.4142 1.4142-7.7782 7.7782z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "14.5", cy: "14.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "19.5", cy: "19.5", r: "1.5" }, "2"), /* @__PURE__ */ jsx("path", { d: "M15.5 11c1.38 0 2.5-1.12 2.5-2.5V4h3V2h-4v4.51c-.42-.32-.93-.51-1.5-.51C14.12 6 13 7.12 13 8.5s1.12 2.5 2.5 2.5zm-5.76 4.96-1.41 1.41-.71-.71.35-.35c.98-.98.98-2.56 0-3.54-.49-.49-1.13-.73-1.77-.73-.64 0-1.28.24-1.77.73-.98.98-.98 2.56 0 3.54l.35.35-1.06 1.06c-.98.98-.98 2.56 0 3.54.5.5 1.14.74 1.78.74s1.28-.24 1.77-.73l1.06-1.06 1.41 1.41 1.41-1.41-1.41-1.41 1.41-1.41-1.41-1.43zM5.85 14.2c.12-.12.26-.15.35-.15s.23.03.35.15c.19.2.19.51 0 .71l-.35.35-.35-.36c-.19-.19-.19-.51 0-.7zm0 5.65c-.12.12-.26.15-.35.15s-.23-.03-.35-.15c-.19-.19-.19-.51 0-.71l1.06-1.06.71.71-1.07 1.06z" }, "3")],
  "EmojiSymbolsOutlined"
);
const EmojiTransportationIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20.57 10.66c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66L10 14.77l.01 5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V19h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14l-1.43-4.11zm-8.16.34h7.19l1.03 3h-9.25l1.03-3zM12 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M14 9h1V3H7v5H2v13h1V9h5V4h6z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M5 11h2v2H5zm5-6h2v2h-2zM5 15h2v2H5zm0 4h2v2H5z" }, "2")],
  "EmojiTransportationOutlined"
);
const EngineeringIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H3zM4.74 9H5c0 2.21 1.79 4 4 4s4-1.79 4-4h.26c.27 0 .49-.22.49-.49v-.02c0-.27-.22-.49-.49-.49H13c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14C9.68 4.06 9.35 4 9 4s-.68.06-1 .14V5.5c0 .28-.22.5-.5.5S7 5.78 7 5.5v-.95C5.81 5.25 5 6.52 5 8h-.26c-.27 0-.49.22-.49.49v.03c0 .26.22.48.49.48zM11 9c0 1.1-.9 2-2 2s-2-.9-2-2h4zm10.98-2.77.93-.83-.75-1.3-1.19.39c-.14-.11-.3-.2-.47-.27L20.25 3h-1.5l-.25 1.22c-.17.07-.33.16-.48.27l-1.18-.39-.75 1.3.93.83c-.02.17-.02.35 0 .52l-.93.85.75 1.3 1.2-.38c.13.1.28.18.43.25l.28 1.23h1.5l.27-1.22c.16-.07.3-.15.44-.25l1.19.38.75-1.3-.93-.85c.03-.19.02-.36.01-.53zM19.5 7.75c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm-.1 3.04-.85.28c-.1-.08-.21-.14-.33-.19l-.18-.88h-1.07l-.18.87c-.12.05-.24.12-.34.19l-.84-.28-.54.93.66.59c-.01.13-.01.25 0 .37l-.66.61.54.93.86-.27c.1.07.2.13.31.18l.18.88h1.07l.19-.87c.11-.05.22-.11.32-.18l.85.27.54-.93-.66-.61c.01-.13.01-.25 0-.37l.66-.59-.53-.93zm-1.9 2.6c-.49 0-.89-.4-.89-.89s.4-.89.89-.89.89.4.89.89-.4.89-.89.89z" }),
  "EngineeringOutlined"
);
const EnhancedEncryptionIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10zm-5-9h-2v3H8v2h3v3h2v-3h3v-2h-3z" }),
  "EnhancedEncryptionOutlined"
);
const EqualizerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" }),
  "EqualizerOutlined"
);
const EscalatorIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 3h-3.3l-5 9H7c-.83 0-1.5.67-1.5 1.5S6.17 18 7 18h3.3l5-9H17c.83 0 1.5-.67 1.5-1.5S17.83 6 17 6z" }),
  "EscalatorOutlined"
);
const EscalatorWarningIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5zm3 2.5h-2.84c-.58.01-1.14.32-1.45.86l-.92 1.32L9.72 8c-.37-.63-1.03-.99-1.71-1H5c-1.1 0-2 .9-2 2v6h1.5v7h5V11.61L12.03 16h2.2l.77-1.1V22h4v-5h1v-3.5c0-.82-.67-1.5-1.5-1.5z" }),
  "EscalatorWarningOutlined"
);
const EuroIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06c-.04.33-.06.66-.06 1s.02.67.06 1H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z" }),
  "EuroOutlined"
);
const EuroSymbolIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1s.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z" }),
  "EuroSymbolOutlined"
);
const EvStationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m19.77 7.23.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 11v8H6V5h6v6zm6-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-8-4-4 7.5h2V18l4-7h-2z" }),
  "EvStationOutlined"
);
const EventIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" }),
  "EventOutlined"
);
const EventAvailableIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm5.56 10.46 5.93-5.93-1.06-1.06-4.87 4.87-2.11-2.11-1.06 1.06z" }),
  "EventAvailableOutlined"
);
const EventBusyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm3.23 9.41 1.06 1.06 2.44-2.44 2.44 2.44 1.06-1.06-2.44-2.44 2.44-2.44-1.06-1.06-2.44 2.44-2.44-2.44-1.06 1.06 2.44 2.44z" }),
  "EventBusyOutlined"
);
const EventNoteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z" }),
  "EventNoteOutlined"
);
const EventRepeatIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 12V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V10h14v2h2zm-2-4H5V6h14v2zm-3.36 12c.43 1.45 1.77 2.5 3.36 2.5 1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5c-.95 0-1.82.38-2.45 1H18V18h-4v-4h1.5v1.43c.9-.88 2.14-1.43 3.5-1.43 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.44-1.72-4.9-4h1.54z" }),
  "EventRepeatOutlined"
);
const EventSeatIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 5v7H9V5h6m0-2H9c-1.1 0-2 .9-2 2v9h10V5c0-1.1-.9-2-2-2zm7 7h-3v3h3v-3zM5 10H2v3h3v-3zm15 5H4v6h2v-4h12v4h2v-6z" }),
  "EventSeatOutlined"
);
const ExpandIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 20h16v2H4zM4 2h16v2H4zm5.41 11.59L8 15l4 4 4-4-1.41-1.41L13 15.17V8.83l1.59 1.58L16 9l-4-4-4 4 1.41 1.41L11 8.83v6.34z" }),
  "ExpandOutlined"
);
const ExpandCircleDownIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.08 9.59 12 12.67 8.92 9.59 7.5 11l4.5 4.5 4.5-4.5-1.42-1.41zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }),
  "ExpandCircleDownOutlined"
);
const ExpandLessIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" }),
  "ExpandLessOutlined"
);
const ExpandMoreIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" }),
  "ExpandMoreOutlined"
);
const ExplicitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4h-4v-2h4v-2h-4V9h4V7H9v10h6z" }),
  "ExplicitOutlined"
);
const ExploreIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5 7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" }),
  "ExploreOutlined"
);
const ExploreOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4c4.41 0 8 3.59 8 8 0 1.48-.41 2.86-1.12 4.06l1.46 1.46C21.39 15.93 22 14.04 22 12c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66l1.46 1.46C9.14 4.41 10.52 4 12 4zm2.91 8.08L17.5 6.5l-5.58 2.59 2.99 2.99zM2.1 4.93l1.56 1.56C2.61 8.07 2 9.96 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l1.56 1.56 1.41-1.41L3.51 3.51 2.1 4.93zm3.02 3.01 3.98 3.98-2.6 5.58 5.58-2.59 3.98 3.98c-1.2.7-2.58 1.11-4.06 1.11-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06z" }),
  "ExploreOffOutlined"
);
const ExposureIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.41 2L5 17.59V5h12.59zM6.41 19 19 6.41V19H6.41zM6 7h5v1.5H6zm10 5.5h-1.5v2h-2V16h2v2H16v-2h2v-1.5h-2z" }),
  "ExposureOutlined"
);
const ExtensionIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.5 4.5c.28 0 .5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2v6h-2.12c-.68-1.75-2.39-3-4.38-3s-3.7 1.25-4.38 3H4v-2.12c1.75-.68 3-2.39 3-4.38 0-1.99-1.24-3.7-2.99-4.38L4 7h6V5c0-.28.22-.5.5-.5m0-2C9.12 2.5 8 3.62 8 5H4c-1.1 0-1.99.9-1.99 2v3.8h.29c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-.3c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7v.3H17c1.1 0 2-.9 2-2v-4c1.38 0 2.5-1.12 2.5-2.5S20.38 11 19 11V7c0-1.1-.9-2-2-2h-4c0-1.38-1.12-2.5-2.5-2.5z" }),
  "ExtensionOutlined"
);
const ExtensionOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m1.39 4.22 1.62 1.62c0 .05-.01.1-.01.16v3.8c2.7 0 3 2.16 3 2.7s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.71 2.16-3 2.7-3s2.7.29 2.7 3H18c.06 0 .11 0 .16-.01l1.61 1.61 1.41-1.41L2.81 2.81 1.39 4.22zM11.5 16c-1.5 0-3.57.83-4.37 3H5v-2.13c2.17-.8 3-2.87 3-4.37 0-.69-.18-1.5-.58-2.25l6.33 6.33c-.75-.4-1.56-.58-2.25-.58zM8.83 6l-2-2H9c0-1.38 1.12-2.5 2.5-2.5S14 2.62 14 4h4c1.1 0 2 .9 2 2v4c1.38 0 2.5 1.12 2.5 2.5S21.38 15 20 15v2.17l-2-2V13h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2V6h-6V4c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2H8.83z" }),
  "ExtensionOffOutlined"
);
const FaceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z" }),
  "FaceOutlined"
);
const FaceRetouchingNaturalIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19.89 10.75c.07.41.11.82.11 1.25 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-.05.01-.1 0-.14 2.6-.98 4.69-2.99 5.74-5.55 3.38 4.14 7.97 3.73 8.99 3.61l-.89-1.93c-.13.01-4.62.38-7.18-3.86 1.01-.16 1.71-.15 2.59-.01 2.52-1.15 1.93-.89 2.76-1.26C14.78 2.3 13.43 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.43-.3-2.78-.84-4.01l-1.27 2.76zM8.08 5.03C7.45 6.92 6.13 8.5 4.42 9.47 5.05 7.58 6.37 6 8.08 5.03z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "15", cy: "13", r: "1.25" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "9", cy: "13", r: "1.25" }, "2"), /* @__PURE__ */ jsx("path", { d: "m23 4.5-2.4-1.1L19.5 1l-1.1 2.4L16 4.5l2.4 1.1L19.5 8l1.1-2.4z" }, "3")],
  "FaceRetouchingNaturalOutlined"
);
const FaceRetouchingOffIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "9", cy: "13", r: "1.25" }, "0"), /* @__PURE__ */ jsx("path", { d: "M17.5 10c.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 1.22-.28 2.37-.77 3.4l1.49 1.49C21.53 15.44 22 13.78 22 12c0-5.52-4.48-10-10-10-1.78 0-3.44.47-4.89 1.28l5.33 5.33c1.49.88 3.21 1.39 5.06 1.39zm-6.84-5.88c.43-.07.88-.12 1.34-.12 2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88zm-8.77-.4 2.19 2.19C2.78 7.6 2 9.71 2 12c0 5.52 4.48 10 10 10 2.29 0 4.4-.78 6.09-2.08l2.19 2.19 1.41-1.41L3.31 2.31 1.89 3.72zm14.77 14.77C15.35 19.44 13.74 20 12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1 0-.14 1.39-.52 2.63-1.35 3.64-2.39l9.02 9.02zM6.23 8.06c-.53.55-1.14 1.03-1.81 1.41.26-.77.63-1.48 1.09-2.13l.72.72z" }, "1")],
  "FaceRetouchingOffOutlined"
);
const FacebookIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" }),
  "FacebookOutlined"
);
const FactCheckIcon = createSvgIcon(
  /* @__PURE__ */ jsxs("g", { fillRule: "evenodd", children: [
    /* @__PURE__ */ jsx("path", { d: "M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z" }),
    /* @__PURE__ */ jsx("path", { d: "M19.41 10.42 17.99 9l-3.17 3.17-1.41-1.42L12 12.16 14.82 15zM5 7h5v2H5zm0 4h5v2H5zm0 4h5v2H5z" })
  ] }),
  "FactCheckOutlined"
);
const FactoryIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 22H2V10l7-3v2l5-2v3h3l1-8h3l1 8v12zM12 9.95l-5 2V10l-3 1.32V20h16v-8h-8V9.95zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z" }),
  "FactoryOutlined"
);
const FamilyRestroomIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63C19.68 7.55 18.92 7 18.06 7h-.12c-.86 0-1.63.55-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h3zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4h3z" }),
  "FamilyRestroomOutlined"
);
const FastForwardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 9.86 18.03 12 15 14.14V9.86m-9 0L9.03 12 6 14.14V9.86M13 6v12l8.5-6L13 6zM4 6v12l8.5-6L4 6z" }),
  "FastForwardOutlined"
);
const FastRewindIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 9.86v4.28L14.97 12 18 9.86m-9 0v4.28L5.97 12 9 9.86M20 6l-8.5 6 8.5 6V6zm-9 0-8.5 6 8.5 6V6z" }),
  "FastRewindOutlined"
);
const FastfoodIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1v.98zM8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01zM3.62 13c1.11-1.55 3.47-2.01 4.88-2.01s3.77.46 4.88 2.01H3.62zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5h-5z" }),
  "FastfoodOutlined"
);
const FavoriteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" }),
  "FavoriteOutlined"
);
const FavoriteBorderIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" }),
  "FavoriteBorderOutlined"
);
const FaxIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 9h-1V4H8v5h-.78C6.67 8.39 5.89 8 5 8c-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3 .89 0 1.67-.39 2.22-1H22v-8c0-1.66-1.34-3-3-3zM6 18c0 .55-.45 1-1 1s-1-.45-1-1v-7c0-.55.45-1 1-1s1 .45 1 1v7zm4-12h6v3h-6V6zm10 12H8v-7h11c.55 0 1 .45 1 1v6z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "15", cy: "13", r: "1" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "18", cy: "13", r: "1" }, "2"), /* @__PURE__ */ jsx("circle", { cx: "15", cy: "16", r: "1" }, "3"), /* @__PURE__ */ jsx("circle", { cx: "18", cy: "16", r: "1" }, "4"), /* @__PURE__ */ jsx("path", { d: "M9 12h4v5H9z" }, "5")],
  "FaxOutlined"
);
const FeaturedPlayListIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-3h9v2H5z" }),
  "FeaturedPlayListOutlined"
);
const FeaturedVideoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM4 6h9v7H4z" }),
  "FeaturedVideoOutlined"
);
const FeedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-5-5zm3 16H5V5h10v4h4v10zM7 17h10v-2H7v2zm5-10H7v2h5V7zm-5 6h10v-2H7v2z" }),
  "FeedOutlined"
);
const FeedbackIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z" }),
  "FeedbackOutlined"
);
const FemaleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.5 9.5C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5c0 2.7 1.94 4.93 4.5 5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1c2.56-.47 4.5-2.7 4.5-5.4zm-9 0C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5z" }),
  "FemaleOutlined"
);
const FenceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 12v-2h-2V7l-3-3-2 2-2-2-2 2-2-2-3 3v3H3v2h2v2H3v2h2v4h14v-4h2v-2h-2v-2h2zm-5-5.17 1 1V10h-2V7.83l.41-.41.59-.59zm-4 0 .59.59.41.41V10h-2V7.83l.41-.41.59-.59zM11 14v-2h2v2h-2zm2 2v2h-2v-2h2zM7 7.83l1-1 .59.59.41.41V10H7V7.83zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-2v-2h2v2zm0-4h-2v-2h2v2z" }),
  "FenceOutlined"
);
const FestivalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M23 11V9c-6-2-11-7-11-7S7 7 1 9v2c0 1.49.93 2.75 2.24 3.26C3.2 16.76 2.92 19.69 2 22h20c-.92-2.31-1.2-5.24-1.24-7.74C22.07 13.75 23 12.49 23 11zM12 4.71c1.33 1.14 3.49 2.84 6.11 4.29H5.89C8.51 7.55 10.67 5.85 12 4.71zM13 11h3c0 .83-.67 1.5-1.5 1.5S13 11.83 13 11zm-3.5 1.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5zM6 11c0 .83-.67 1.5-1.5 1.5S3 11.83 3 11h3zm-1.34 9c.39-1.86.54-3.82.57-5.58.68-.15 1.29-.49 1.76-.98.25.25.54.45.85.62-.1 1.87-.26 4-.52 5.93H4.66zm4.69 0c.24-1.83.39-3.78.48-5.53.84-.08 1.61-.45 2.17-1.02.56.57 1.32.94 2.17 1.02.1 1.75.24 3.7.48 5.53h-5.3zm7.32 0c-.27-1.94-.43-4.07-.52-5.93.31-.17.61-.37.85-.62.47.48 1.08.83 1.76.98.03 1.76.18 3.72.57 5.58h-2.66zm2.83-7.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5z" }),
  "FestivalOutlined"
);
const FiberDvrIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m11.87 12.43-1-3.43h-1.5l1.75 6h1.5l1.75-6h-1.5zM21 11.5v-1c0-.85-.65-1.5-1.5-1.5H16v6h1.5v-2h1.15l.85 2H21l-.9-2.1c.5-.25.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zM6.5 9H3v6h3.5c.85 0 1.5-.65 1.5-1.5v-3C8 9.65 7.35 9 6.5 9zm0 4.5h-2v-3h2v3z" }),
  "FiberDvrOutlined"
);
const FiberManualRecordIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" }),
  "FiberManualRecordOutlined"
);
const FiberNewIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.25 12.5 4.75 9H3.5v6h1.25v-3.5L7.3 15h1.2V9H7.25zM9.5 15h4v-1.25H11v-1.11h2.5v-1.26H11v-1.12h2.5V9h-4zm9.75-6v4.5h-1.12V9.99h-1.25v3.52h-1.13V9H14.5v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V9h-1.25z" }),
  "FiberNewOutlined"
);
const FiberPinIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 15h1.5V9H11v6zm7.75-6v3.5L16.25 9H15v6h1.25v-3.5L18.8 15H20V9h-1.25zM7.5 9H4v6h1.5v-2h2c.85 0 1.5-.65 1.5-1.5v-1C9 9.65 8.35 9 7.5 9zm0 2.5h-2v-1h2v1z" }),
  "FiberPinOutlined"
);
const FiberSmartRecordIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm8-13.74v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-3.73-2.55-6.85-6-7.74z" }),
  "FiberSmartRecordOutlined"
);
const FifteenMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M8.5 11.5H10v-6H7V7h1.5zm8-1V9c0-.55-.45-1-1-1h-2V7h3V5.5H12V9h3v1h-3v1.5h3.5c.55 0 1-.45 1-1z" }, "2")],
  "FifteenMpOutlined"
);
const FileCopyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z" }),
  "FileCopyOutlined"
);
const FileDownloadOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 15.17V15h2v2.17l-2-2zm-2.59-2.58L17 11l-1.41-1.41L14 11.17l1.41 1.42zM13 10.17V4h-2v4.17l2 2zm8.19 11.02-1.78-1.78-16.6-16.6-1.42 1.41 6.19 6.19L7 11l5 5 .59-.59L15.17 18H6v-3H4v3c0 1.1.9 2 2 2h11.17l2.61 2.61 1.41-1.42z" }),
  "FileDownloadOffOutlined"
);
const FileOpenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 22H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8l6 6v6h-2V9h-5V4H6v16h9v2zm4-.34v-2.24l2.95 2.95 1.41-1.41L20.41 18h2.24v-2H17v5.66h2z" }),
  "FileOpenOutlined"
);
const FilePresentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h8v4h4v12zm-6-3c-1.1 0-2-.9-2-2V9.5c0-.28.22-.5.5-.5s.5.22.5.5V15h2V9.5C13 8.12 11.88 7 10.5 7S8 8.12 8 9.5V15c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2v4c0 1.1-.9 2-2 2z" }),
  "FilePresentOutlined"
);
const FilterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m15.96 10.29-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" }),
  "FilterOutlined"
);
const Filter1Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" }),
  "Filter1Outlined"
);
const Filter2Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z" }),
  "Filter2Outlined"
);
const Filter3Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-4v2h4v2h-2v2h2v2h-4v2h4c1.1 0 2-.89 2-2z" }),
  "Filter3Outlined"
);
const Filter4Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" }),
  "Filter4Outlined"
);
const Filter5Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-2c0-1.11-.9-2-2-2h-2V7h4V5h-6v6h4v2h-4v2h4c1.1 0 2-.89 2-2z" }),
  "Filter5Outlined"
);
const Filter6Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V7h4V5h-4c-1.1 0-2 .89-2 2v6c0 1.11.9 2 2 2zm0-4h2v2h-2v-2z" }),
  "Filter6Outlined"
);
const Filter7Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2 4-8V5h-6v2h4l-4 8h2z" }),
  "Filter7Outlined"
);
const Filter8Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z" }),
  "Filter8Outlined"
);
const Filter9Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM15 5h-2c-1.1 0-2 .89-2 2v2c0 1.11.9 2 2 2h2v2h-4v2h4c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2zm0 4h-2V7h2v2z" }),
  "Filter9Outlined"
);
const Filter9PlusIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 7V8c0-1.11-.9-2-2-2h-1c-1.1 0-2 .89-2 2v1c0 1.11.9 2 2 2h1v1H9v2h3c1.1 0 2-.89 2-2zm-3-3V8h1v1h-1zm10-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z" }),
  "Filter9PlusOutlined"
);
const FilterAltOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m16.95 6-3.57 4.55 1.43 1.43c1.03-1.31 4.98-6.37 4.98-6.37C20.3 4.95 19.83 4 19 4H6.83l2 2h8.12zM2.81 2.81 1.39 4.22 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78 1.41-1.41L2.81 2.81z" }),
  "FilterAltOffOutlined"
);
const FilterBAndWIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16-7-8v8H5l7-8V5h7v14z" }),
  "FilterBAndWOutlined"
);
const FilterCenterFocusIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }),
  "FilterCenterFocusOutlined"
);
const FilterDramaIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z" }),
  "FilterDramaOutlined"
);
const FilterFramesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM6 18h12V8H6v10zm2-8h8v6H8v-6z" }),
  "FilterFramesOutlined"
);
const FilterHdrIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14 6-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z" }),
  "FilterHdrOutlined"
);
const FilterListIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }),
  "FilterListOutlined"
);
const FilterListOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.83 8H21V6H8.83l2 2zm5 5H18v-2h-4.17l2 2zM14 16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h.17L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41L14 16.83z" }),
  "FilterListOffOutlined"
);
const FilterNoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" }),
  "FilterNoneOutlined"
);
const FilterTiltShiftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1 4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9 1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z" }),
  "FilterTiltShiftOutlined"
);
const FilterVintageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-.91-.52-1.95-.8-3.01-.8-1.02 0-2.05.26-2.99.8-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-.94-.54-1.97-.8-2.99-.8-1.05 0-2.1.28-3.01.8 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19.91.52 1.95.8 3.01.8 1.02 0 2.05-.26 2.99-.8.28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54.94.54 1.97.8 2.99.8 1.05 0 2.1-.28 3.01-.8-.01-2.07-1.08-4.08-3-5.19zm-2.54-3.88c.21-.17.38-.29.54-.37.61-.35 1.3-.54 2-.54.27 0 .53.03.79.08-.31.91-.94 1.69-1.78 2.18-.17.1-.36.18-.58.27l-1.38.52c-.17-.46-.41-.87-.72-1.24l1.13-.9zM12 3.37c.63.72 1 1.66 1 2.63 0 .19-.02.41-.05.63l-.23 1.44C12.48 8.03 12.24 8 12 8s-.48.03-.71.07l-.23-1.44C11.02 6.41 11 6.19 11 6c0-.98.37-1.91 1-2.63zM4.51 7.68c.26-.06.53-.08.8-.08.69 0 1.38.18 1.99.54.15.09.32.2.49.35l1.15.96c-.3.36-.53.76-.7 1.2l-1.38-.52c-.21-.09-.4-.18-.56-.27-.87-.5-1.49-1.27-1.79-2.18zm3.33 7.79c-.21.17-.38.29-.54.37-.61.35-1.3.54-2 .54-.27 0-.53-.03-.79-.08.31-.91.94-1.69 1.78-2.18.17-.1.36-.18.58-.27l1.38-.52c.16.46.41.88.72 1.24l-1.13.9zM12 20.63c-.63-.72-1-1.66-1-2.63 0-.2.02-.41.06-.65l.22-1.42c.23.04.47.07.72.07.24 0 .48-.03.71-.07l.23 1.44c.04.22.06.44.06.63 0 .98-.37 1.91-1 2.63zm6.69-4.24c-.69 0-1.38-.18-1.99-.54-.18-.1-.34-.22-.49-.34l-1.15-.96c.3-.36.54-.76.7-1.21l1.38.52c.22.08.41.17.57.26.85.49 1.47 1.27 1.78 2.18-.27.07-.54.09-.8.09z" }),
  "FilterVintageOutlined"
);
const FindInPageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 4h7l5 5v8.58l-1.84-1.84c1.28-1.94 1.07-4.57-.64-6.28C14.55 8.49 13.28 8 12 8c-1.28 0-2.55.49-3.53 1.46-1.95 1.95-1.95 5.11 0 7.05.97.97 2.25 1.46 3.53 1.46.96 0 1.92-.28 2.75-.83L17.6 20H6V4zm8.11 11.1c-.56.56-1.31.88-2.11.88s-1.55-.31-2.11-.88c-.56-.56-.88-1.31-.88-2.11s.31-1.55.88-2.11c.56-.57 1.31-.88 2.11-.88s1.55.31 2.11.88c.56.56.88 1.31.88 2.11s-.31 1.55-.88 2.11z" }),
  "FindInPageOutlined"
);
const FindReplaceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z" }),
  "FindReplaceOutlined"
);
const FingerprintIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39s-4.66 1.97-4.66 4.39c0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94s3.08 1.32 3.08 2.94c0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z" }),
  "FingerprintOutlined"
);
const FireExtinguisherIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 19h10v1c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-1zm0-1h10v-5H7v5zM17 3v6l-3.15-.66c-.01 0-.01.01-.02.02 1.55.62 2.72 1.98 3.07 3.64H7.1c.34-1.66 1.52-3.02 3.07-3.64-.33-.26-.6-.58-.8-.95L5 6.5v-1l4.37-.91C9.87 3.65 10.86 3 12 3c.7 0 1.34.25 1.85.66L17 3zm-4 3c-.03-.59-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1z" }),
  "FireExtinguisherOutlined"
);
const FireplaceIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12.01 12.46c-.15.42-.15.82-.08 1.28.1.55.33 1.04.2 1.6-.13.59-.77 1.38-1.53 1.63 1.28 1.05 3.2.37 3.39-1.32.17-1.54-1.44-1.98-1.98-3.19z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M2 2v20h20V2H2zm10 16c-1.58 0-2.97-1.88-3-3.06 0-.05-.01-.13-.01-.22-.13-1.73 1-3.2 2.47-4.37.47 1.01 1.27 2.03 2.57 2.92.58.42.97.86.97 1.73 0 1.65-1.35 3-3 3zm8 2h-2v-2h-2.02c.63-.84 1.02-1.87 1.02-3 0-1.89-1.09-2.85-1.85-3.37C12.2 9.61 13 7 13 7c-6.73 3.57-6.02 7.47-6 8 .03.96.49 2.07 1.23 3H6v2H4V4h16v16z" }, "1")],
  "FireplaceOutlined"
);
const FirstPageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z" }),
  "FirstPageOutlined"
);
const FitScreenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 16h12V8H6v8zm2-6h8v4H8v-4zm-4 5H2v3c0 1.1.9 2 2 2h3v-2H4v-3zm0-9h3V4H4c-1.1 0-2 .9-2 2v3h2V6zm16-2h-3v2h3v3h2V6c0-1.1-.9-2-2-2zm0 14h-3v2h3c1.1 0 2-.9 2-2v-3h-2v3z" }),
  "FitScreenOutlined"
);
const FitbitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.89 13.89c1.04 0 1.89-.85 1.89-1.89s-.85-1.89-1.89-1.89S18 10.96 18 12s.85 1.89 1.89 1.89zm-4.24-.21c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68c-.93 0-1.68.75-1.68 1.68s.75 1.68 1.68 1.68zm0-4.26c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .93.75 1.68 1.68 1.68zm0 8.51c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .92.75 1.68 1.68 1.68zm-4.24-4.46c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0-4.26c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0 8.52c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0 4.27c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0-17.06c.81 0 1.47-.66 1.47-1.47S12.22 2 11.41 2c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm-4.25 8.32c.7 0 1.26-.57 1.26-1.26s-.57-1.26-1.26-1.26c-.7 0-1.26.57-1.26 1.26s.56 1.26 1.26 1.26zm0 4.25c.7 0 1.26-.57 1.26-1.26 0-.7-.57-1.26-1.26-1.26-.7 0-1.26.57-1.26 1.26 0 .69.56 1.26 1.26 1.26zm0-8.49c.7 0 1.26-.57 1.26-1.26 0-.7-.57-1.26-1.26-1.26-.7 0-1.26.57-1.26 1.26 0 .69.56 1.26 1.26 1.26zm-3.87 4.03c.58 0 1.05-.47 1.05-1.05s-.47-1.05-1.05-1.05c-.58 0-1.05.47-1.05 1.05s.47 1.05 1.05 1.05z" }),
  "FitbitOutlined"
);
const FitnessCenterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.57 14.86 22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z" }),
  "FitnessCenterOutlined"
);
const FiveGIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.5 13H19v2h-5V9h7c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4h-4.5v2zM3 13h5v2H3v2h5c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H5V9h5V7H3v6z" }),
  "FiveGOutlined"
);
const FiveKIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M11 14v-1.5c0-.55-.45-1-1-1H8v-1h3V9H6.5v3.5h3v1h-3V15H10c.55 0 1-.45 1-1zm3.5-1.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z" }, "1")],
  "FiveKOutlined"
);
const FiveKPlusIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M10 14v-1.5c0-.55-.45-1-1-1H7.5v-1H10V9H6v3.5h2.5v1H6V15h3c.55 0 1-.45 1-1zm2.5-1.25L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z" }, "1")],
  "FiveKPlusOutlined"
);
const FiveMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M14.5 10.5V9c0-.55-.45-1-1-1h-2V7h3V5.5H10V9h3v1h-3v1.5h3.5c.55 0 1-.45 1-1z" }, "2")],
  "FiveMpOutlined"
);
const FivteenMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M8.5 11.5H10v-6H7V7h1.5zm8-1V9c0-.55-.45-1-1-1h-2V7h3V5.5H12V9h3v1h-3v1.5h3.5c.55 0 1-.45 1-1z" }, "2")],
  "FivteenMpOutlined"
);
const FlagIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14 6-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z" }),
  "OutlinedFlagOutlined"
);
const FlagCircleIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m15 9-1-2H8v11h1.5v-5H12l1 2h5V9h-3zm1.5 4.5h-2.57l-1-2H9.5v-3h3.57l1 2h2.43v3z" }, "1")],
  "FlagCircleOutlined"
);
const FlakyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "m14.05 17.58-.01.01-2.4-2.4 1.06-1.06 1.35 1.35L16.54 13l1.06 1.06-3.54 3.54-.01-.02zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM7.34 6.28l1.41 1.41 1.41-1.41 1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.41-1.41 1.41-1.06-1.06 1.41-1.41-1.41-1.41 1.06-1.06zM12 20c-2.2 0-4.2-.9-5.7-2.3L17.7 6.3C19.1 7.8 20 9.8 20 12c0 4.4-3.6 8-8 8z" }),
  "FlakyOutlined"
);
const FlareIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24 2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71 1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z" }),
  "FlareOutlined"
);
const FlashAutoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z" }),
  "FlashAutoOutlined"
);
const FlashOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 10h-3.61l2.28 2.28zm0-8H7v1.61l6.13 6.13zm-13.59.86L2 4.27l5 5V13h3v9l3.58-6.15L17.73 20l1.41-1.41z" }),
  "FlashOffOutlined"
);
const FlashOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 2v11h3v9l7-12h-4l3-8z" }),
  "FlashOnOutlined"
);
const FlashlightOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2.81 2.81 1.39 4.22 8 10.83V22h8v-3.17l3.78 3.78 1.41-1.41L2.81 2.81zM14 20h-4v-7.17l4 4V20zm2-16v1H7.83l2 2H16v.39l-2 3.01v.77l2 2V11l2-3V2H6v1.17l.83.83z" }),
  "FlashlightOffOutlined"
);
const FlashlightOnIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 2H6v6l2 3v11h8V11l2-3V2zm-2 2v1H8V4h8zm-2 6.4V20h-4v-9.61l-2-3V7h8v.39l-2 3.01z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "14", r: "1.5" }, "1")],
  "FlashlightOnOutlined"
);
const FlatwareIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 7.08c0 1.77-.84 3.25-2 3.82V21h-2V10.9c-1.16-.57-2-2.05-2-3.82C10.01 4.83 11.35 3 13 3c1.66 0 3 1.83 3 4.08zM17 3v18h2v-8h2V7c0-1.76-1.24-4-4-4zM8.28 3c-.4 0-.72.32-.72.72V7h-.84V3.72C6.72 3.32 6.4 3 6 3s-.72.32-.72.72V7h-.84V3.72c0-.4-.32-.72-.72-.72S3 3.32 3 3.72V9c0 1.1.9 2 2 2v10h2V11c1.1 0 2-.9 2-2V3.72c0-.4-.32-.72-.72-.72z" }),
  "FlatwareOutlined"
);
const FlightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" }),
  "FlightOutlined"
);
const FlightClassIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 4h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 7h-2V6h2v5zm-6.5 5H18v2H9.49c-.88 0-1.66-.58-1.92-1.43L5 8V4h2v4l2.5 8zM8 19h10v2H8v-2z" }),
  "FlightClassOutlined"
);
const FlightLandIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2.5 19h19v2h-19v-2zm16.84-3.15c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l16.57 4.44z" }),
  "FlightLandOutlined"
);
const FlightTakeoffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85z" }),
  "FlightTakeoffOutlined"
);
const FlipIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z" }),
  "FlipOutlined"
);
const FlipCameraAndroidIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3zm4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M8 10V8H5.09C6.47 5.61 9.05 4 12 4c3.72 0 6.85 2.56 7.74 6h2.06c-.93-4.56-4.96-8-9.8-8-3.27 0-6.18 1.58-8 4.01V4H2v6h6zm8 4v2h2.91c-1.38 2.39-3.96 4-6.91 4-3.72 0-6.85-2.56-7.74-6H2.2c.93 4.56 4.96 8 9.8 8 3.27 0 6.18-1.58 8-4.01V20h2v-6h-6z" }, "1")],
  "FlipCameraAndroidOutlined"
);
const FlipCameraIosIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l.59-.65L9.88 5h4.24l1.24 1.35.59.65H20v12z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M12 17c-2.21 0-4-1.79-4-4h2l-2.5-2.5L5 13h2c0 2.76 2.24 5 5 5 .86 0 1.65-.24 2.36-.62l-.74-.74c-.49.23-1.04.36-1.62.36zm0-9c-.86 0-1.65.24-2.36.62l.74.73C10.87 9.13 11.42 9 12 9c2.21 0 4 1.79 4 4h-2l2.5 2.5L19 13h-2c0-2.76-2.24-5-5-5z" }, "1")],
  "FlipCameraIosOutlined"
);
const FlipToBackIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z" }),
  "FlipToBackOutlined"
);
const FlipToFrontIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z" }),
  "FlipToFrontOutlined"
);
const FlourescentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 15h14V9H5v6zm2-4h10v2H7v-2zm4-9h2v3h-2zm6.2863 4.3989 1.7897-1.8024 1.4192 1.4092-1.7897 1.8024zM11 19h2v3h-2zm6.29-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM3.4947 6.0091 4.902 4.602l1.789 1.789-1.4074 1.407zm-.0026 12.0672 1.8024-1.7897 1.4092 1.4192-1.8023 1.7897z" }),
  "FlourescentOutlined"
);
const FlutterDashIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.07 11.7c.29-.39.81-.56 1.27-.37.17.07.32.18.43.33.22.28.25.59.22.85-.05.33-.25.63-.54.79 0 0-4.87 2.95-5.07 2.69s3.69-4.29 3.69-4.29zM22 10c0 2.5-1 3-1.5 3-.23 0-.44-.1-.62-.26-.48 3.32-2.36 5.31-5.33 5.99.11.44.48.77.95.77h.58c.22 0 .41.15.48.36.17.52.66 1.02 1.02 1.32.25.21.24.59-.03.78-.34.24-.9.49-1.79.53-.18.01-.35-.07-.45-.22-.13-.2-.31-.56-.31-1.01 0-.3.04-.57.09-.8-.78-.16-1.39-.78-1.55-1.56-.49.06-1 .1-1.54.1-.88 0-1.7-.09-2.45-.25-.02.08-.05.16-.05.25 0 .55.45 1 1 1h.58c.22 0 .41.15.48.36.17.52.66 1.02 1.02 1.32.25.21.24.59-.03.78-.34.24-.9.49-1.79.53-.18.01-.35-.07-.45-.22-.13-.2-.31-.56-.31-1.01 0-.3.04-.57.09-.8-.9-.19-1.59-1-1.59-1.96 0-.18.03-.36.08-.53-2.46-.86-4.03-2.78-4.46-5.74-.18.17-.38.27-.62.27C3 13 2 12.5 2 10c0-2.27 1.7-4.5 3-4.5.43 0 .49.49.5.85 1.28-1.78 3.26-3.02 5.55-3.29.2-.96 1.08-1.56 1.95-1.56v1s.33-.5 1-.5c.67 0 1 .5 1 .5-.49 0-.85.35-.96.77 1.82.48 3.39 1.59 4.46 3.08.01-.36.07-.85.5-.85 1.3 0 3 2.23 3 4.5zM5 11c0 .81.1 1.53.25 2.21.18-.69.46-1.33.83-1.92-.21-.47-.34-.99-.34-1.54C5.75 7.68 7.43 6 9.5 6c.96 0 1.84.37 2.5.97.66-.6 1.54-.97 2.5-.97 2.07 0 3.75 1.68 3.75 3.75 0 .55-.12 1.07-.34 1.54.37.59.66 1.24.84 1.94.15-.68.25-1.41.25-2.23 0-3.86-3.14-7-7-7s-7 3.14-7 7zm12.98 4.29c0-.1.02-.19.02-.29 0-1.01-.26-1.95-.7-2.78-.69.78-1.68 1.28-2.8 1.28-.27 0-.54-.03-.79-.09.14-.23.23-.49.27-.77.01-.07.01-.13.02-.19.17.03.33.05.5.05 1.52 0 2.75-1.23 2.75-2.75S16.02 7 14.5 7c-.67 0-1.32.25-1.83.72l-.67.6-.67-.6C10.82 7.25 10.17 7 9.5 7 7.98 7 6.75 8.23 6.75 9.75c0 1.34.96 2.46 2.23 2.7l-.76.83c-.6-.22-1.12-.59-1.53-1.05C6.26 13.06 6 14 6 15c0 .08.01.15.01.24C7.13 17.06 9.14 18 12 18c2.88 0 4.88-.91 5.98-2.71zM16 9.75c0 .97-.67 1.75-1.5 1.75S13 10.72 13 9.75 13.67 8 14.5 8s1.5.78 1.5 1.75zm-.75-.87c0-.21-.17-.38-.38-.38s-.37.17-.37.38.17.38.38.38.37-.18.37-.38zM11 9.75c0 .97-.67 1.75-1.5 1.75S8 10.72 8 9.75 8.67 8 9.5 8s1.5.78 1.5 1.75zm-.75-.87c0-.21-.17-.38-.38-.38s-.37.17-.37.38.17.38.38.38.37-.18.37-.38z" }),
  "FlutterDashOutlined"
);
const FmdBadIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2zm0 17.33c-4.05-3.7-6-6.79-6-9.14C6 6.57 8.65 4 12 4s6 2.57 6 6.2c0 2.34-1.95 5.44-6 9.13z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M11 6h2v5h-2zm0 7h2v2h-2z" }, "1")],
  "FmdBadOutlined"
);
const FmdGoodIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z" }),
  "FmdGoodOutlined"
);
const FolderDeleteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.5 10V9h-2v1H12v1.5h1v4c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-4h1V10h-2.5zm0 5.5h-2v-4h2v4zM20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10z" }),
  "FolderDeleteOutlined"
);
const FolderOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6h-8l-2-2H7.17l4 4H20v9.17l1.76 1.76c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2zM2.1 2.1.69 3.51l1.56 1.56c-.15.28-.24.59-.24.93L2 18c0 1.1.9 2 2 2h13.17l3.31 3.31 1.41-1.41L2.1 2.1zM4 18V6.83L15.17 18H4z" }),
  "FolderOffOutlined"
);
const FolderOpenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" }),
  "FolderOpenOutlined"
);
const FolderSharedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-5-5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 4h8v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1z" }),
  "FolderSharedOutlined"
);
const FolderSpecialIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-6.92-3.96L12.39 17 15 15.47 17.61 17l-.69-2.96 2.3-1.99-3.03-.26L15 9l-1.19 2.79-3.03.26z" }),
  "FolderSpecialOutlined"
);
const FolderZipIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4 10h2v-2h-2v-2h2v-2h-2V8h4v10h-4v-2zm0 0h-2v2H4V6h5.17l2 2H14v2h2v2h-2v2h2v2z" }),
  "FolderZipOutlined"
);
const FollowTheSignsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9 3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75M13 2v7h3.75v14h1.5V9H22V2h-9zm5.01 6V6.25H14.5v-1.5h3.51V3l2.49 2.5L18.01 8z" }),
  "FollowTheSignsOutlined"
);
const FontDownloadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.17 15.5h5.64l1.14 3h2.09l-5.11-13h-1.86l-5.11 13h2.09l1.12-3zM12 7.98l2.07 5.52H9.93L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z" }),
  "FontDownloadOutlined"
);
const FontDownloadOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4.83 2H20c1.1 0 2 .9 2 2v15.17l-2-2V4H6.83l-2-2zm6.09 4-.57 1.52 1.36 1.36.23-.66h.1l.54 1.52 3.04 3.04L13.07 6h-2.15zm9.57 17.31L19.17 22H4c-1.1 0-2-.9-2-2V4.83L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM17.17 20l-5.07-5.07H9.58L8.49 18H6.41l2.39-6.37L4 6.83V20h13.17z" }),
  "FontDownloadOffOutlined"
);
const FoodBankIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 5.5 6 4.5v9H6v-9l6-4.5M12 3 4 9v12h16V9l-8-6zm-.5 6.5v3H11v-3h-1v3h-.5v-3h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4c.83 0 1.5-.67 1.5-1.5v-3h-1zm1.5 2v3h1V18h1V9.5c-1.1 0-2 .9-2 2z" }),
  "FoodBankOutlined"
);
const ForestIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m24 18-3.86-6H22L15 2l-3 4.29L9 2 2 12h1.86L0 18h7v4h4v-4h2v4h4v-4h7zM15 5.49 18.16 10h-1.68l3.86 6h-3.62l-2.57-4H16l-2.78-3.97L15 5.49zM3.66 16l3.86-6H5.84L9 5.49 12.16 10h-1.68l3.86 6H3.66z" }),
  "ForestOutlined"
);
const ForkLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.41 15.59 8 17l-4-4 4-4 1.41 1.41L7.83 12c1.51-.33 3.73.08 5.17 1.36V6.83l-1.59 1.59L10 7l4-4 4 4-1.41 1.41L15 6.83V21h-2v-4c-.73-2.58-3.07-3.47-5.17-3l1.58 1.59z" }),
  "ForkLeftOutlined"
);
const ForkRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.59 15.59 16 17l4-4-4-4-1.41 1.41L16.17 12c-1.51-.33-3.73.08-5.17 1.36V6.83l1.59 1.59L14 7l-4-4-4 4 1.41 1.41L9 6.83V21h2v-4c.73-2.58 3.07-3.47 5.17-3l-1.58 1.59z" }),
  "ForkRightOutlined"
);
const FormatColorResetIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 6.36c1.53 2 3.08 4.43 3.71 6.24l2.23 2.23c.03-.27.06-.55.06-.83 0-3.98-6-10.8-6-10.8s-1.18 1.35-2.5 3.19l1.44 1.44c.34-.51.7-1 1.06-1.47zM5.41 5.14 4 6.55l3.32 3.32C6.55 11.33 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.95-1.5l2.63 2.63L20 19.72 5.41 5.14zM12 18c-2.21 0-4-1.79-4-4 0-.69.32-1.62.81-2.64l5.72 5.72c-.7.56-1.57.92-2.53.92z" }),
  "FormatColorResetOutlined"
);
const FormatLineSpacingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z" }),
  "FormatLineSpacingOutlined"
);
const FormatListNumberedRtlIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 17h2v.5h-1v1h1v.5h-2v1h3v-4h-3v1zm1-9h1V4h-2v1h1v3zm-1 3h1.8L18 13.1v.9h3v-1h-1.8l1.8-2.1V10h-3v1zM2 5h14v2H2V5zm0 12h14v2H2v-2zm0-6h14v2H2v-2z" }),
  "FormatListNumberedRtlOutlined"
);
const FormatOverlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3v2H5V3h14zm-7 4c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 9.5 12 9.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" }),
  "FormatOverlineOutlined"
);
const FormatPaintIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z" }),
  "FormatPaintOutlined"
);
const FormatQuoteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z" }),
  "FormatQuoteOutlined"
);
const FormatShapesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z" }),
  "FormatShapesOutlined"
);
const FormatSizeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" }),
  "FormatSizeOutlined"
);
const FormatStrikethroughIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z" }),
  "FormatStrikethroughOutlined"
);
const FormatTextdirectionLToRIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2H9C6.79 2 5 3.79 5 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zm0 12v3H5v2h12v3l4-4-4-4z" }),
  "FormatTextdirectionLToROutlined"
);
const FormatTextdirectionRToLIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zM8 14l-4 4 4 4v-3h12v-2H8v-3z" }),
  "FormatTextdirectionRToLOutlined"
);
const FortIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3v2h-2V3h-2v2h-2V3h-2v4l2 2v1H9V9l2-2V3H9v2H7V3H5v2H3V3H1v4l2 2v6l-2 2v4h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9v-4l-2-2V9l2-2V3h-2zm0 16h-5v-1c0-2.21-1.79-4-4-4s-4 1.79-4 4v1H3v-1.17l2-2V8.17L3.83 7h4.34L7 8.17V12h10V8.17L15.83 7h4.34L19 8.17v7.66l2 2V19z" }),
  "FortOutlined"
);
const ForwardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 8.83 17.17 12 14 15.17V14H6v-4h8V8.83M12 4v4H4v8h8v4l8-8-8-8z" }),
  "ForwardOutlined"
);
const Forward10Icon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M10.9 16v-4.27h-.09l-1.77.63v.69l1.01-.31V16zm3.42-4.22c-.18-.07-.37-.1-.59-.1s-.41.03-.59.1-.33.18-.45.33-.23.34-.29.57-.1.5-.1.82v.74c0 .32.04.6.11.82s.17.42.3.57.28.26.46.33.37.1.59.1.41-.03.59-.1.33-.18.45-.33.22-.34.29-.57.1-.5.1-.82v-.74c0-.32-.04-.6-.11-.82s-.17-.42-.3-.57-.29-.26-.46-.33zm.01 2.57c0 .19-.01.35-.04.48s-.06.24-.11.32-.11.14-.19.17-.16.05-.25.05-.18-.02-.25-.05-.14-.09-.19-.17-.09-.19-.12-.32-.04-.29-.04-.48v-.97c0-.19.01-.35.04-.48s.06-.23.12-.31.11-.14.19-.17.16-.05.25-.05.18.02.25.05.14.09.19.17.09.18.12.31.04.29.04.48v.97z" }, "1")],
  "Forward10Outlined"
);
const Forward30Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2zm-7.46 2.22c-.06.05-.12.09-.2.12s-.17.04-.27.04c-.09 0-.17-.01-.25-.04s-.14-.06-.2-.11-.1-.1-.13-.17-.05-.14-.05-.22h-.85c0 .21.04.39.12.55s.19.28.33.38.29.18.46.23.35.07.53.07c.21 0 .41-.03.6-.08s.34-.14.48-.24.24-.24.32-.39.12-.33.12-.53c0-.23-.06-.44-.18-.61s-.3-.3-.54-.39c.1-.05.2-.1.28-.17s.15-.14.2-.22.1-.16.13-.25.04-.18.04-.27c0-.2-.04-.37-.11-.53s-.17-.28-.3-.38-.28-.18-.46-.23-.37-.08-.59-.08c-.19 0-.38.03-.54.08s-.32.13-.44.23-.23.22-.3.37-.11.3-.11.48h.85c0-.07.02-.14.05-.2s.07-.11.12-.15.11-.07.18-.1.14-.03.22-.03c.1 0 .18.01.25.04s.13.06.18.11.08.11.11.17.04.14.04.22c0 .18-.05.32-.16.43s-.26.16-.48.16h-.43v.66h.45c.11 0 .2.01.29.04s.16.06.22.11.11.12.14.2.05.18.05.29c0 .09-.01.17-.04.24s-.08.11-.13.17zm3.9-3.44c-.18-.07-.37-.1-.59-.1s-.41.03-.59.1-.33.18-.45.33-.23.34-.29.57-.1.5-.1.82v.74c0 .32.04.6.11.82s.17.42.3.57.28.26.46.33.37.1.59.1.41-.03.59-.1.33-.18.45-.33.22-.34.29-.57.1-.5.1-.82v-.74c0-.32-.04-.6-.11-.82s-.17-.42-.3-.57-.28-.26-.46-.33zm.01 2.57c0 .19-.01.35-.04.48s-.06.24-.11.32-.11.14-.19.17-.16.05-.25.05-.18-.02-.25-.05-.14-.09-.19-.17-.09-.19-.12-.32-.04-.29-.04-.48v-.97c0-.19.01-.35.04-.48s.06-.23.12-.31.11-.14.19-.17.16-.05.25-.05.18.02.25.05.14.09.19.17.09.18.12.31.04.29.04.48v.97z" }),
  "Forward30Outlined"
);
const Forward5Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.95 13c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2zm-5.52 2.15c-.05.07-.11.13-.18.17s-.17.06-.27.06c-.17 0-.31-.05-.42-.15s-.17-.24-.19-.41h-.84c.01.2.05.37.13.53s.19.28.32.39.29.19.46.24.35.08.53.08c.24 0 .46-.04.64-.12s.33-.18.45-.31.21-.28.27-.45.09-.35.09-.54c0-.22-.03-.43-.09-.6s-.14-.33-.25-.45-.25-.22-.41-.28-.34-.1-.55-.1c-.07 0-.14.01-.2.02s-.13.02-.18.04-.1.03-.15.05-.08.04-.11.05l.11-.92h1.7v-.71H10.9l-.25 2.17.67.17c.03-.03.06-.06.1-.09s.07-.05.12-.07.1-.04.15-.05.13-.02.2-.02c.12 0 .22.02.3.05s.16.09.21.15.1.14.13.24.04.19.04.31-.01.22-.03.31-.06.17-.11.24z" }),
  "Forward5Outlined"
);
const ForwardToInboxIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5 8-5v5h2V6c0-1.1-.9-2-2-2zm-8 7L4 6h16l-8 5zm7 4 4 4-4 4v-3h-4v-2h4v-3z" }),
  "ForwardToInboxOutlined"
);
const FoundationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 12h3L12 3 2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2v-3zM7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z" }),
  "FoundationOutlined"
);
const FourGMobiledataIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 7H7v5H5V7H3v7h4v3h2v-3h2v-2H9V7zm8 4v2h2v2h-5V9h7c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4h-4z" }),
  "FourGMobiledataOutlined"
);
const FourGPlusMobiledataIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 11v2h2v2h-4V9h6c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4h-4zm11 0h-2V9h-2v2h-2v2h2v2h2v-2h2v-2zM7 7H5v5H3V7H1v7h4v3h2v-3h1v-2H7V7z" }),
  "FourGPlusMobiledataOutlined"
);
const FourKIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V5h14v14zm-9.5-4H11v-1.49h1V12h-1V9H9.5v3H8V9H6.5v4.5h3zm8.7 0-2-3 2-3h-1.7l-2 3 2 3zm-3.7-3V9H13v6h1.5z" }),
  "FourKOutlined"
);
const FourKPlusIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M8.5 15H10v-1.5h1V12h-1V9H8.5v3H7V9H5.5v4.5h3zm4.5-2.25L14.75 15h1.75l-2.25-3 2.25-3h-1.75L13 11.25V9h-1.5v6H13z" }, "1")],
  "FourKPlusOutlined"
);
const FourMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M12.5 11.5H14V10h1V8.5h-1v-3h-1.5v3H11v-3H9.5V10h3z" }, "2")],
  "FourMpOutlined"
);
const FourteenMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6-1.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zm3 3H15V14h1.5v1.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M8.5 11.5H10v-6H7V7h1.5zm6.5 0h1.5V10h1V8.5h-1v-3H15v3h-1.5v-3H12V10h3z" }, "2")],
  "FourteenMpOutlined"
);
const FreeBreakfastIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10v8zm4-5h-2V5h2v3z" }),
  "FreeBreakfastOutlined"
);
const FullscreenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }),
  "FullscreenOutlined"
);
const FullscreenExitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }),
  "FullscreenExitOutlined"
);
const FunctionsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z" }),
  "FunctionsOutlined"
);
const GMobiledataIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 11v2h2v2H9V9h7c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4h-4z" }),
  "GMobiledataOutlined"
);
const GTranslateIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z" }),
  "GTranslateOutlined"
);
const GamepadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 4v2.67l-1 1-1-1V4h2m7 7v2h-2.67l-1-1 1-1H20M6.67 11l1 1-1 1H4v-2h2.67M12 16.33l1 1V20h-2v-2.67l1-1M15 2H9v5.5l3 3 3-3V2zm7 7h-5.5l-3 3 3 3H22V9zM7.5 9H2v6h5.5l3-3-3-3zm4.5 4.5-3 3V22h6v-5.5l-3-3z" }),
  "GamepadOutlined"
);
const GamesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 4v2.67l-1 1-1-1V4h2m7 7v2h-2.67l-1-1 1-1H20M6.67 11l1 1-1 1H4v-2h2.67M12 16.33l1 1V20h-2v-2.67l1-1M15 2H9v5.5l3 3 3-3V2zm7 7h-5.5l-3 3 3 3H22V9zM7.5 9H2v6h5.5l3-3-3-3zm4.5 4.5-3 3V22h6v-5.5l-3-3z" }),
  "GamesOutlined"
);
const GarageIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "9", cy: "13", r: "1" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "15", cy: "13", r: "1" }, "2"), /* @__PURE__ */ jsx("path", { d: "M5.78 18.5h.44c.43 0 .78-.36.78-.81V16.5h10v1.19c0 .45.34.81.78.81h.44c.43 0 .78-.36.78-.81v-6.5c-.82-2.46-1.34-4.03-1.56-4.69-.05-.16-.12-.29-.19-.4-.02-.02-.03-.04-.05-.07-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06-.07.11-.14.24-.19.4-.22.66-.74 2.22-1.56 4.69v6.5c0 .45.35.81.78.81zm2.55-11h7.34l.23.69.43 1.31H7.67l.66-2zM7 11.51v-.01h10v3H7v-2.99z" }, "3")],
  "GarageOutlined"
);
const GavelIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1 21h12v2H1v-2zM5.24 8.07l2.83-2.83 14.14 14.14-2.83 2.83L5.24 8.07zM12.32 1l5.66 5.66-2.83 2.83-5.66-5.66L12.32 1zM3.83 9.48l5.66 5.66-2.83 2.83L1 12.31l2.83-2.83z" }),
  "GavelOutlined"
);
const GestureIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z" }),
  "GestureOutlined"
);
const GetAppIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 5v6h1.17L12 13.17 9.83 11H11V5h2m2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z" }),
  "GetAppOutlined"
);
const GifIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.5 9H13v6h-1.5V9zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1h3z" }),
  "GifOutlined"
);
const GifBoxIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 19H5V5h14v14zM5 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5zm6.5 11h1v-4h-1v4zm2 0h1v-1.5H16v-1h-1.5V11h2v-1h-3v4zm-4-2v1h-1v-2h2c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h-1z" }),
  "GifBoxOutlined"
);
const GirlIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 7.5c.97 0 1.75-.78 1.75-1.75S12.97 4 12 4s-1.75.78-1.75 1.75S11.03 7.5 12 7.5zm2 8.5v4h-4v-4H8l2.38-6.38c.25-.67.9-1.12 1.62-1.12s1.37.45 1.62 1.12L16 16h-2z" }),
  "GirlOutlined"
);
const GiteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 6H9V4H7v2H6l-4 4v9h20v-9l-4-4zM4 12h10v5H4v-5zm16 5h-4v-6.17l2-2 2 2V17z" }),
  "GiteOutlined"
);
const GolfCourseIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "19.5", cy: "19.5", r: "1.5" }, "0"), /* @__PURE__ */ jsx("path", { d: "M17 5.92 9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z" }, "1")],
  "GolfCourseOutlined"
);
const GppBadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7zM9.91 8.5 8.5 9.91 10.59 12 8.5 14.09l1.41 1.41L12 13.42l2.09 2.08 1.41-1.41L13.42 12l2.08-2.09-1.41-1.41L12 10.59 9.91 8.5z" }),
  "GppBadOutlined"
);
const GppGoodIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12v4.78zm-9.18-.5L7.4 12l3.54 3.54 5.66-5.66-1.41-1.41-4.24 4.24-2.13-2.12z" }),
  "GppGoodOutlined"
);
const GppMaybeIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M11 14h2v2h-2zm0-7h2v5h-2z" }, "1")],
  "GppMaybeOutlined"
);
const GpsFixedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" }),
  "GpsFixedOutlined"
);
const GpsNotFixedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" }),
  "GpsNotFixedOutlined"
);
const GpsOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-.98.11-1.91.38-2.77.78l1.53 1.53C10.46 5.13 11.22 5 12 5c3.87 0 7 3.13 7 7 0 .79-.13 1.54-.37 2.24l1.53 1.53c.4-.86.67-1.79.78-2.77H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.26 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21l1.41-1.41L4.41 2.86 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z" }),
  "GpsOffOutlined"
);
const GradeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 7.13.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27M12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" }),
  "GradeOutlined"
);
const GradientIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 9h2v2h-2V9zm-2 2h2v2H9v-2zm4 0h2v2h-2v-2zm2-2h2v2h-2V9zM7 9h2v2H7V9zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z" }),
  "GradientOutlined"
);
const GradingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 7h16v2H4V7zm0 6h16v-2H4v2zm0 4h7v-2H4v2zm0 4h7v-2H4v2zm11.41-2.83L14 16.75l-1.41 1.41L15.41 21 20 16.42 18.58 15l-3.17 3.17zM4 3v2h16V3H4z" }),
  "GradingOutlined"
);
const GrainIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }),
  "GrainOutlined"
);
const GraphicEqIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z" }),
  "GraphicEqOutlined"
);
const GrassIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 20H2v-2h5.75c-.73-2.81-2.94-5.01-5.75-5.74.64-.16 1.31-.26 2-.26 4.42 0 8 3.58 8 8zm10-7.74c-.64-.16-1.31-.26-2-.26-2.93 0-5.48 1.58-6.88 3.93.29.66.53 1.35.67 2.07.13.65.2 1.32.2 2h8v-2h-5.75c.74-2.81 2.95-5.01 5.76-5.74zm-6.36-1.24c.78-2.09 2.23-3.84 4.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3zm-4.22-2.17C10.58 6.66 8.88 4.89 6.7 4 8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82.21-1.18.65-2.29 1.24-3.29z" }),
  "GrassOutlined"
);
const Grid3x3Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z" }),
  "Grid3x3Outlined"
);
const Grid4x4Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7h3zM7 7h4v4H7V7zm0 10v-4h4v4H7zm10 0h-4v-4h4v4zm0-6h-4V7h4v4z" }),
  "Grid4x4Outlined"
);
const GridGoldenratioIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 11V9h-7V2h-2v7h-2V2H9v7H2v2h7v2H2v2h7v7h2v-7h2v7h2v-7h7v-2h-7v-2h7zm-9 2h-2v-2h2v2z" }),
  "GridGoldenratioOutlined"
);
const GridOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 4v.89l2 2V4h4v4h-2.89l2 2H14v.89l2 2V10h4v4h-2.89l2 2H20v.89l2 2V4c0-1.1-.9-2-2-2H5.11l2 2H8zm8 0h4v4h-4V4zM1.41 1.14 0 2.55l2 2V20c0 1.1.9 2 2 2h15.45l2.01 2.01 1.41-1.41L1.41 1.14zM10 12.55 11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.55V20zm2 0v-1.45L17.45 20H16z" }),
  "GridOffOutlined"
);
const GridOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" }),
  "GridOnOutlined"
);
const GroupRemoveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M24 9v2h-6V9h6zM8 4C5.79 4 4 5.79 4 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 3c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H2v-.99C2.2 16.29 5.3 15 8 15s5.8 1.29 6 2v1zM12.51 4.05C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95zm4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17z" }),
  "GroupRemoveOutlined"
);
const GroupWorkIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8", cy: "14", r: "2" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "8", r: "2" }, "2"), /* @__PURE__ */ jsx("circle", { cx: "16", cy: "14", r: "2" }, "3")],
  "GroupWorkOutlined"
);
const HMobiledataIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 11H9V7H7v10h2v-4h6v4h2V7h-2v4z" }),
  "HMobiledataOutlined"
);
const HPlusMobiledataIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 11H6V7H4v10h2v-4h6v4h2V7h-2v4zm10 0h-2V9h-2v2h-2v2h2v2h2v-2h2v-2z" }),
  "HPlusMobiledataOutlined"
);
const HailIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5-4h2c0 2.7-.93 4.41-2.3 5.5-.5.4-1.1.7-1.7.9V22h-2v-6h-2v6H9V10.1c-.3.1-.5.2-.6.3-.53.41-1.4 1.03-1.4 3.6H5c0-2.06.35-3.78 2.11-5.29C8.21 7.81 10 7 12 7s2.68-.46 3.48-1.06C15.96 5.55 17 4.76 17 2zM4 16h3v6H4v-6z" }),
  "HailOutlined"
);
const HandymanIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12c.39-.38.39-1.02 0-1.41zm-2.83 1.42-4.24-4.24.71-.71 4.24 4.24-.71.71z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m17.34 10.19 1.41-1.41 2.12 2.12c1.17-1.17 1.17-3.07 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3c-.39.39-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15 1.06 1.05zm-7.98 5.15-4.24 4.24-.71-.71 4.24-4.24.71.71z" }, "1")],
  "HandymanOutlined"
);
const HardwareIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18 3-3 3V3H9C6.24 3 4 5.24 4 8h5v12c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8l3 3h2V3h-2zm-5 16h-2v-6h2v6zm-2-8V6H6.77C7.32 5.39 8.11 5 9 5h4v6h-2z" }),
  "HardwareOutlined"
);
const HdIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7.5 13h2v2H11V9H9.5v2.5h-2V9H6v6h1.5zM18 14v-4c0-.55-.45-1-1-1h-4v6h4c.55 0 1-.45 1-1zm-1.5-.5h-2v-3h2v3z" }),
  "HdOutlined"
);
const HdrAutoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.99-14L6.88 17h1.9l1-2.81h4.44l.99 2.81h1.9L12.98 6h-1.97zm-.66 6.59 1.6-4.55h.09l1.6 4.55h-3.29z" }),
  "HdrAutoOutlined"
);
const HdrAutoSelectIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M10 16H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zM3.5 18h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zm18.5.5v-2h-1.5v2h-2V20h2v2H22v-2h2v-1.5zM16.5 16H13v6h1.5v-2h1.1l.9 2H18l-.9-2.1c.5-.3.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1zM11.97 5.3l-1.02 2.89h2.1L12.03 5.3z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm2.04 9-.63-1.79h-2.83L9.96 11H8.74l2.63-7h1.25l2.63 7h-1.21z" }, "1")],
  "HdrAutoSelectOutlined"
);
const HdrEnhancedSelectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 2C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1 7h-2V9H9V7h2V5h2v2h2v2h-2v2zm11 9h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20zm-6-1.5c0 .6-.4 1.1-.9 1.4L18 22h-1.5l-.9-2h-1.1v2H13v-6h3.5c.8 0 1.5.7 1.5 1.5v1zm-1.5 0v-1h-2v1h2zm-13-.5v-2H5v6H3.5v-2.5h-2V22H0v-6h1.5v2h2zm6.5-2c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5H6.5v-6H10zm0 4.5v-3H8v3h2z" }),
  "HdrEnhancedSelectOutlined"
);
const HdrOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.5 15v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5H16v4.86L17.14 15h.36zm0-4.5h2v1h-2v-1zm-4.5 0v.36l1.5 1.5V10.5c0-.8-.7-1.5-1.5-1.5h-1.86l1.5 1.5H13zM2.51 2.49 1.45 3.55 6.9 9h-.4v2h-2V9H3v6h1.5v-2.5h2V15H8v-4.9l1.5 1.5V15h3.4l7.6 7.6 1.06-1.06z" }),
  "HdrOffOutlined"
);
const HdrOffSelectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 18.5v-1c0-.8-.7-1.5-1.5-1.5H13v6h1.5v-2h1.1l.9 2H18l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5v2zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm14-.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20zM10.98 4.15 9.42 2.59c5.1-2.42 10.41 2.89 7.99 7.99l-1.56-1.56c.81-2.96-1.91-5.68-4.87-4.87zM6.34 2.34 4.93 3.76l1.66 1.66c-2.42 5.1 2.89 10.41 7.99 7.99l1.66 1.66 1.41-1.41L6.34 2.34zm1.81 4.64 4.87 4.87c-2.96.81-5.68-1.91-4.87-4.87z" }),
  "HdrOffSelectOutlined"
);
const HdrOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 11.5v-1c0-.8-.7-1.5-1.5-1.5H16v6h1.5v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5v2zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5h-2v-3h2v3z" }),
  "HdrOnOutlined"
);
const HdrOnSelectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 18.5v-1c0-.8-.7-1.5-1.5-1.5H13v6h1.5v-2h1.1l.9 2H18l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5v2zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm14-.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20zM12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m0-2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" }),
  "HdrOnSelectOutlined"
);
const HdrPlusIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8.13 19c1.15.64 2.47 1 3.87 1 4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8c0 2.52 1.17 4.77 3 6.24V13h3.5c.8 0 1.5.7 1.5 1.5v1c0 .6-.4 1.1-.9 1.4L12 19h-1.5l-.9-2H8.5v2h-.37zM12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm5.5 14H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5V16zm-7-.5v-1h-2v1h2zm0-7.5V6H12v6h-1.5V9.5h-2V12H7V6h1.5v2h2zM16 6c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5h-3V6h3zm0 4.5v-3h-1.5v3H16z" }),
  "HdrPlusOutlined"
);
const HdrStrongIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }),
  "HdrStrongOutlined"
);
const HdrWeakIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12-2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" }),
  "HdrWeakOutlined"
);
const HeadphonesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9zM7 15v4H5v-4h2zm12 4h-2v-4h2v4z" }),
  "HeadphonesOutlined"
);
const HeadphonesBatteryIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 7h-1V6h-2v1h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 9h-2V9h2v7zM8 6c-3.31 0-6 2.69-6 6v4c0 1.1.9 2 2 2h2v-5H3.5v-1c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v1H10v5h2c1.1 0 2-.9 2-2v-4c0-3.31-2.69-6-6-6z" }),
  "HeadphonesBatteryOutlined"
);
const HeadsetIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 14v3c0 .55-.45 1-1 1h-1v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" }),
  "HeadsetOutlined"
);
const HeadsetMicIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 14v4h-2v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z" }),
  "HeadsetMicOutlined"
);
const HeadsetOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4c3.87 0 7 3.13 7 7v1h-4v.17L16.83 14H19v2.17l2 2V11c0-4.97-4.03-9-9-9-2.02 0-3.88.67-5.38 1.8l1.43 1.43C9.17 4.45 10.53 4 12 4zM2.1 2.1.69 3.51l3.33 3.33C3.37 8.09 3 9.5 3 11v7c0 1.1.9 2 2 2h4v-8H5v-1c0-.94.19-1.83.52-2.65L15 17.83V20h2.17l1 1H12v2h7c.34 0 .65-.09.93-.24l.55.55 1.41-1.41L2.1 2.1zM7 14v4H5v-4h2z" }),
  "HeadsetOffOutlined"
);
const HealingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17.73 12.02 3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34a.9959.9959 0 0 0-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z" }),
  "HealingOutlined"
);
const HealthAndSafetyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z" }),
  "HealthAndSafetyOutlined"
);
const HearingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64 6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z" }),
  "HearingOutlined"
);
const HearingDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.03 3.2C7.15 2.44 8.51 2 10 2c3.93 0 7 3.07 7 7 0 1.26-.38 2.65-1.07 3.9-.02.04-.05.08-.08.13l-1.48-1.48c.4-.86.63-1.75.63-2.55 0-2.8-2.2-5-5-5-.92 0-1.76.26-2.5.67L6.03 3.2zm11.18 11.18 1.43 1.43C20.11 13.93 21 11.57 21 9c0-3.04-1.23-5.79-3.22-7.78l-1.42 1.42C17.99 4.26 19 6.51 19 9c0 2.02-.67 3.88-1.79 5.38zM10 6.5c-.21 0-.4.03-.59.08l3.01 3.01c.05-.19.08-.38.08-.59 0-1.38-1.12-2.5-2.5-2.5zm11.19 14.69L2.81 2.81 1.39 4.22l2.13 2.13C3.19 7.16 3 8.05 3 9h2c0-.36.05-.71.12-1.05l6.61 6.61c-.88.68-1.78 1.41-2.27 2.9-.5 1.5-1 2.01-1.71 2.38-.19.1-.46.16-.75.16-1.1 0-2-.9-2-2H3c0 2.21 1.79 4 4 4 .57 0 1.13-.12 1.64-.35 1.36-.71 2.13-1.73 2.73-3.55.32-.98.9-1.43 1.71-2.05.03-.02.05-.04.08-.06l6.62 6.62 1.41-1.42z" }),
  "HearingDisabledOutlined"
);
const HeartBrokenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.5 3c-.96 0-1.9.25-2.73.69L12 9h3l-3 10 1-9h-3l1.54-5.39C10.47 3.61 9.01 3 7.5 3 4.42 3 2 5.42 2 8.5c0 4.13 4.16 7.18 10 12.5 5.47-4.94 10-8.26 10-12.5C22 5.42 19.58 3 16.5 3zm-6.26 13.73C6.45 13.34 4 11 4 8.5 4 6.54 5.54 5 7.5 5c.59 0 1.19.15 1.73.42L7.35 12h3.42l-.53 4.73zm4.89-1.2L17.69 7h-2.91l.61-1.82c.36-.12.74-.18 1.11-.18C18.46 5 20 6.54 20 8.5c0 2.21-2.02 4.43-4.87 7.03z" }),
  "HeartBrokenOutlined"
);
const HeightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z" }),
  "HeightOutlined"
);
const HelpIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" }),
  "HelpOutlined"
);
const HelpCenterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.25 16.74c0 .69-.53 1.26-1.25 1.26-.7 0-1.26-.56-1.26-1.26 0-.71.56-1.25 1.26-1.25.71 0 1.25.55 1.25 1.25zM11.99 6c-1.77 0-2.98 1.15-3.43 2.49l1.64.69c.22-.67.74-1.48 1.8-1.48 1.62 0 1.94 1.52 1.37 2.33-.54.77-1.47 1.29-1.96 2.16-.39.69-.31 1.49-.31 1.98h1.82c0-.93.07-1.12.22-1.41.39-.72 1.11-1.06 1.87-2.17.68-1 .42-2.36-.02-3.08-.51-.84-1.52-1.51-3-1.51zM19 5H5v14h14V5m0-2c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14z" }),
  "HelpCenterOutlined"
);
const HelpOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" }),
  "HelpOutlineOutlined"
);
const HevcIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5.5 11h-1V9H3v6h1.5v-2.5h1V15H7V9H5.5zM21 11v-1c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h-1.5v.5h-1v-3h1v.5H21zm-6.75 2.5L13.5 9H12l1 6h2.5l1-6H15zM8 9v6h3.5v-1.5h-2v-1h2V11h-2v-.5h2V9z" }),
  "HevcOutlined"
);
const HexagonIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9-5.2-9zm-1.15 16h-8.1l-4.04-7 4.04-7h8.09l4.04 7-4.03 7z" }),
  "HexagonOutlined"
);
const HideImageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 5v11.17l2 2V5c0-1.1-.9-2-2-2H5.83l2 2H19zM2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41L2.81 2.81zM5 19V7.83l7.07 7.07-.82 1.1L9 13l-3 4h8.17l2 2H5z" }),
  "HideImageOutlined"
);
const HideSourceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2.81 2.81 1.39 4.22l2.27 2.27C2.61 8.07 2 9.96 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.41L2.81 2.81zM12 20c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06l10.94 10.94C14.86 19.59 13.48 20 12 20zM7.94 5.12 6.49 3.66C8.07 2.61 9.96 2 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46C19.59 14.86 20 13.48 20 12c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12z" }),
  "HideSourceOutlined"
);
const HighQualityIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12zM7.5 13h2v2H11V9H9.5v2.5h-2V9H6v6h1.5zm6.5 2h.75v1.5h1.5V15H17c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-4.5h2v3h-2v-3z" }),
  "HighQualityOutlined"
);
const HighlightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m6 14 3 3v5h6v-5l3-3V9H6v5zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3V11zm3-9h2v3h-2zM3.502 5.874 4.916 4.46l2.122 2.12-1.414 1.415zm13.458.708 2.123-2.12 1.413 1.416-2.123 2.12z" }),
  "HighlightOutlined"
);
const HighlightAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 5h-2V3h2v2zm-2 10v6l2.29-2.29 2.3 2.29L21 19.59l-2.29-2.29L21 15h-6zm4-6h2V7h-2v2zm0 4h2v-2h-2v2zm-8 8h2v-2h-2v2zM7 5h2V3H7v2zM3 17h2v-2H3v2zm2 4v-2H3c0 1.1.9 2 2 2zM19 3v2h2c0-1.1-.9-2-2-2zm-8 2h2V3h-2v2zM3 9h2V7H3v2zm4 12h2v-2H7v2zm-4-8h2v-2H3v2zm0-8h2V3c-1.1 0-2 .9-2 2z" }),
  "HighlightAltOutlined"
);
const HighlightOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }),
  "HighlightOffOutlined"
);
const HikingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 5.28c-1.23-.37-2.22-1.17-2.8-2.18l-1-1.6c-.41-.65-1.11-1-1.84-1-.78 0-1.59.5-1.78 1.44S7 23 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1 1.15 2.41 2.01 4 2.34V23H19V9h-1.5v1.78zM7.43 13.13l-2.12-.41c-.54-.11-.9-.63-.79-1.17l.76-3.93c.21-1.08 1.26-1.79 2.34-1.58l1.16.23-1.35 6.86z" }),
  "HikingOutlined"
);
const HistoryIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z" }),
  "HistoryOutlined"
);
const HistoryEduIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 4v1.38c-.83-.33-1.72-.5-2.61-.5-1.79 0-3.58.68-4.95 2.05l3.33 3.33h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H6v3c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V4H9zm-1.11 6.41V8.26H5.61L4.57 7.22a5.07 5.07 0 0 1 1.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41-.2.2c-.51.51-1.19.8-1.92.8-.47 0-.93-.12-1.33-.34zM19 17c0 .55-.45 1-1 1s-1-.45-1-1v-2h-6v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8v11z" }),
  "HistoryEduOutlined"
);
const HistoryToggleOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m15.1 19.37 1 1.74c-.96.44-2.01.73-3.1.84v-2.02c.74-.09 1.44-.28 2.1-.56zM4.07 13H2.05c.11 1.1.4 2.14.84 3.1l1.74-1c-.28-.66-.47-1.36-.56-2.1zM15.1 4.63l1-1.74c-.96-.44-2-.73-3.1-.84v2.02c.74.09 1.44.28 2.1.56zM19.93 11h2.02c-.11-1.1-.4-2.14-.84-3.1l-1.74 1c.28.66.47 1.36.56 2.1zM8.9 19.37l-1 1.74c.96.44 2.01.73 3.1.84v-2.02c-.74-.09-1.44-.28-2.1-.56zM11 4.07V2.05c-1.1.11-2.14.4-3.1.84l1 1.74c.66-.28 1.36-.47 2.1-.56zm7.36 3.1 1.74-1.01c-.63-.87-1.4-1.64-2.27-2.27l-1.01 1.74c.59.45 1.1.96 1.54 1.54zM4.63 8.9l-1.74-1c-.44.96-.73 2-.84 3.1h2.02c.09-.74.28-1.44.56-2.1zm15.3 4.1c-.09.74-.28 1.44-.56 2.1l1.74 1c.44-.96.73-2.01.84-3.1h-2.02zm-3.1 5.36 1.01 1.74c.87-.63 1.64-1.4 2.27-2.27l-1.74-1.01c-.45.59-.96 1.1-1.54 1.54zM7.17 5.64l-1-1.75c-.88.64-1.64 1.4-2.27 2.28l1.74 1.01c.44-.59.95-1.1 1.53-1.54zM5.64 16.83l-1.74 1c.63.87 1.4 1.64 2.27 2.27l1.01-1.74c-.59-.44-1.1-.95-1.54-1.53zM13 7h-2v5.41l4.29 4.29 1.41-1.41-3.7-3.7V7z" }),
  "HistoryToggleOffOutlined"
);
const HiveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m21.5 9-2.25-4h-3.31l-1.69-3h-4.5L8.06 5H4.75L2.5 9l1.69 3-1.69 3 2.25 4h3.31l1.69 3h4.5l1.69-3h3.31l2.25-4-1.69-3 1.69-3zm-2.29 0-1.12 2h-2.14l-1.12-2 1.12-2h2.14l1.12 2zm-8.27 5-1.12-2 1.12-2h2.12l1.12 2-1.12 2h-2.12zm2.14-10 1.12 1.98L13.06 8h-2.12L9.8 5.98 10.92 4h2.16zM5.92 7h2.14l1.12 2-1.12 2H5.92L4.79 9l1.13-2zm-1.13 8 1.12-2h2.14l1.12 2-1.12 2H5.92l-1.13-2zm6.13 5L9.8 18.02 10.94 16h2.12l1.13 2.02L13.08 20h-2.16zm7.16-3h-2.14l-1.12-2 1.12-2h2.14l1.12 2-1.12 2z" }),
  "HiveOutlined"
);
const HlsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.5 9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9zm10 6h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H17v-1h2v.5h1.5v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H19v1h-2V13h-1.5v1c0 .55.45 1 1 1zM14 15v-1.5h-2.5V9H10v6h4z" }),
  "HlsOutlined"
);
const HlsOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.83 15h1.67c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H17v-1h2v.5h1.5v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H19v1h-2V13h-1.17l2 2zM8 10.83V15H6.5v-2.5h-2V15H3V9h1.5v2h2V9.33L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41-7.6-7.6H10v-2.17l-2-2z" }),
  "HlsOffOutlined"
);
const HolidayVillageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m8 4-6 6v10h12V10L8 4zm4 14H9v-3H7v3H4v-7.17l4-4 4 4V18zm-3-5H7v-2h2v2zm9 7V8.35L13.65 4h-2.83L16 9.18V20h2zm4 0V6.69L19.31 4h-2.83L20 7.52V20h2z" }),
  "HolidayVillageOutlined"
);
const HomeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z" }),
  "HomeOutlined"
);
const HomeMaxIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 5H5C2.79 5 1 6.79 1 9v5c0 2.21 1.79 4 4 4h2v1h10v-1h2c2.21 0 4-1.79 4-4V9c0-2.21-1.79-4-4-4zm2 9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v5z" }),
  "HomeMaxOutlined"
);
const HomeMiniIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7zm0 2c7.64 0 7.99 4.51 8 5H4c0-.2.09-5 8-5zm2.86 10H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3z" }),
  "HomeMiniOutlined"
);
const HomeRepairServiceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10h20V10c0-1.1-.9-2-2-2zM9 6h6v2H9V6zm11 12H4v-3h2v1h2v-1h8v1h2v-1h2v3zm-2-5v-1h-2v1H8v-1H6v1H4v-3h16v3h-2z" }),
  "HomeRepairServiceOutlined"
);
const HomeWorkIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M17 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm-3.26 0 1.26.84V7z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M10 3v1.51l2 1.33V5h9v14h-4v2h6V3z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M8.17 5.7 15 10.25V21H1V10.48L8.17 5.7zM10 19h3v-7.84L8.17 8.09 3 11.38V19h3v-6h4v6z" }, "2")],
  "HomeWorkOutlined"
);
const HorizontalSplitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 15v2H5v-2h14m2-10H3v2h18V5zm0 4H3v2h18V9zm0 4H3v6h18v-6z" }),
  "HorizontalSplitOutlined"
);
const HotTubIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "7", cy: "6", r: "2" }, "0"), /* @__PURE__ */ jsx("path", { d: "M11.15 12c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zM17.42 7.21c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06zm-4 0c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06z" }, "1")],
  "HotTubOutlined"
);
const HotelIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z" }),
  "HotelOutlined"
);
const HourglassBottomIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z" }),
  "HourglassBottomOutlined"
);
const HourglassDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 4h8v3.5l-2.84 2.84 1.25 1.25L18 8.01 17.99 8H18V2H6v1.17l2 2zM2.1 2.1.69 3.51l8.9 8.9L6 16l.01.01H6V22h12v-1.17l2.49 2.49 1.41-1.41L2.1 2.1zM16 20H8v-3.5l2.84-2.84L16 18.83V20z" }),
  "HourglassDisabledOutlined"
);
const HourglassEmptyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5-4-4V4h8v3.5l-4 4z" }),
  "HourglassEmptyOutlined"
);
const HourglassFullIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z" }),
  "HourglassFullOutlined"
);
const HourglassTopIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m6 2 .01 6L10 12l-3.99 4.01L6 22h12v-6l-4-4 4-3.99V2H6zm10 14.5V20H8v-3.5l4-4 4 4z" }),
  "HourglassTopOutlined"
);
const HouseIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 9.3V4h-3v2.6L12 3 2 12h3v8h6v-6h2v6h6v-8h3l-3-2.7zM17 18h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M10 10h4c0-1.1-.9-2-2-2s-2 .9-2 2z" }, "1")],
  "HouseOutlined"
);
const HouseSidingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 12h3L12 3 2 12h3v8h2v-2h10v2h2v-8zM7.21 10h9.58l.21.19V12H7v-1.81l.21-.19zm7.36-2H9.43L12 5.69 14.57 8zM7 16v-2h10v2H7z" }),
  "HouseSidingOutlined"
);
const HouseboatIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 16c-1.95 0-2.1 1-3.34 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1 1.19 0 1.42 1 3.33 1 1.95 0 2.08-1 3.32-1s1.37 1 3.32 1c1.91 0 2.14-1 3.33-1 1.18 0 1.45 1 3.35 1v-2c-1.24 0-1.38-1-3.33-1-1.91 0-2.14 1-3.33 1-1.24 0-1.39-1-3.34-1zm8.34-4.66-1.37 1.37c-.19.18-.45.29-.71.29H17V9.65l1.32.97L19.5 9 12 3.5 4.5 9l1.18 1.61L7 9.65V13H5.74c-.27 0-.52-.11-.71-.29l-1.37-1.37-1.41 1.41 1.37 1.37c.56.56 1.33.88 2.12.88h12.51c.8 0 1.56-.32 2.12-.88l1.37-1.37-1.4-1.41zM13 13v-2h-2v2H9V8.18l3-2.2 3 2.2V13h-2z" }),
  "HouseboatOutlined"
);
const HowToRegIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM5 18c.2-.63 2.57-1.68 4.96-1.94l2.04-2c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-2-2H5zm15.6-5.5-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z" }),
  "HowToRegOutlined"
);
const HowToVoteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4c0 1.1.89 2 1.99 2H19c1.1 0 2-.89 2-2v-4l-3-3zm1 7H5v-1h14v1zm-7.66-4.98c.39.39 1.02.39 1.41 0l6.36-6.36c.39-.39.39-1.02 0-1.41L14.16 2.3c-.38-.4-1.01-.4-1.4-.01L6.39 8.66c-.39.39-.39 1.02 0 1.41l4.95 4.95zm2.12-10.61L17 7.95l-4.95 4.95-3.54-3.54 4.95-4.95z" }),
  "HowToVoteOutlined"
);
const HtmlIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3.5 9H5v6H3.5v-2.5h-2V15H0V9h1.5v2h2V9zm14 0H13c-.55 0-1 .45-1 1v5h1.5v-4.5h1V14H16v-3.51h1V15h1.5v-5c0-.55-.45-1-1-1zM11 9H6v1.5h1.75V15h1.5v-4.5H11V9zm13 6v-1.5h-2.5V9H20v6h4z" }),
  "HtmlOutlined"
);
const HttpIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z" }),
  "HttpOutlined"
);
const HttpsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" }),
  "HttpsOutlined"
);
const HubIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 6.5c-1.66 0-3 1.34-3 3 0 .07 0 .14.01.21l-2.03.68c-.64-1.21-1.82-2.09-3.22-2.32V5.91C14.04 5.57 15 4.4 15 3c0-1.66-1.34-3-3-3S9 1.34 9 3c0 1.4.96 2.57 2.25 2.91v2.16c-1.4.23-2.58 1.11-3.22 2.32l-2.04-.68C6 9.64 6 9.57 6 9.5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3c1.06 0 1.98-.55 2.52-1.37l2.03.68c-.2 1.29.17 2.66 1.09 3.69l-1.41 1.77C6.85 17.09 6.44 17 6 17c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.68-.22-1.3-.6-1.8l1.41-1.77c1.36.76 3.02.75 4.37 0l1.41 1.77c-.37.5-.59 1.12-.59 1.8 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3c-.44 0-.85.09-1.23.26l-1.41-1.77c.93-1.04 1.29-2.4 1.09-3.69l2.03-.68c.53.82 1.46 1.37 2.52 1.37 1.66 0 3-1.34 3-3S22.66 6.5 21 6.5zm-18 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM6 21c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-18c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm1 12c-1.38 0-2.5-1.12-2.5-2.5S10.62 10 12 10s2.5 1.12 2.5 2.5S13.38 15 12 15zm6 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3-8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }),
  "HubOutlined"
);
const HvacIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm3.44-8c.26.45.44.96.51 1.5h-7.9c.07-.54.24-1.05.51-1.5h6.88zm.51 2.5c-.07.54-.24 1.05-.51 1.5H8.56c-.26-.45-.44-.96-.51-1.5h7.9zM9.38 15h5.24c-.7.61-1.61 1-2.62 1s-1.91-.39-2.62-1zm5.24-6H9.38c.7-.61 1.61-1 2.62-1s1.91.39 2.62 1z" }, "1")],
  "HvacOutlined"
);
const IceSkatingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 17c0 1.66-1.34 3-3 3h-2v-2h3v-4c0-1.79-1.19-3.34-2.91-3.82l-2.62-.74C12.62 9.19 12 8.39 12 7.5V3H3v15h3v2H2v2h16c2.76 0 5-2.24 5-5h-2zM5 16V5h5v1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5H10l.1 1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5h1.81c.45 1.12 1.4 2.01 2.6 2.36l2.62.73C16.4 12.33 17 13.1 17 14v2H5zm9 4H8v-2h6v2z" }),
  "IceSkatingOutlined"
);
const IcecreamIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24C4.08 6.81 3 8.29 3 10c0 2.21 1.79 4 4 4 .12 0 .23-.02.34-.02L12.07 23l4.61-9.03c.11.01.21.03.32.03 2.21 0 4-1.79 4-4 0-1.71-1.08-3.19-2.62-3.76zm-6.33 12.39-2.73-5.21c.83.37 1.74.58 2.68.58.95 0 1.88-.21 2.72-.6l-2.67 5.23zM17 12c-.52 0-1.01-.2-1.39-.56l-.56-.54-.66.42c-.71.44-1.53.68-2.39.68s-1.68-.24-2.39-.69l-.66-.41-.56.54c-.38.35-.87.56-1.39.56-1.1 0-2-.89-2-2 0-.98.72-1.82 1.68-1.97l.77-.13.06-.78C7.71 4.8 9.66 3 12 3s4.29 1.8 4.48 4.12l.06.78.77.12c.97.16 1.69.99 1.69 1.98 0 1.1-.9 2-2 2z" }),
  "IcecreamOutlined"
);
const ImageAspectRatioIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" }),
  "ImageAspectRatioOutlined"
);
const ImageNotSupportedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m21.9 21.9-6.1-6.1-2.69-2.69L5 5 3.59 3.59 2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31 1.42-1.41zM5 19V7.83l6.84 6.84-.84 1.05L9 13l-3 4h8.17l2 2H5zM7.83 5l-2-2H19c1.1 0 2 .9 2 2v13.17l-2-2V5H7.83z" }),
  "ImageNotSupportedOutlined"
);
const ImageSearchIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 13v7H4V6h5.02c.05-.71.22-1.38.48-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5l-2-2zm-1.5 5h-11l2.75-3.53 1.96 2.36 2.75-3.54L16.5 18zm2.8-9.11c.44-.7.7-1.51.7-2.39C20 4.01 17.99 2 15.5 2S11 4.01 11 6.5s2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21 13.42 22.42 12 19.3 8.89zM15.5 9C14.12 9 13 7.88 13 6.5S14.12 4 15.5 4 18 5.12 18 6.5 16.88 9 15.5 9z" }),
  "ImageSearchOutlined"
);
const ImagesearchRollerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 7V3c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8v3h-1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-1v-3c0-1.1-.9-2-2-2H4V6h2v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1zM8 4h10v2H8V4zm6 17h-2v-4h2v4z" }),
  "ImagesearchRollerOutlined"
);
const ImportContactsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" }),
  "ImportContactsOutlined"
);
const ImportantDevicesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M23 11.01 18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z" }),
  "ImportantDevicesOutlined"
);
const InboxIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" }),
  "InboxOutlined"
);
const IndeterminateCheckBoxIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 11h10v2H7z" }),
  "IndeterminateCheckBoxOutlined"
);
const InputIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3zM21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z" }),
  "InputOutlined"
);
const InsertChartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }),
  "InsertChartOutlinedOutlined"
);
const InsertCommentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4v13.17L18.83 16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 10H6v2h12v-2zm0-3H6v2h12V9zm0-3H6v2h12V6z" }),
  "InsertCommentOutlined"
);
const InsertDriveFileIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" }),
  "InsertDriveFileOutlined"
);
const InsertEmoticonIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" }),
  "InsertEmoticonOutlined"
);
const InsertInvitationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zm-2 5h-5v5h5v-5z" }),
  "InsertInvitationOutlined"
);
const InsertLinkIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" }),
  "InsertLinkOutlined"
);
const InsertPageBreakIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 20H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2v3zM6 4h7v5h5v2h2V8l-6-6H6c-1.1 0-2 .9-2 2v7h2V4zm3 9h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z" }),
  "InsertPageBreakOutlined"
);
const InsertPhotoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z" }),
  "InsertPhotoOutlined"
);
const InsightsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m15 9 .94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11 4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z" }, "1")],
  "InsightsOutlined"
);
const InstallDesktopIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 17H4V5h8V3H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3h-2v3z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z" }, "1")],
  "InstallDesktopOutlined"
);
const InstallMobileIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M17 18H7V6h7V4H7V3h7V1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h-2v2zm0 3H7v-1h10v1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m18 14 5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z" }, "1")],
  "InstallMobileOutlined"
);
const IntegrationInstructionsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M11 14.17 8.83 12 11 9.83 9.59 8.41 6 12l3.59 3.59zm3.41 1.42L18 12l-3.59-3.59L13 9.83 15.17 12 13 14.17z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 15v4H5V5h14v10z" }, "1")],
  "IntegrationInstructionsOutlined"
);
const InterestsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.02 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM13 13v8h8v-8h-8zm6 6h-4v-4h4v4zM7 2l-5 9h10L7 2zm0 4.12L8.6 9H5.4L7 6.12zM19.25 2.5c-1.06 0-1.81.56-2.25 1.17-.44-.61-1.19-1.17-2.25-1.17C13.19 2.5 12 3.78 12 5.25c0 2 2.42 3.42 5 5.75 2.58-2.33 5-3.75 5-5.75 0-1.47-1.19-2.75-2.75-2.75zM17 8.35c-1.45-1.22-3-2.4-3-3.1 0-.43.35-.75.75-.75.31 0 .52.17.73.37L17 6.3l1.52-1.43c.21-.2.42-.37.73-.37.4 0 .75.32.75.75 0 .7-1.55 1.88-3 3.1z" }),
  "InterestsOutlined"
);
const InterpreterModeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.5 16.5c-.83 0-1.5-.67-1.5-1.5v-2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V15c0 .83-.67 1.5-1.5 1.5zM20 20h1v-1.54c1.69-.24 3-1.7 3-3.46h-1c0 1.38-1.12 2.5-2.5 2.5S18 16.38 18 15h-1c0 1.76 1.31 3.22 3 3.46V20zM9 12c-2.21 0-4-1.79-4-4s1.79-4 4-4c.47 0 .92.08 1.34.23C9.5 5.26 9 6.57 9 8c0 1.43.5 2.74 1.34 3.77-.42.15-.87.23-1.34.23zm-1.89 1.13C5.79 14.05 5 15.57 5 17.22V20H1v-2.78c0-1.12.61-2.15 1.61-2.66 1.24-.64 2.76-1.19 4.5-1.43zM11 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm2 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm2 7c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V18h7.17c.5.86 1.25 1.56 2.15 2H7v-2.78c0-1.12.61-2.15 1.61-2.66C10.29 13.7 12.47 13 15 13c.39 0 .77.02 1.14.05-.33.59-.55 1.26-.62 1.96-.17-.01-.34-.01-.52-.01z" }),
  "InterpreterModeOutlined"
);
const InventoryIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M21 11.5 15.51 17l-3.01-3-1.5 1.5 4.51 4.5 6.99-7z" }, "1")],
  "InventoryOutlined"
);
const Inventory2Icon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-1 18H5V9h14v11zm1-13H4V4h16v3z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M9 12h6v2H9z" }, "1")],
  "Inventory2Outlined"
);
const InvertColorsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4.81V19c-3.31 0-6-2.63-6-5.87 0-1.56.62-3.03 1.75-4.14L12 4.81M12 2 6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57L12 2z" }),
  "InvertColorsOutlined"
);
const InvertColorsOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.19 21.19 2.81 2.81 1.39 4.22l4.2 4.2c-1 1.31-1.6 2.94-1.6 4.7C4 17.48 7.58 21 12 21c1.75 0 3.36-.56 4.67-1.5l3.1 3.1 1.42-1.41zM12 19c-3.31 0-6-2.63-6-5.87 0-1.19.36-2.32 1.02-3.28L12 14.83V19zM8.38 5.56 12 2l5.65 5.56C19.1 8.99 20 10.96 20 13.13c0 1.18-.27 2.29-.74 3.3L12 9.17V4.81L9.8 6.97 8.38 5.56z" }),
  "InvertColorsOffOutlined"
);
const IosShareIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m16 5-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z" }),
  "IosShareOutlined"
);
const IronIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 6c-1.66 0-3 1.34-3 3v4c0 .55-.45 1-1 1v-4c0-1.66-1.34-3-3-3h-4c-1.66 0-3 1.34-3 3h2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1H6c-2.21 0-4 1.79-4 4v3h15v-2c1.66 0 3-1.34 3-3V9c0-.55.45-1 1-1h1V6h-1zm-6 10H4v-1c0-1.1.9-2 2-2h9v3z" }),
  "IronOutlined"
);
const IsoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z" }),
  "IsoOutlined"
);
const JavascriptIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 14v-1h1.5v.5h2v-1H13c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1h-1.5v-.5h-2v1H16c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1zM9 9v4.5H7.5v-1H6v1c0 .83.67 1.5 1.5 1.5H9c.83 0 1.5-.67 1.5-1.5V9H9z" }),
  "JavascriptOutlined"
);
const JoinFullIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "12", rx: "3", ry: "5.74" }, "0"), /* @__PURE__ */ jsx("path", { d: "M7.5 12c0-.97.23-4.16 3.03-6.5C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c.9 0 1.75-.19 2.53-.5-2.8-2.34-3.03-5.53-3.03-6.5zM16 5c-.9 0-1.75.19-2.53.5 2.8 2.34 3.03 5.53 3.03 6.5 0 .97-.23 4.16-3.03 6.5.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7z" }, "1")],
  "JoinFullOutlined"
);
const JoinInnerIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "12", rx: "3", ry: "5.74" }, "0"), /* @__PURE__ */ jsx("path", { d: "M9.04 16.87c-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c.9 0 1.75-.19 2.53-.5-.61-.51-1.1-1.07-1.49-1.63zM16 5c-.9 0-1.75.19-2.53.5.61.51 1.1 1.07 1.49 1.63.33-.08.68-.13 1.04-.13 2.76 0 5 2.24 5 5s-2.24 5-5 5c-.36 0-.71-.05-1.04-.13-.39.56-.88 1.12-1.49 1.63.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7z" }, "1")],
  "JoinInnerOutlined"
);
const JoinLeftIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "12", rx: "3", ry: "5.74" }, "0"), /* @__PURE__ */ jsx("path", { d: "M7.5 12c0-.97.23-4.16 3.03-6.5C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c.9 0 1.75-.19 2.53-.5-2.8-2.34-3.03-5.53-3.03-6.5zM16 5c-.9 0-1.75.19-2.53.5.61.51 1.1 1.07 1.49 1.63.33-.08.68-.13 1.04-.13 2.76 0 5 2.24 5 5s-2.24 5-5 5c-.36 0-.71-.05-1.04-.13-.39.56-.88 1.12-1.49 1.63.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7z" }, "1")],
  "JoinLeftOutlined"
);
const JoinRightIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "12", rx: "3", ry: "5.74" }, "0"), /* @__PURE__ */ jsx("path", { d: "M16.5 12c0 .97-.23 4.16-3.03 6.5.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7c-.9 0-1.75.19-2.53.5 2.8 2.34 3.03 5.53 3.03 6.5zM8 19c.9 0 1.75-.19 2.53-.5-.61-.51-1.1-1.07-1.49-1.63-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7z" }, "1")],
  "JoinRightOutlined"
);
const KayakingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 23c-1.03 0-2.06-.25-3-.75-1.89 1-4.11 1-6 0-1.89 1-4.11 1-6 0-.95.5-1.97.75-3 .75H2v-2h1c1.04 0 2.08-.35 3-1 1.83 1.3 4.17 1.3 6 0 1.83 1.3 4.17 1.3 6 0 .91.65 1.96 1 3 1h1v2h-1zM12 5.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 12s-1.52.71-3.93 1.37c-.82-.23-1.53-.75-2.07-1.37-.73.84-1.8 1.5-3 1.5s-2.27-.66-3-1.5c-.73.84-1.8 1.5-3 1.5s-2.27-.66-3-1.5c-.54.61-1.25 1.13-2.07 1.37C1.52 18.21 0 17.5 0 17.5s2.93-1.36 7.13-2.08l1.35-4.17c.31-.95 1.32-1.47 2.27-1.16.09.03.19.07.27.11l2.47 1.3 2.84-1.5 1.65-3.71-.51-1.32L18.8 2 22 3.43 20.67 6.4l-1.31.5-3.72 8.34c4.85.63 8.36 2.26 8.36 2.26zm-8.98-4.54-1.52.8-1.75-.92-.71 2.17c.32 0 .64-.01.96-.01.71 0 1.4.03 2.07.08l.95-2.12z" }),
  "KayakingOutlined"
);
const KebabDiningIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.75 7h.75C19.88 7 21 5.88 21 4.5S19.88 2 18.5 2h-.75V1h-1.5v1h-.75C14.12 2 13 3.12 13 4.5S14.12 7 15.5 7h.75v1H13v5h3.25v1h-.75c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h.75v4h1.5v-4h.75c1.38 0 2.5-1.12 2.5-2.5S19.88 14 18.5 14h-.75v-1H21V8h-3.25V7zM15.5 5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3zm3 11c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3zm.5-6v1h-4v-1h4zM7.75 7h.75C9.88 7 11 5.88 11 4.5S9.88 2 8.5 2h-.75V1h-1.5v1H5.5C4.12 2 3 3.12 3 4.5S4.12 7 5.5 7h.75v1H3v5h3.25v1H5.5C4.12 14 3 15.12 3 16.5S4.12 19 5.5 19h.75v4h1.5v-4h.75c1.38 0 2.5-1.12 2.5-2.5S9.88 14 8.5 14h-.75v-1H11V8H7.75V7zM5.5 5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3zm3 11c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3zm.5-6v1H5v-1h4z" }),
  "KebabDiningOutlined"
);
const KeyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" }),
  "KeyOutlined"
);
const KeyOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m10.7 13.53-1.71-1.71c.01.06.01.12.01.18 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.06 0 .12 0 .18.01L5.47 8.3C4.02 8.9 3 10.33 3 12c0 2.21 1.79 4 4 4 1.67 0 3.1-1.02 3.7-2.47zm1.49 1.49C11.15 16.8 9.21 18 7 18c-3.31 0-6-2.69-6-6 0-2.21 1.2-4.15 2.98-5.19L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41-7.58-7.58zm4.07-1.59 1.24-.93 1.81 1.36L21.17 12l-1-1h-6.34l-2-2H21l3 3-4.5 4.5-.69-.51-2.55-2.56z" }),
  "KeyOffOutlined"
);
const KeyboardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 7v10H4V7h16m0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z" }),
  "KeyboardOutlined"
);
const KeyboardAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15H3V6h18v13zM9 8h2v2H9V8zM5 8h2v2H5V8zm3 8h8v1H8v-1zm5-8h2v2h-2V8zm-4 4h2v2H9v-2zm-4 0h2v2H5v-2zm8 0h2v2h-2v-2zm4-4h2v2h-2V8zm0 4h2v2h-2v-2z" }),
  "KeyboardAltOutlined"
);
const KeyboardArrowUpIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" }),
  "KeyboardArrowUpOutlined"
);
const KeyboardBackspaceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z" }),
  "KeyboardBackspaceOutlined"
);
const KeyboardCapslockIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 8.41 16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z" }),
  "KeyboardCapslockOutlined"
);
const KeyboardCommandKeyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.5 3C15.57 3 14 4.57 14 6.5V8h-4V6.5C10 4.57 8.43 3 6.5 3S3 4.57 3 6.5 4.57 10 6.5 10H8v4H6.5C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21s3.5-1.57 3.5-3.5V16h4v1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5H16v-4h1.5c1.93 0 3.5-1.57 3.5-3.5S19.43 3 17.5 3zM16 8V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S18.33 8 17.5 8H16zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5V8H6.5zm3.5 6v-4h4v4h-4zm7.5 5c-.83 0-1.5-.67-1.5-1.5V16h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-11 0c-.83 0-1.5-.67-1.5-1.5S5.67 16 6.5 16H8v1.5c0 .83-.67 1.5-1.5 1.5z" }),
  "KeyboardCommandKeyOutlined"
);
const KeyboardControlKeyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z" }),
  "KeyboardControlKeyOutlined"
);
const KeyboardDoubleArrowDownIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z" }, "1")],
  "KeyboardDoubleArrowDownOutlined"
);
const KeyboardDoubleArrowLeftIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" }, "1")],
  "KeyboardDoubleArrowLeftOutlined"
);
const KeyboardDoubleArrowRightIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" }, "1")],
  "KeyboardDoubleArrowRightOutlined"
);
const KeyboardDoubleArrowUpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z" }, "1")],
  "KeyboardDoubleArrowUpOutlined"
);
const KeyboardHideIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H4V5h16v10zm-9-9h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zM5 9h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2zm-5 17 4-4H8z" }),
  "KeyboardHideOutlined"
);
const KeyboardOptionKeyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z" }),
  "KeyboardOptionKeyOutlined"
);
const KeyboardReturnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z" }),
  "KeyboardReturnOutlined"
);
const KeyboardTabIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.59 7.41 15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z" }),
  "KeyboardTabOutlined"
);
const KeyboardVoiceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2V5.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" }),
  "KeyboardVoiceOutlined"
);
const KingBedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z" }),
  "KingBedOutlined"
);
const KitchenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5z" }),
  "KitchenOutlined"
);
const KitesurfingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm14.06-2h-2.12L15.5 3.44l1.06 1.06 3.5-3.5zM22 23v-2h-1c-1.04 0-2.08-.35-3-1-1.83 1.3-4.17 1.3-6 0-1.83 1.3-4.17 1.3-6 0-.91.65-1.96 1-3 1H2v2h1c1.03 0 2.05-.25 3-.75 1.89 1 4.11 1 6 0 1.89 1 4.11 1 6 0 .95.5 1.97.75 3 .75h1zm-1-9.72c0 1.44-2.19 3.62-5.04 5.58-.31.09-.63.14-.96.14-1.2 0-2.27-.66-3-1.5-.73.84-1.8 1.5-3 1.5-.94 0-1.81-.41-2.49-.99.46-.39.96-.78 1.49-1.17l-1.55-2.97C6.15 13.3 6 12.64 6 12V8c0-1.1.9-2 2-2h3c1.38 0 2.63-.56 3.54-1.46l1.41 1.41C14.68 7.21 12.93 8 11 8H9.6v3.5h2.8l1.69 1.88c1.95-.84 3.77-1.38 5.06-1.38.84 0 1.85.25 1.85 1.28zm-8.8.99-.7-.77-2.5.1.83 2.01c.59-.38 1.81-1.06 2.37-1.34z" }),
  "KitesurfingOutlined"
);
const LabelIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z" }),
  "LabelOutlined"
);
const LabelImportantIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 18.99h11c.67 0 1.27-.32 1.63-.83L21 12l-4.37-6.16C16.27 5.33 15.67 5 15 5H4l5 7-5 6.99z" }),
  "LabelImportantOutlined"
);
const LabelOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m16 7 3.55 5-1.63 2.29 1.43 1.43L22 12l-4.37-6.16C17.27 5.33 16.67 5 16 5l-7.37.01 2 1.99H16zM2 4.03l1.58 1.58C3.22 5.96 3 6.46 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.28 0 .55-.07.79-.18L18.97 21l1.41-1.41L3.41 2.62 2 4.03zM14.97 17H5V7.03L14.97 17z" }),
  "LabelOffOutlined"
);
const LanIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3v7zM10 7V4h4v3h-4zM9 17v3H5v-3h4zm10 0v3h-4v-3h4z" }),
  "LanOutlined"
);
const LandscapeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14 6-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z" }),
  "LandscapeOutlined"
);
const LaptopIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" }),
  "LaptopOutlined"
);
const LaptopChromebookIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z" }),
  "LaptopChromebookOutlined"
);
const LaptopMacIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }),
  "LaptopMacOutlined"
);
const LaptopWindowsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z" }),
  "LaptopWindowsOutlined"
);
const LastPageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z" }),
  "LastPageOutlined"
);
const LaunchIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }),
  "LaunchOutlined"
);
const LayersIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m11.99 18.54-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" }),
  "LayersOutlined"
);
const LayersClearIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4.53 17.74 9l-1.89 1.47 1.43 1.42L21 9l-9-7-2.59 2.02 1.42 1.42zm9 9.54-1.63-1.27-.67.52 1.43 1.43zM3.41.86 2 2.27l4.22 4.22L3 9l9 7 2.1-1.63 1.42 1.42-3.53 2.75-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21l1.41-1.41L3.41.86zM12 13.47 6.26 9l1.39-1.08 5.02 5.02-.67.53z" }),
  "LayersClearOutlined"
);
const LeaderboardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 11V3H8v6H2v12h20V11h-6zm-6-6h4v14h-4V5zm-6 6h4v8H4v-8zm16 8h-4v-6h4v6z" }),
  "LeaderboardOutlined"
);
const LeakAddIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 3H3v3c1.66 0 3-1.34 3-3zm8 0h-2c0 4.97-4.03 9-9 9v2c6.08 0 11-4.93 11-11zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7zm0 18h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11zm8 0h3v-3c-1.66 0-3 1.34-3 3zm-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7z" }),
  "LeakAddOutlined"
);
const LeakRemoveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 3h-2c0 1.35-.31 2.63-.84 3.77l1.49 1.49C13.51 6.7 14 4.91 14 3zm7 9v-2c-1.91 0-3.7.49-5.27 1.35l1.49 1.49c1.15-.53 2.43-.84 3.78-.84zm0 4v-2c-.79 0-1.54.13-2.24.37l1.68 1.68c.19-.01.37-.05.56-.05zM10 3H8c0 .19-.04.37-.06.56l1.68 1.68c.25-.7.38-1.46.38-2.24zm-5.59-.14L3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97C7.14 11.24 5.16 12 3 12v2c2.72 0 5.2-.99 7.11-2.62l2.51 2.51C10.99 15.81 10 18.29 10 21h2c0-2.16.76-4.14 2.03-5.7l1.43 1.43C14.55 17.91 14 19.39 14 21h2c0-1.06.33-2.03.89-2.84L19.73 21l1.41-1.41L4.41 2.86z" }),
  "LeakRemoveOutlined"
);
const LegendToggleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 15H4v-2h16v2zm0 2H4v2h16v-2zm-5-6 5-3.55V5l-5 3.55L10 5 4 8.66V11l5.92-3.61L15 11z" }),
  "LegendToggleOutlined"
);
const LensIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" }),
  "LensOutlined"
);
const LensBlurIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" }),
  "LensBlurOutlined"
);
const LibraryAddIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3z" }),
  "LibraryAddOutlined"
);
const LibraryAddCheckIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" }),
  "LibraryAddCheckOutlined"
);
const LibraryBooksIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z" }),
  "LibraryBooksOutlined"
);
const LibraryMusicIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7.5-1c1.38 0 2.5-1.12 2.5-2.5V7h3V5h-4v5.51c-.42-.32-.93-.51-1.5-.51-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" }),
  "LibraryMusicOutlined"
);
const LightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 6.06V3h-2v3.06c-4.5.5-8 4.31-8 8.93C3 16.1 3.9 17 5.01 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h2.99c1.11 0 2.01-.9 2.01-2.01 0-4.62-3.5-8.43-8-8.93zM12 19c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm0-4H5c0-3.86 3.14-7 7-7s7 3.14 7 7h-7z" }),
  "LightOutlined"
);
const LineAxisIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m22 7.43-1.41-1.41-4.03 4.53L9.5 4 2 11.51l1.5 1.5 6.14-6.15 5.59 5.18-1.73 1.95-4-4L2 17.5 3.5 19l6-6.01 4 4 3.19-3.59 3.9 3.61L22 15.6l-3.98-3.7z" }),
  "LineAxisOutlined"
);
const LineStyleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z" }),
  "LineStyleOutlined"
);
const LineWeightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z" }),
  "LineWeightOutlined"
);
const LinearScaleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z" }),
  "LinearScaleOutlined"
);
const LinkOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.39 11 16 12.61V11zM17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.27-.77 2.37-1.87 2.84l1.4 1.4C21.05 15.36 22 13.79 22 12c0-2.76-2.24-5-5-5zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4.01 1.41-1.41L3.41 2.86 2 4.27z" }),
  "LinkOffOutlined"
);
const LinkedCameraIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 9v11H4V8h4.05l1.83-2H15V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-2zm.67-1.01H22C21.99 4.68 19.31 2 16 2v1.33c2.58 0 4.66 2.08 4.67 4.66zm-2.67 0h1.33c-.01-1.84-1.49-3.32-3.33-3.32V6c1.11 0 1.99.89 2 1.99zM7 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm8 0c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.34 3 3z" }),
  "LinkedCameraOutlined"
);
const LiquorIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 14c0 1.3.84 2.4 2 2.82V20H3v2h6v-2H7v-3.18C8.16 16.4 9 15.3 9 14V6H3v8zm2-6h2v3H5V8zm0 5h2v1c0 .55-.45 1-1 1s-1-.45-1-1v-1zm15.64-4.46-.96-.32c-.41-.14-.68-.52-.68-.95V3c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4.28c0 .43-.27.81-.68.95l-.96.32c-.81.28-1.36 1.04-1.36 1.9V20c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-9.56c0-.86-.55-1.62-1.36-1.9zM16 4h1v1h-1V4zm4 16h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4h-7v-1.56l.95-.32C15.18 9.72 16 8.57 16 7.28V7h1v.28c0 1.29.82 2.44 2.05 2.85l.95.31V12z" }),
  "LiquorOutlined"
);
const ListIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" }),
  "ListOutlined"
);
const ListAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z" }),
  "ListAltOutlined"
);
const LiveHelpIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-8-3h2v2h-2zm1-8c1.1 0 2 .9 2 2 0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4S8 6.79 8 9h2c0-1.1.9-2 2-2z" }),
  "LiveHelpOutlined"
);
const LiveTvIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z" }),
  "LiveTvOutlined"
);
const LivingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.75 10.35V9c0-1.66-1.34-3-3-3h-5.5c-1.66 0-3 1.34-3 3v1.35C5.51 10.78 5 11.58 5 12.5V16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3.5c0-.92-.51-1.72-1.25-2.15zM9.25 7.5h5.5c.83 0 1.5.67 1.5 1.5v1.03C14.99 10.15 14 11.2 14 12.5v.5h-4v-.5c0-1.3-.99-2.35-2.25-2.47V9c0-.83.67-1.5 1.5-1.5zM17.5 16c0 .28-.22.5-.5.5H7c-.28 0-.5-.22-.5-.5v-3.5c0-.55.45-1 1-1s1 .45 1 1v2h7v-2c0-.55.45-1 1-1s1 .45 1 1V16zM20 4v16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" }),
  "LivingOutlined"
);
const LocalActivityIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM9.07 16 12 14.12 14.93 16l-.89-3.36 2.69-2.2-3.47-.21L12 7l-1.27 3.22-3.47.21 2.69 2.2z" }),
  "LocalActivityOutlined"
);
const LocalAirportIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z" }),
  "LocalAirportOutlined"
);
const LocalAtmIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z" }),
  "LocalAtmOutlined"
);
const LocalBarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.77 9 12 12.11 9.23 9h5.54M21 3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9V3zM7.43 7 5.66 5h12.69l-1.78 2H7.43z" }),
  "LocalBarOutlined"
);
const LocalCafeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 5v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10m4-2H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-2 5V5h2v3h-2zm2 11H2v2h18v-2z" }),
  "LocalCafeOutlined"
);
const LocalCarWashIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M17 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 9h10.29l1.04 3H5.81l1.04-3zM19 19H5v-4.66l.12-.34h13.77l.11.34V19z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "16.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "16.5", cy: "16.5", r: "1.5" }, "2")],
  "LocalCarWashOutlined"
);
const LocalConvenienceStoreIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm1 11h-4v-4H8v4H4V9h3V6h10v3h3v9zM8 8h2v1H8v3h3v-1H9v-1h2V7H8zm7 1h-1V7h-1v3h2v2h1V7h-1z" }),
  "LocalConvenienceStoreOutlined"
);
const LocalDiningIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m8.1 13.34 2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" }),
  "LocalDiningOutlined"
);
const LocalDrinkIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m3 2 2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm14 18-10 .01L5.89 10H18.1L17 20zm1.33-12H5.67l-.44-4h13.53l-.43 4zM12 19c1.66 0 3-1.34 3-3 0-2-3-5.4-3-5.4S9 14 9 16c0 1.66 1.34 3 3 3zm0-5.09c.59.91 1 1.73 1 2.09 0 .55-.45 1-1 1s-1-.45-1-1c0-.37.41-1.19 1-2.09z" }),
  "LocalDrinkOutlined"
);
const LocalFireDepartmentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.48 12.35c-1.57-4.08-7.16-4.3-5.81-10.23.1-.44-.37-.78-.75-.55C9.29 3.71 6.68 8 8.87 13.62c.18.46-.36.89-.75.59-1.81-1.37-2-3.34-1.84-4.75.06-.52-.62-.77-.91-.34C4.69 10.16 4 11.84 4 14.37c.38 5.6 5.11 7.32 6.81 7.54 2.43.31 5.06-.14 6.95-1.87 2.08-1.93 2.84-5.01 1.72-7.69zm-9.28 5.03c1.44-.35 2.18-1.39 2.38-2.31.33-1.43-.96-2.83-.09-5.09.33 1.87 3.27 3.04 3.27 5.08.08 2.53-2.66 4.7-5.56 2.32z" }),
  "LocalFireDepartmentOutlined"
);
const LocalFloristIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8.66 13.07c.15 0 .29-.01.43-.03C9.56 14.19 10.69 15 12 15s2.44-.81 2.91-1.96c.14.02.29.03.43.03 1.73 0 3.14-1.41 3.14-3.14 0-.71-.25-1.39-.67-1.93.43-.54.67-1.22.67-1.93 0-1.73-1.41-3.14-3.14-3.14-.15 0-.29.01-.43.03C14.44 1.81 13.31 1 12 1s-2.44.81-2.91 1.96c-.14-.02-.29-.03-.43-.03-1.73 0-3.14 1.41-3.14 3.14 0 .71.25 1.39.67 1.93-.43.54-.68 1.22-.68 1.93 0 1.73 1.41 3.14 3.15 3.14zM12 13c-.62 0-1.12-.49-1.14-1.1l.12-1.09c.32.12.66.19 1.02.19s.71-.07 1.03-.19l.11 1.09c-.02.61-.52 1.1-1.14 1.1zm3.34-1.93c-.24 0-.46-.07-.64-.2l-.81-.57c.55-.45.94-1.09 1.06-1.83l.88.42c.4.19.66.59.66 1.03 0 .64-.52 1.15-1.15 1.15zm-.65-5.94c.2-.13.42-.2.65-.2.63 0 1.14.51 1.14 1.14 0 .44-.25.83-.66 1.03l-.88.42c-.12-.74-.51-1.38-1.07-1.83l.82-.56zM12 3c.62 0 1.12.49 1.14 1.1l-.11 1.09C12.71 5.07 12.36 5 12 5s-.7.07-1.02.19l-.12-1.09c.02-.61.52-1.1 1.14-1.1zM8.66 4.93c.24 0 .46.07.64.2l.81.56c-.55.45-.94 1.09-1.06 1.83l-.88-.42c-.4-.2-.66-.59-.66-1.03 0-.63.52-1.14 1.15-1.14zM8.17 8.9l.88-.42c.12.74.51 1.38 1.07 1.83l-.81.55c-.2.13-.42.2-.65.2-.63 0-1.14-.51-1.14-1.14-.01-.43.25-.82.65-1.02zM12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zm2.44-2.44c.71-1.9 2.22-3.42 4.12-4.12-.71 1.9-2.22 3.41-4.12 4.12zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9zm2.44 2.44c1.9.71 3.42 2.22 4.12 4.12-1.9-.71-3.41-2.22-4.12-4.12z" }),
  "LocalFloristOutlined"
);
const LocalGasStationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m19.77 7.23.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 13.5V19H6v-7h6v1.5zm0-3.5H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }),
  "LocalGasStationOutlined"
);
const LocalGroceryStoreIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z" }),
  "LocalGroceryStoreOutlined"
);
const LocalHospitalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8.5-2h3v-3.5H17v-3h-3.5V7h-3v3.5H7v3h3.5z" }),
  "LocalHospitalOutlined"
);
const LocalHotelIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z" }),
  "LocalHotelOutlined"
);
const LocalLaundryServiceIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 2.01 6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM18 20H6L5.99 4H18v16z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8", cy: "6", r: "1" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "11", cy: "6", r: "1" }, "2"), /* @__PURE__ */ jsx("path", { d: "M12 19c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm2.36-7.36c1.3 1.3 1.3 3.42 0 4.72-1.3 1.3-3.42 1.3-4.72 0l4.72-4.72z" }, "3")],
  "LocalLaundryServiceOutlined"
);
const LocalLibraryIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 9c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zm7 5.58c-2.53.34-4.93 1.3-7 2.82-2.06-1.52-4.47-2.49-7-2.83v-6.95c2.1.38 4.05 1.35 5.64 2.83L12 14.28l1.36-1.27c1.59-1.48 3.54-2.45 5.64-2.83v6.95z" }),
  "LocalLibraryOutlined"
);
const LocalMallIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" }),
  "LocalMallOutlined"
);
const LocalMoviesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 5v14h-4V5h4m6-2h-2v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3zm-4 6V7h2v2h-2zM6 9V7h2v2H6zm10 4v-2h2v2h-2zM6 13v-2h2v2H6zm10 4v-2h2v2h-2zM6 17v-2h2v2H6z" }),
  "LocalMoviesOutlined"
);
const LocalOfferIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01 4 11V4h7v-.01l9 9-7 7.02z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "6.5", cy: "6.5", r: "1.5" }, "1")],
  "LocalOfferOutlined"
);
const LocalParkingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z" }),
  "LocalParkingOutlined"
);
const LocalPharmacyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-3.9 8.63L18.89 19H5.11l1.79-5.37.21-.63-.21-.63L5.11 7h13.78l-1.79 5.37-.21.63.21.63zM13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z" }),
  "LocalPharmacyOutlined"
);
const LocalPhoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" }),
  "LocalPhoneOutlined"
);
const LocalPizzaIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zm0 15.92L5.51 6.36C7.32 4.85 9.62 4 12 4s4.68.85 6.49 2.36L12 17.92zM9 5.5c-.83 0-1.5.67-1.5 1.5S8.17 8.5 9 8.5s1.5-.67 1.5-1.5S9.82 5.5 9 5.5zm1.5 7.5c0 .83.67 1.5 1.5 1.5.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5-1.5.67-1.5 1.5z" }),
  "LocalPizzaOutlined"
);
const LocalPlayIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM9.07 16 12 14.12 14.93 16l-.89-3.36 2.69-2.2-3.47-.21L12 7l-1.27 3.22-3.47.21 2.69 2.2z" }),
  "LocalPlayOutlined"
);
const LocalPoliceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14.5 12.59.9 3.88-3.4-2.05-3.4 2.05.9-3.87-3-2.59 3.96-.34L12 6.02l1.54 3.64 3.96.34-3 2.59zM12 3.19l7 3.11V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" }),
  "LocalPoliceOutlined"
);
const LocalPostOfficeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" }),
  "LocalPostOfficeOutlined"
);
const LocalPrintshopIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "18", cy: "11.5", r: "1" }, "1")],
  "LocalPrintshopOutlined"
);
const LocalSeeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l.59-.65L9.88 4h4.24l1.24 1.35.59.65H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8.2c-1.77 0-3.2-1.43-3.2-3.2 0-1.77 1.43-3.2 3.2-3.2s3.2 1.43 3.2 3.2c0 1.77-1.43 3.2-3.2 3.2z" }),
  "LocalSeeOutlined"
);
const LocalShippingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5 1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }),
  "LocalShippingOutlined"
);
const LocalTaxiIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "14.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "16.5", cy: "14.5", r: "1.5" }, "2")],
  "LocalTaxiOutlined"
);
const LocationCityIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" }),
  "LocationCityOutlined"
);
const LocationDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M23 13v-2h-2.06c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-.98.11-1.91.38-2.77.78l1.53 1.53C10.46 5.13 11.22 5 12 5c3.87 0 7 3.13 7 7 0 .79-.13 1.54-.37 2.24l1.53 1.53c.4-.86.67-1.79.78-2.77H23zM4.41 2.86 3 4.27l2.04 2.04C3.97 7.62 3.26 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21l1.41-1.41L4.41 2.86zM12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81C15.09 18.45 13.61 19 12 19z" }),
  "LocationDisabledOutlined"
);
const LocationOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4c2.76 0 5 2.24 5 5 0 1.06-.39 2.32-1 3.62l1.49 1.49C18.37 12.36 19 10.57 19 9c0-3.87-3.13-7-7-7-1.84 0-3.5.71-4.75 1.86l1.43 1.43C9.56 4.5 10.72 4 12 4zm0 2.5c-.59 0-1.13.21-1.56.56l3.5 3.5c.35-.43.56-.97.56-1.56 0-1.38-1.12-2.5-2.5-2.5zM3.41 2.86 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21l1.41-1.41L3.41 2.86zM12 18.88c-2.01-2.58-4.8-6.74-4.98-9.59l6.92 6.92c-.65.98-1.33 1.89-1.94 2.67z" }),
  "LocationOffOutlined"
);
const LocationOnIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "9", r: "2.5" }, "1")],
  "LocationOnOutlined"
);
const LocationSearchingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" }),
  "LocationSearchingOutlined"
);
const LockClockIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M6 20V10h12v1c.7 0 1.37.1 2 .29V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6.26c-.42-.6-.75-1.28-.97-2H6zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85-.7.71z" }, "1")],
  "LockClockOutlined"
);
const LockOpenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" }),
  "LockOpenOutlined"
);
const LockResetIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 3c-4.97 0-9 4.03-9 9 0 .06.01.12.01.19l-1.84-1.84-1.41 1.41L5 16l4.24-4.24-1.41-1.41-1.82 1.82c0-.06-.01-.11-.01-.17 0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7c-1.9 0-3.62-.76-4.88-1.99L6.7 18.42C8.32 20.01 10.55 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm2 8v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z" }),
  "LockResetOutlined"
);
const LogoDevIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.68 14.98H6V9h1.71c1.28 0 1.71 1.03 1.71 1.71v2.56c0 .68-.42 1.71-1.74 1.71zm4.7-3.52v1.07H11.2v1.39h1.93v1.07h-2.25c-.4.01-.74-.31-.75-.71V9.75c-.01-.4.31-.74.71-.75h2.28v1.07H11.2v1.39h1.18zm4.5 2.77c-.48 1.11-1.33.89-1.71 0L13.77 9h1.18l1.07 4.11L17.09 9h1.18l-1.39 5.23z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M7.77 10.12h-.63v3.77h.63c.14 0 .28-.05.42-.16.14-.1.21-.26.21-.47v-2.52c0-.21-.07-.37-.21-.47-.14-.1-.28-.15-.42-.15z" }, "1")],
  "LogoDevOutlined"
);
const LogoutIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z" }),
  "LogoutOutlined"
);
const LooksIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0-4C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z" }),
  "LooksOutlined"
);
const Looks3Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9c0-1.11-.9-2-2-2H9v2h4v2h-2v2h2v2H9v2h4c1.1 0 2-.89 2-2z" }),
  "Looks3Outlined"
);
const Looks4Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.04 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-14V5h14v14zm-6-2h2V7h-2v4h-2V7h-2v6h4z" }),
  "Looks4Outlined"
);
const Looks5Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4v-2c0-1.11-.9-2-2-2h-2V9h4V7H9v6h4v2H9v2h4c1.1 0 2-.89 2-2z" }),
  "Looks5Outlined"
);
const Looks6Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 17h2c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V9h4V7h-4c-1.1 0-2 .89-2 2v6c0 1.11.9 2 2 2zm0-4h2v2h-2v-2zm8-10H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }),
  "Looks6Outlined"
);
const LooksOneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2V7h-4v2h2z" }),
  "LooksOneOutlined"
);
const LooksTwoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V9c0-1.11-.9-2-2-2H9v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z" }),
  "LooksTwoOutlined"
);
const LoopIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" }),
  "LoopOutlined"
);
const LoupeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.51-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }),
  "LoupeOutlined"
);
const LowPriorityIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 5h8v2h-8V5zm0 5.5h8v2h-8v-2zm0 5.5h8v2h-8v-2zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z" }),
  "LowPriorityOutlined"
);
const LoyaltyIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01 4 11V4h7v-.01l9 9-7 7.02z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "6.5", cy: "6.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("path", { d: "M8.9 12.55c0 .57.23 1.07.6 1.45l3.5 3.5 3.5-3.5c.37-.37.6-.89.6-1.45 0-1.13-.92-2.05-2.05-2.05-.57 0-1.08.23-1.45.6l-.6.6-.6-.59c-.37-.38-.89-.61-1.45-.61-1.13 0-2.05.92-2.05 2.05z" }, "2")],
  "LoyaltyOutlined"
);
const LteMobiledataIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 14h3v2H4V8h2v6zm3-4h2v6h2v-6h2V8H9v2zm12 0V8h-5v8h5v-2h-3v-1h3v-2h-3v-1h3z" }),
  "LteMobiledataOutlined"
);
const LtePlusMobiledataIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 14h3v2H1V8h2v6zm2-4h2v6h2v-6h2V8H5v2zm7 6h5v-2h-3v-1h3v-2h-3v-1h3V8h-5v8zm12-5h-2V9h-2v2h-2v2h2v2h2v-2h2v-2z" }),
  "LtePlusMobiledataOutlined"
);
const LuggageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.5 18H8V9h1.5v9zm3.25 0h-1.5V9h1.5v9zM16 18h-1.5V9H16v9zm1-12h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2 0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6.5-2.5h3V6h-3V3.5zM17 19H7V8h10v11z" }),
  "LuggageOutlined"
);
const LunchDiningIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3H2v3zm2-1h16v1H4v-1zm14.66-6.5c-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.4.98 3.32 1l-.01-1.98c-1.61-.33-1.62-1.02-3.33-1.02zM22 9c.02-4-4.28-6-10-6C6.29 3 2 5 2 9v1h20V9zM4.18 8C5.01 5.81 8.61 5 12 5c3.31 0 5.93.73 7.19 1.99.3.31.52.64.65 1.01H4.18z" }),
  "LunchDiningOutlined"
);
const MailIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z" }),
  "MailOutlined"
);
const MailOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" }),
  "MailOutlineOutlined"
);
const MaleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18 6 16.43 6 14.5 7.57 11 9.5 11zm0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9z" }),
  "MaleOutlined"
);
const ManIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "4", r: "2" }, "1")],
  "ManOutlined"
);
const ManageAccountsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01.1-.7.3-1.37.59-1.98-.22-.02-.44-.03-.67-.03-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2H4zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10.75 10c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }),
  "ManageAccountsOutlined"
);
const ManageSearchIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 9H2V7h5v2zm0 3H2v2h5v-2zm13.59 7-3.83-3.83c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L22 17.59 20.59 19zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zM2 19h10v-2H2v2z" }),
  "ManageSearchOutlined"
);
const MapIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99 3-1.01v11.7l-3 1.16V6.46zm14 11.08-3 1.01V6.86l3-1.16v11.84z" }),
  "MapOutlined"
);
const MapsHomeWorkIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M17 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM1 11v10h6v-5h2v5h6V11L8 6l-7 5zm12 8h-2v-5H5v5H3v-7l5-3.5 5 3.5v7z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M10 3v1.97l2 1.43V5h9v14h-4v2h6V3z" }, "1")],
  "MapsHomeWorkOutlined"
);
const MapsUgcIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-1.18 0-2.34-.26-3.43-.78-.27-.13-.56-.19-.86-.19-.19 0-.38.03-.56.08l-3.2.94.94-3.2c.14-.47.1-.98-.11-1.42C4.26 14.34 4 13.18 4 12c0-4.41 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97c1.31.61 2.75.97 4.29.97 5.52 0 10-4.48 10-10S17.52 2 12 2z" }, "0"), /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M13 8h-2v3H8v2h3v3h2v-3h3v-2h-3z" }, "1")],
  "MapsUgcOutlined"
);
const MarginIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 3v18h18V3H3zm16 16H5V5h14v14zM11 7h2v2h-2V7zM7 7h2v2H7V7zm8 0h2v2h-2V7zm-8 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" }),
  "MarginOutlined"
);
const MarkAsUnreadIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M16.23 7h2.6c-.06-.47-.36-.94-.79-1.17L10.5 2 2.8 5.83c-.48.26-.8.81-.8 1.34V15c0 1.1.9 2 2 2V7.4L10.5 4l5.73 3z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M20 8H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm0 11H7v-7l6.5 3.33L20 12v7zm-6.5-5.67L7 10h13l-6.5 3.33z" }, "1")],
  "MarkAsUnreadOutlined"
);
const MarkChatReadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 18H6l-4 4V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v7h-2V4H4v12h8v2zm11-3.66-1.41-1.41-4.24 4.24-2.12-2.12-1.41 1.41L17.34 20 23 14.34z" }),
  "MarkChatReadOutlined"
);
const MarkChatUnreadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 6.98V16c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1s.04.68.1 1H4v12h16V7.9c.74-.15 1.42-.48 2-.92zM16 3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" }),
  "MarkChatUnreadOutlined"
);
const MarkEmailReadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h8v-2H4V8l8 5 8-5v5h2V6c0-1.1-.9-2-2-2zm-8 7L4 6h16l-8 5zm5.34 11-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z" }),
  "MarkEmailReadOutlined"
);
const MarkEmailUnreadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 8.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h10.1c-.06.32-.1.66-.1 1s.04.68.1 1H4l8 5 3.67-2.29c.47.43 1.02.76 1.63.98L12 13 4 8v10h16V9.9c.74-.15 1.42-.48 2-.92zM16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" }),
  "MarkEmailUnreadOutlined"
);
const MarkUnreadChatAltIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 16H4V4h10.1c-.08-.39-.18-1.11 0-2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V6.98c-.58.44-1.26.77-2 .92V16z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "19", cy: "3", r: "3" }, "1"), /* @__PURE__ */ jsx("path", { d: "M6 12h8v2H6zm0-3h12v2H6zm0-1h12v-.1c-1.21-.25-2.25-.95-2.97-1.9H6v2z" }, "2")],
  "MarkUnreadChatAltOutlined"
);
const MarkunreadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" }),
  "MarkunreadOutlined"
);
const MarkunreadMailboxIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" }),
  "MarkunreadMailboxOutlined"
);
const MasksIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.5 6c-1.31 0-2.37 1.01-2.48 2.3-1.88-.5-2.84-1.8-5.02-1.8-2.19 0-3.14 1.3-5.02 1.8C6.87 7.02 5.81 6 4.5 6 3.12 6 2 7.12 2 8.5V9c0 6 3.6 7.81 6.52 7.98C9.53 17.62 10.72 18 12 18s2.47-.38 3.48-1.02C18.4 16.81 22 15 22 9v-.5C22 7.12 20.88 6 19.5 6zm-16 3v-.5c0-.55.45-1 1-1s1 .45 1 1v3c0 1.28.38 2.47 1.01 3.48C4.99 14.27 3.5 12.65 3.5 9zM7 11.5V9.85c1.12-.23 1.95-.69 2.66-1.08C10.48 8.33 11.07 8 12 8c.93 0 1.52.33 2.34.78.71.39 1.54.84 2.66 1.08v1.65c0 2.76-2.24 5-5 5s-5-2.25-5-5.01zM20.5 9c0 3.65-1.49 5.27-3.01 5.98.64-1.01 1.01-2.2 1.01-3.48v-3c0-.55.45-1 1-1s1 .45 1 1V9zm-9.81 1.48c-.44.26-.96.56-1.69.76V10.2c.48-.17.84-.38 1.18-.58C10.72 9.3 11.23 9 12 9s1.27.3 1.8.62c.34.2.71.42 1.2.59v1.04c-.75-.21-1.26-.51-1.71-.78-.46-.27-.8-.47-1.29-.47s-.84.2-1.31.48z" }),
  "MasksOutlined"
);
const MaximizeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 3h18v2H3V3z" }),
  "MaximizeOutlined"
);
const MediaBluetoothOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 6.17V3h6v4h-4v1.17l-2-2zM19.42 15 22 17.57l-.8.8-6.78-6.78.8-.8 2.75 2.75V9h.6L22 12.43 19.42 15zm-.25-1.45 1.13-1.13-1.13-1.13v2.26zm2.02 7.64-1.41 1.41-3.98-3.98-.58.58-.85-.85.58-.58L11 13.83V17c0 2.21-1.78 4-3.99 4S3 19.21 3 17s1.79-4 4.01-4c.73 0 1.41.21 2 .55v-1.72L1.39 4.22 2.8 2.81l18.39 18.38z" }),
  "MediaBluetoothOffOutlined"
);
const MediaBluetoothOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m9 3 .01 10.55c-.6-.34-1.28-.55-2-.55C4.79 13 3 14.79 3 17s1.79 4 4.01 4S11 19.21 11 17V7h4V3H9zm12 9.43L17.57 9h-.6v4.55l-2.75-2.75-.85.85L16.73 15l-3.35 3.35.85.85 2.75-2.75V21h.6L21 17.57 18.42 15 21 12.43zm-2.83-1.13 1.13 1.13-1.13 1.13V11.3zm1.13 6.27-1.13 1.13v-2.26l1.13 1.13z" }),
  "MediaBluetoothOnOutlined"
);
const MediationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18 16 4-4-4-4v3h-5.06C12.6 7.9 10.68 5.28 8 3.95 7.96 2.31 6.64 1 5 1 3.34 1 2 2.34 2 4s1.34 3 3 3c.95 0 1.78-.45 2.33-1.14C9.23 6.9 10.6 8.77 10.92 11h-3.1C7.4 9.84 6.3 9 5 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.3 0 2.4-.84 2.82-2h3.1c-.32 2.23-1.69 4.1-3.58 5.14C6.78 17.45 5.95 17 5 17c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.64 0 2.96-1.31 2.99-2.95 2.68-1.33 4.6-3.95 4.94-7.05H18v3z" }),
  "MediationOutlined"
);
const MedicalServicesIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3z" }, "1")],
  "MedicalServicesOutlined"
);
const MedicationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.5 15H8v-3h2.5V9.5h3V12H16v3h-2.5v2.5h-3V15zM19 8v11c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2zm-2 0H7v11h10V8zm1-5H6v2h12V3z" }),
  "MedicationOutlined"
);
const MedicationLiquidIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 3h12v2H3zM2 21h14V6H2v15zm3-9h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5v-3zm15-6c-1.68 0-3 1.76-3 4 0 1.77.83 3.22 2 3.76V21h2v-7.24c1.17-.54 2-1.99 2-3.76 0-2.24-1.32-4-3-4z" }),
  "MedicationLiquidOutlined"
);
const MeetingRoomIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14zm-3-8h2v2h-2z" }),
  "MeetingRoomOutlined"
);
const MemoryIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z" }),
  "MemoryOutlined"
);
const MenuBookIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z" }, "1")],
  "MenuBookOutlined"
);
const MergeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.41 21 5 19.59l4.83-4.83c.75-.75 1.17-1.77 1.17-2.83v-5.1L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83L19 19.59 17.59 21 12 15.41 6.41 21z" }),
  "MergeOutlined"
);
const MergeTypeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 20.41 18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z" }),
  "MergeTypeOutlined"
);
const MessageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" }),
  "MessageOutlined"
);
const MicIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, "1")],
  "MicOutlined"
);
const MicExternalOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 5c0-1.66-1.34-3-3-3-.62 0-1.19.19-1.67.5l4.15 4.15C9.8 6.18 10 5.61 10 5zm4 1c0-1.1.9-2 2-2s2 .9 2 2v9.17l2 2V6c0-2.21-1.79-4-4-4s-4 1.79-4 4v3.17l2 2V6zM2.1 2.1.69 3.51 5.17 8H4l1 10h1c0 2.21 1.79 4 4 4s4-1.79 4-4v-1.17l6.49 6.49 1.41-1.41L2.1 2.1zM7.19 16h-.38l-.6-6h.96l.56.56L7.19 16zM12 18c0 1.1-.9 2-2 2s-2-.9-2-2h1l.56-5.61L12 14.83V18z" }),
  "MicExternalOffOutlined"
);
const MicExternalOnIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M9.22 7c.48-.53.78-1.23.78-2 0-1.66-1.34-3-3-3S4 3.34 4 5c0 .77.3 1.47.78 2h4.44z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M16 2c-2.21 0-4 1.79-4 4v12c0 1.1-.9 2-2 2s-2-.9-2-2h1l1-10H4l1 10h1c0 2.21 1.79 4 4 4s4-1.79 4-4V6c0-1.1.9-2 2-2s2 .9 2 2v16h2V6c0-2.21-1.79-4-4-4zM7.19 16h-.38l-.6-6h1.58l-.6 6z" }, "1")],
  "MicExternalOnOutlined"
);
const MicNoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }),
  "MicNoneOutlined"
);
const MicOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.8 4.9c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 3.91L15 10.6V5c0-1.66-1.34-3-3-3-1.54 0-2.79 1.16-2.96 2.65l1.76 1.76V4.9zM19 11h-1.7c0 .58-.1 1.13-.27 1.64l1.27 1.27c.44-.88.7-1.87.7-2.91zM4.41 2.86 3 4.27l6 6V11c0 1.66 1.34 3 3 3 .23 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.55-.9l4.2 4.2 1.41-1.41L4.41 2.86z" }),
  "MicOffOutlined"
);
const MicrowaveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h10v12H4V6zm16 12h-4V6h4v12zm-1-9h-2V7h2v2zm-1 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-7.75-1c-.79 0-1.37-.38-1.79-.66-.33-.22-.52-.34-.71-.34-.37 0-.8.41-.95.61l-1.42-1.42c.35-.4 1.21-1.19 2.37-1.19.8 0 1.39.39 1.81.67.31.21.51.33.69.33.37 0 .8-.41.95-.61l1.42 1.42c-.36.4-1.21 1.19-2.37 1.19zm0-5c-.79 0-1.37-.38-1.79-.66-.33-.22-.52-.34-.71-.34-.37 0-.8.41-.95.61L5.37 9.19C5.73 8.79 6.59 8 7.75 8c.8 0 1.39.39 1.81.67.31.21.51.33.69.33.37 0 .8-.41.95-.61l1.42 1.42c-.36.4-1.21 1.19-2.37 1.19z" }),
  "MicrowaveOutlined"
);
const MilitaryTechIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86zm-6 .64-2-1.2V4h2v7.07zm4-1.2-2 1.2V4h2v5.87z" }),
  "MilitaryTechOutlined"
);
const MinimizeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 19h12v2H6v-2z" }),
  "MinimizeOutlined"
);
const MiscellaneousServicesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14.17 13.71 1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85c-.03-.16-.18-.29-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm13.11 7.67-.96-.74c.02-.14.04-.29.04-.44 0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18c-.01-.12-.11-.2-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45c-.1-.04-.22 0-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74c-.02.14-.03.29-.03.44 0 .15.01.3.03.44l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16c-.74 0-1.35-.6-1.35-1.35s.6-1.35 1.35-1.35 1.35.6 1.35 1.35-.61 1.35-1.35 1.35z" }),
  "MiscellaneousServicesOutlined"
);
const MissedVideoCallIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zm-2-1.83V16H5V8h10v.67zm-7.89 2.44L11 15l3.77-3.79-.78-.79L11 13.43l-3.11-3.1h2.55V9.22H6v4.44h1.11z" }),
  "MissedVideoCallOutlined"
);
const MmsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-5.5-8L11 12.51 8.5 9.5 5 14h14z" }),
  "MmsOutlined"
);
const MobileFriendlyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27-5.91 5.93z" }),
  "MobileFriendlyOutlined"
);
const MobileOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 5v8.61l2 2V3c0-1.1-.9-2-2-2H7c-.71 0-1.33.37-1.68.93L8.39 5H17zM1.49 3.76 5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75l1.72 1.72 1.41-1.41L2.9 2.35 1.49 3.76zM7 9.27 16.73 19H7V9.27z" }),
  "MobileOffOutlined"
);
const MobileScreenShareIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 1H7c-1.1 0-1.99.85-1.99 1.95v18C5.01 22.05 5.9 23 7 23h10c1.1 0 2-.95 2-2.05v-18C19 1.85 18.1 1 17 1zm0 18H7V5h10v14zm-4.2-5.76v1.75L16 12l-3.2-2.98v1.7c-3.11.43-4.35 2.56-4.8 4.7 1.11-1.5 2.58-2.18 4.8-2.18z" }),
  "MobileScreenShareOutlined"
);
const MobiledataOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m16 6.82 1.59 1.59L19 7l-4-4-4 4 1.41 1.41L14 6.82v4.35l2 2zM1.39 4.22 8 10.83v6.35l-1.59-1.59L5 17l4 4 4-4-1.41-1.41L10 17.18v-4.35l9.78 9.78 1.41-1.42L2.81 2.81z" }),
  "MobiledataOffOutlined"
);
const ModeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" }),
  "ModeOutlined"
);
const ModeCommentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 17.17 18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z" }),
  "ModeCommentOutlined"
);
const ModeEditIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34z" }),
  "ModeEditOutlined"
);
const ModeEditOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34z" }),
  "ModeEditOutlineOutlined"
);
const ModeNightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.5 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07 1.91-2.16 3.01-4.98 3.01-7.93s-1.1-5.77-3.01-7.93C8.82 4.02 9.16 4 9.5 4m0-2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z" }),
  "ModeNightOutlined"
);
const ModeOfTravelIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.31 18.9c-.96 1-2.06 2.03-3.31 3.1-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2c4.19 0 7.99 3.21 8 8.17l2.09-2.09L23.5 9.5 19 14l-4.5-4.5 1.41-1.41L18 10.17C17.99 6.55 15.34 4 12 4c-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14.64-.59 1.23-1.16 1.77-1.71-.17-.34-.27-.72-.27-1.12 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5S17.38 19 16 19c-.24 0-.47-.03-.69-.1z" }),
  "ModeOfTravelOutlined"
);
const ModeStandbyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" }),
  "ModeStandbyOutlined"
);
const ModelTrainingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.5 13.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5zm-2.5 6h-2V21h2v-1.5zm6-6.5c0 1.68-.59 3.21-1.58 4.42l1.42 1.42C20.18 17.27 21 15.23 21 13c0-2.74-1.23-5.19-3.16-6.84l-1.42 1.42C17.99 8.86 19 10.82 19 13zm-3-8-4-4v3c-4.97 0-9 4.03-9 9 0 2.23.82 4.27 2.16 5.84l1.42-1.42C5.59 16.21 5 14.68 5 13c0-3.86 3.14-7 7-7v3l4-4z" }),
  "ModelTrainingOutlined"
);
const MonetizationOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" }),
  "MonetizationOnOutlined"
);
const MoneyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 16h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm1-6h1v4h-1v-4zm-7 6h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm1-6h1v4h-1v-4zM5 8h2v8H5zM2 4v16h20V4H2zm18 14H4V6h16v12z" }),
  "MoneyOutlined"
);
const MoneyOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.39.08-.75.21-1.1.36l1.51 1.51c.32-.08.69-.13 1.09-.13zM5.47 3.92 4.06 5.33 7.5 8.77c0 2.08 1.56 3.22 3.91 3.91l3.51 3.51c-.34.49-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.83-.55 2.46-1.12l2.22 2.22 1.41-1.41L5.47 3.92z" }),
  "MoneyOffOutlined"
);
const MoneyOffCsredIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.39.08-.75.21-1.1.36l1.51 1.51c.32-.08.69-.13 1.09-.13zM5.47 3.92 4.06 5.33 7.5 8.77c0 2.08 1.56 3.22 3.91 3.91l3.51 3.51c-.34.49-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.83-.55 2.46-1.12l2.22 2.22 1.41-1.41L5.47 3.92z" }),
  "MoneyOffCsredOutlined"
);
const MonitorIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" }),
  "MonitorOutlined"
);
const MonitorHeartIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v3h2V6h16v3h2V6c0-1.1-.9-2-2-2zm0 14H4v-3H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2v3z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M14.89 7.55c-.34-.68-1.45-.68-1.79 0L10 13.76l-1.11-2.21A.988.988 0 0 0 8 11H2v2h5.38l1.72 3.45c.18.34.52.55.9.55s.72-.21.89-.55L14 10.24l1.11 2.21c.17.34.51.55.89.55h6v-2h-5.38l-1.73-3.45z" }, "1")],
  "MonitorHeartOutlined"
);
const MonitorWeightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM12 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-1 3.5h-1v-1h1v1zm1.5 0h-1v-1h1v1zm1.5 0h-1v-1h1v1z" }),
  "MonitorWeightOutlined"
);
const MonochromePhotosIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z" }),
  "MonochromePhotosOutlined"
);
const MoodIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" }),
  "MoodOutlined"
);
const MoodBadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 2.5c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z" }),
  "MoodBadOutlined"
);
const MopedIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM4 14v-1c0-1.1.9-2 2-2h2v3H4zm3 3c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }, "1")],
  "MopedOutlined"
);
const MoreIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "9", cy: "12", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "14", cy: "12", r: "1.5" }, "2"), /* @__PURE__ */ jsx("circle", { cx: "19", cy: "12", r: "1.5" }, "3")],
  "MoreOutlined"
);
const MoreTimeIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M10 8v6l4.7 2.9.8-1.2-4-2.4V8z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M17.92 12c.05.33.08.66.08 1 0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23-5 0-9 4-9 9s4 9 9 9 9-4 9-9c0-.34-.02-.67-.06-1h-2.02z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M20 5V2h-2v3h-3v2h3v3h2V7h3V5z" }, "2")],
  "MoreTimeOutlined"
);
const MosqueIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M24 7c0-1.1-2-3-2-3s-2 1.9-2 3c0 .74.4 1.38 1 1.72V13h-2v-2c0-.95-.66-1.74-1.55-1.94.34-.58.55-1.25.55-1.97 0-1.31-.65-2.53-1.74-3.25L12 1 7.74 3.84C6.65 4.56 6 5.78 6 7.09c0 .72.21 1.39.55 1.96C5.66 9.26 5 10.05 5 11v2H3V8.72c.6-.34 1-.98 1-1.72 0-1.1-2-3-2-3S0 5.9 0 7c0 .74.4 1.38 1 1.72V21h10v-4c0-.55.45-1 1-1s1 .45 1 1v4h10V8.72c.6-.34 1-.98 1-1.72zM8.85 5.5 12 3.4l3.15 2.1c.53.36.85.95.85 1.59C16 8.14 15.14 9 14.09 9H9.91C8.86 9 8 8.14 8 7.09c0-.64.32-1.23.85-1.59zM21 19h-6v-2c0-1.65-1.35-3-3-3s-3 1.35-3 3v2H3v-4h4v-4h10v4h4v4z" }),
  "MosqueOutlined"
);
const MotionPhotosAutoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m2.88 7.88 1.54 1.54C4.15 10.23 4 11.1 4 12c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8c-.9 0-1.77.15-2.58.42L7.89 2.89C9.15 2.32 10.54 2 12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12c0-1.47.32-2.86.88-4.12zM7 5.5C7 6.33 6.33 7 5.5 7S4 6.33 4 5.5 4.67 4 5.5 4 7 4.67 7 5.5zm5.03 3.49h-.07L10.8 12.3h2.39l-1.16-3.31zm-.74-1.49h1.43l3.01 8h-1.39l-.72-2.04h-3.23l-.73 2.04H8.28l3.01-8z" }),
  "MotionPhotosAutoOutlined"
);
const MotionPhotosOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2.81 2.81 1.39 4.22l2.27 2.27C2.61 8.07 2 9.96 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.42L2.81 2.81zM12 20c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06l10.93 10.94C14.86 19.59 13.48 20 12 20zm0-16c4.41 0 8 3.59 8 8 0 1.48-.41 2.86-1.12 4.05l1.45 1.45C21.39 15.93 22 14.04 22 12c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66l1.45 1.45C9.14 4.41 10.52 4 12 4z" }),
  "MotionPhotosOffOutlined"
);
const MouseIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8V9zm-2 0h-5V3.16c2.81.47 4.96 2.9 5 5.84zm-7-5.84V9H6c.04-2.94 2.19-5.37 5-5.84zM18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12v4z" }),
  "MouseOutlined"
);
const MoveDownIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 11c0 2.45 1.76 4.47 4.08 4.91l-1.49-1.49L7 13l4 4.01L7 21l-1.41-1.41 1.58-1.58v-.06C3.7 17.54 1 14.58 1 11c0-3.87 3.13-7 7-7h3v2H8c-2.76 0-5 2.24-5 5zm19 0V4h-9v7h9zm-2-2h-5V6h5v3zm-7 4h9v7h-9z" }),
  "MoveDownOutlined"
);
const MoveToInboxIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 9h-2.55V6h-2.9v3H8l4 4zm3-6H4.99C3.88 3 3 3.9 3 5v14c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5l-.01-9H19v9z" }),
  "MoveToInboxOutlined"
);
const MoveUpIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 13c0-2.45 1.76-4.47 4.08-4.91l-1.49 1.5L7 11l4-4.01L7 3 5.59 4.41l1.58 1.58v.06C3.7 6.46 1 9.42 1 13c0 3.87 3.13 7 7 7h3v-2H8c-2.76 0-5-2.24-5-5zm10 0v7h9v-7h-9zm7 5h-5v-3h5v3zM13 4h9v7h-9z" }),
  "MoveUpOutlined"
);
const MovieIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z" }),
  "MovieOutlined"
);
const MovieCreationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z" }),
  "MovieCreationOutlined"
);
const MovieFilterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m10 11-.94 2.06L7 14l2.06.94L10 17l.94-2.06L13 14l-2.06-.94zm8.01-7 2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4h-3l-2-4h-1c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 1.99-.9 1.99-2V4h-3.99zm2 14h-16V6.47L5.77 10H16l-.63 1.37L14 12l1.37.63L16 14l.63-1.37L18 12l-1.37-.63L16 10h4.01v8z" }),
  "MovieFilterOutlined"
);
const MovingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 9.42V12h2V6h-6v2h2.58l-4.46 4.46c-.39.39-1.02.39-1.41 0l-1.17-1.17c-1.17-1.17-3.07-1.17-4.24 0L2 16.59 3.41 18l5.29-5.29c.39-.39 1.02-.39 1.41 0l1.17 1.17c1.17 1.17 3.07 1.17 4.24 0L20 9.42z" }),
  "MovingOutlined"
);
const MpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M17 9h-3.5v6H15v-1.5h2c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-.5 3H15v-1.5h1.5V12zm-5-3H7c-.55 0-1 .45-1 1v5h1.5v-4.5h1v3H10v-3h1V15h1.5v-5c0-.55-.45-1-1-1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h14v14H5z" }, "1")],
  "MpOutlined"
);
const MultilineChartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m22 6.92-1.41-1.41-2.85 3.21C15.68 6.4 12.83 5 9.61 5 6.72 5 4.07 6.16 2 8l1.42 1.42C5.12 7.93 7.27 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-4-4L2 16.99l1.5 1.5 6-6.01 4 4 4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14L22 6.92z" }),
  "MultilineChartOutlined"
);
const MultipleStopIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17 4 4 4-4 4V9h-4V7h4V4zm-7 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM6 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm1 10h4v-2H7v-3l-4 4 4 4v-3zm7 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" }),
  "MultipleStopOutlined"
);
const MuseumIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-4 9H6V9h12v11z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m10 14 2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2z" }, "1")],
  "MuseumOutlined"
);
const MusicNoteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 3 .01 10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4.01 4S14 19.21 14 17V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }),
  "MusicNoteOutlined"
);
const MusicOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 7h4V3h-6v4.61l2 2zm-2 3.44L4.41 2.86 3 4.27l9 9v.28c-.94-.54-2.1-.75-3.33-.32-1.34.48-2.37 1.67-2.61 3.07-.46 2.74 1.86 5.08 4.59 4.65 1.96-.31 3.35-2.11 3.35-4.1v-1.58L19.73 21l1.41-1.41L12 10.44zM10 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }),
  "MusicOffOutlined"
);
const MusicVideoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z" }),
  "MusicVideoOutlined"
);
const MyLocationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" }),
  "MyLocationOutlined"
);
const NatIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M6.82 13H11v-2H6.82C6.4 9.84 5.3 9 4 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.3 0 2.4-.84 2.82-2zM4 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m23 12-4-3v2h-4.05c-.5-5.05-4.76-9-9.95-9v2c4.42 0 8 3.58 8 8s-3.58 8-8 8v2c5.19 0 9.45-3.95 9.95-9H19v2l4-3z" }, "1")],
  "NatOutlined"
);
const NatureIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 16.12h-.03c3.49-.4 6.2-3.36 6.2-6.95 0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88zM7.17 9.17c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" }),
  "NatureOutlined"
);
const NaturePeopleIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "4.5", cy: "9.5", r: "1.5" }, "0"), /* @__PURE__ */ jsx("path", { d: "M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88c3.47-.41 6.17-3.36 6.17-6.95zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" }, "1")],
  "NaturePeopleOutlined"
);
const NavigateBeforeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.61 7.41 14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" }),
  "NavigateBeforeOutlined"
);
const NavigateNextIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" }),
  "NavigateNextOutlined"
);
const NavigationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 7.27 4.28 10.43-3.47-1.53-.81-.36-.81.36-3.47 1.53L12 7.27M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" }),
  "NavigationOutlined"
);
const NearMeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17.27 6.73-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33 10.13-4.23M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" }),
  "NearMeOutlined"
);
const NearMeDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 6.34 21 3l-3.34 9-1.56-1.56 1.5-4.05-4.05 1.5L12 6.34zm9.19 14.85-5.07-5.07L14.31 21H12.9l-2.83-7.07L3 11.1V9.69l4.88-1.81-5.07-5.07L4.22 1.4 22.6 19.78l-1.41 1.41zm-6.62-6.62L9.43 9.43l-2.71 1.01 4.89 1.95 1.95 4.89 1.01-2.71z" }),
  "NearMeDisabledOutlined"
);
const NearbyErrorIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 7.57 4.42 4.42L12 16.41l-4.42-4.42L12 7.57zm0 11.62-7.2-7.2 7.2-7.2 6 6V7.16l-4.58-4.58c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0L18 16.82v-3.63l-6 6zm8 .81h2v2h-2v-2zm2-10h-2v8h2v-8" }),
  "NearbyErrorOutlined"
);
const NearbyOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.41 13.42 18.83 16l-1.81-1.81L19.2 12 12 4.8 9.81 6.99 8 5.17l2.58-2.58c.78-.78 2.05-.78 2.83 0l8 8c.79.78.79 2.04 0 2.83zm-.22 7.77-1.41 1.41L16 18.83l-2.58 2.58c-.78.78-2.05.78-2.83 0l-8-8c-.78-.78-.78-2.05 0-2.83L5.17 8 1.39 4.22 2.8 2.81l18.39 18.38zm-7-4.17-1.39-1.39-.8.8L7.58 12l.8-.8-1.4-1.39L4.8 12l7.2 7.2 2.19-2.18zM16.42 12 12 7.58l-.8.8 4.42 4.42.8-.8z" }),
  "NearbyOffOutlined"
);
const NetworkCellIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 22h20V2L2 22zm18-2h-3V9.83l3-3V20z" }),
  "NetworkCellOutlined"
);
const NetworkCheckIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM1 9l2 2c2.88-2.88 6.79-4.08 10.53-3.62l1.19-2.68C9.89 3.84 4.74 5.27 1 9zm20 2 2-2c-1.64-1.64-3.55-2.82-5.59-3.57l-.53 2.82c1.5.62 2.9 1.53 4.12 2.75zm-4 4 2-2c-.8-.8-1.7-1.42-2.66-1.89l-.55 2.92c.42.27.83.59 1.21.97zM5 13l2 2c1.13-1.13 2.56-1.79 4.03-2l1.28-2.88c-2.63-.08-5.3.87-7.31 2.88z" }),
  "NetworkCheckOutlined"
);
const NetworkLockedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 16v-.5c0-1.38-1.12-2.5-2.5-2.5S17 14.12 17 15.5v.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.5zM18 5.83v5.43c.47-.16.97-.26 1.5-.26.17 0 .33.03.5.05V1L1 20h13v-2H5.83L18 5.83z" }),
  "NetworkLockedOutlined"
);
const NetworkWifiIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm0 4c-2.86 0-5.5.94-7.65 2.51L2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07l-1.43 1.43C17.5 8.94 14.86 8 12 8z" }),
  "NetworkWifiOutlined"
);
const NewReleasesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-4.51 2.11.26 2.79-2.74.62-1.43 2.41L12 18.82l-2.58 1.11-1.43-2.41-2.74-.62.26-2.8L3.66 12l1.85-2.12-.26-2.78 2.74-.61 1.43-2.41L12 5.18l2.58-1.11 1.43 2.41 2.74.62-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z" }),
  "NewReleasesOutlined"
);
const NewspaperIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m22 3-1.67 1.67L18.67 3 17 4.67 15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3 7 4.67 5.33 3 3.67 4.67 2 3v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3zM11 19H4v-6h7v6zm9 0h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4H4V8h16v3z" }),
  "NewspaperOutlined"
);
const NextPlanIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M15.97 11.03C14.87 9.79 13.28 9 11.5 9c-2.82 0-5.18 1.95-5.82 4.56l.96.32C7.15 11.66 9.13 10 11.5 10c1.51 0 2.85.68 3.76 1.74L13 14h5V9l-2.03 2.03z" }, "1")],
  "NextPlanOutlined"
);
const NextWeekIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m11 18.5 4-4-4-4-1 1 3 3-3 3zM20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 15H4V9h16v11z" }),
  "NextWeekOutlined"
);
const NfcIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM18 6h-5c-1.1 0-2 .9-2 2v2.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12V6z" }),
  "NfcOutlined"
);
const NightShelterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 5.5 6 4.5v9H6v-9l6-4.5M12 3 4 9v12h16V9l-8-6zm3 9h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4c0-1.1-.9-2-2-2zm-5.25.5c-.69 0-1.25.56-1.25 1.25S9.06 15 9.75 15 11 14.44 11 13.75s-.56-1.25-1.25-1.25z" }),
  "NightShelterOutlined"
);
const NightlifeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1 5h14l-6 9v4h2v2H5v-2h2v-4L1 5zm9.1 4 1.4-2H4.49l1.4 2h4.21zM17 5h5v3h-3v9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3c.35 0 .69.06 1 .17V5z" }),
  "NightlifeOutlined"
);
const NightlightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 4c.34 0 .68.02 1.01.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93c-.33.05-.67.07-1.01.07-4.41 0-8-3.59-8-8s3.59-8 8-8m0-2C8.48 2 4 6.48 4 12s4.48 10 10 10c1.82 0 3.53-.5 5-1.35-2.99-1.73-5-4.95-5-8.65s2.01-6.92 5-8.65C17.53 2.5 15.82 2 14 2z" }),
  "NightlightOutlined"
);
const NightlightRoundIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.5 22c1.05 0 2.05-.16 3-.46-4.06-1.27-7-5.06-7-9.54s2.94-8.27 7-9.54c-.95-.3-1.95-.46-3-.46-5.52 0-10 4.48-10 10s4.48 10 10 10z" }),
  "NightlightRoundOutlined"
);
const NightsStayIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19.78 17.51c-2.47 0-6.57-1.33-8.68-5.43-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.61-.26 1.28-.42 1.98-.42 0-3.09 1.73-5.77 4.3-7.1-.5 2.19-.54 5.04 1.04 8.1 1.57 3.04 4.18 4.95 6.8 5.86-1.23.74-2.65 1.15-4.13 1.15-.5 0-1-.05-1.48-.14-.37.7-.94 1.27-1.64 1.64.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-.17.01-.37.02-.57.02z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z" }, "1")],
  "NightsStayOutlined"
);
const NineKIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M11 14v-4c0-.55-.45-1-1-1H7.5c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2v1h-3V15H10c.55 0 1-.45 1-1zm-1.5-2.5H8V10h1.5v1.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M14.5 12.75 16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z" }, "2")],
  "NineKOutlined"
);
const NineKPlusIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M10 14v-4c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h1.5v1H6V15h3c.55 0 1-.45 1-1zm-1.5-2.5h-1V10h1v1.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M12.5 12.75 14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z" }, "2")],
  "NineKPlusOutlined"
);
const NineMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M14.5 10.5v-4c0-.55-.45-1-1-1H11c-.55 0-1 .45-1 1V8c0 .55.45 1 1 1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1zM13 8h-1.5V6.5H13V8z" }, "2")],
  "NineMpOutlined"
);
const NineteenMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M8.5 11.5H10v-6H7V7h1.5zm8-1v-4c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1V8c0 .55.45 1 1 1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1zM15 8h-1.5V6.5H15V8z" }, "2")],
  "NineteenMpOutlined"
);
const NoAccountsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M15.18 10.94c.2-.44.32-.92.32-1.44C15.5 7.57 13.93 6 12 6c-.52 0-1 .12-1.44.32l4.62 4.62z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.85.63-3.55 1.69-4.9l2.86 2.86c.21 1.56 1.43 2.79 2.99 2.99l2.2 2.2c-.57-.1-1.15-.15-1.74-.15-2.32 0-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12zm8 8c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.54-1.69 4.9z" }, "1")],
  "NoAccountsOutlined"
);
const NoBackpackIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.98 4.15c.01 0 .01-.01.02-.01V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86v9.17l-2-2V8c0-1.1-.9-2-2-2H8.83L6.98 4.15zM14.83 12l1.67 1.67V12h-1.67zm4.95 10.61-.85-.85c-.28.15-.59.24-.93.24H6c-1.1 0-2-.9-2-2V8c0-.36.06-.69.15-1.02L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM17.17 20l-6-6H7.5v-2h1.67L6 8.83V20h11.17z" }),
  "NoBackpackOutlined"
);
const NoCellIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 6v8.17l2 2V3c0-1.1-.9-1.99-2-1.99L7 1c-.85 0-1.58.55-1.87 1.3L8.83 6H17zM7 3h10v1H7V3zm14.19 18.19L19 19l-2-2L7 7 5 5 2.81 2.81 1.39 4.22 5 7.83V21c0 1.1.9 2 2 2h10c.85 0 1.58-.55 1.87-1.3l.91.91 1.41-1.42zM17 21H7v-1h10v1zM7 18V9.83L15.17 18H7z" }),
  "NoCellOutlined"
);
const NoDrinksIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.19 21.19 2.81 2.81 1.39 4.22l8.23 8.23L11 14v5H6v2h12v-.17l1.78 1.78 1.41-1.42zM13 19v-3.17L16.17 19H13zM7.83 5l-2-2H21v2l-6.2 6.97-1.42-1.42L14.77 9h-2.94l-2-2h6.74l1.78-2H7.83z" }),
  "NoDrinksOutlined"
);
const NoEncryptionIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2h-4.66l2 2H18v5.56l2 2V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.32 0-4.26 1.59-4.82 3.74L8.9 6.46V6zM4.41 4.81 3 6.22l2.04 2.04C4.42 8.6 4 9.25 4 10v10c0 1.1.9 2 2 2h12.78l1 1 1.41-1.41L4.41 4.81zM6 20V10h.78l10 10H6z" }),
  "NoEncryptionOutlined"
);
const NoEncryptionGmailerrorredIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2h-4.66l2 2H18v5.56l2 2V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.32 0-4.26 1.59-4.82 3.74L8.9 6.46V6zM4.41 4.81 3 6.22l2.04 2.04C4.42 8.6 4 9.25 4 10v10c0 1.1.9 2 2 2h12.78l1 1 1.41-1.41L4.41 4.81zM6 20V10h.78l10 10H6z" }),
  "NoEncryptionGmailerrorredOutlined"
);
const NoFlashIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.4 5.6H22L19 11V7h-1V2h4l-1.6 3.6zM16 11.4v1.77l2 2V11c0-.88-.72-1.6-1.6-1.6h-2.54L12.58 8h-1.75l3.4 3.4H16zM2.1 2.1.69 3.51l5.66 5.66-.21.23H3.6c-.88 0-1.6.72-1.6 1.6v9.4c0 .88.72 1.6 1.6 1.6h12.8c.75 0 1.38-.52 1.55-1.22l2.54 2.54 1.41-1.41L2.1 2.1zm9.4 13.4c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S9.17 14 10 14s1.5.67 1.5 1.5zm4.46 4.5H4v-8.6h3.02l.59-.65.15-.16 1.5 1.5c-1.58.34-2.76 1.73-2.76 3.41 0 1.93 1.57 3.5 3.5 3.5 1.68 0 3.07-1.18 3.42-2.76l2.55 2.55-.01 1.21z" }),
  "NoFlashOutlined"
);
const NoFoodIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1 21h15.01v.98c0 .56-.45 1.01-1.01 1.01H2.01c-.56 0-1.01-.45-1.01-1.01V21zm19.49 2.31L16 18.83V19H1v-2h13.17l-2-2H1c0-3.24 2.46-5.17 5.38-5.79l-5.7-5.7L2.1 2.1 13 13l2 2 6.9 6.9-1.41 1.41zM10.17 13l-2-2c-1.42.06-3.52.56-4.55 2h6.55zM23 5h-5V1h-2v4h-5l.23 2h9.56l-1 9.97 1.83 1.83L23 5z" }),
  "NoFoodOutlined"
);
const NoLuggageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m16 13.17-1.5-1.5V9H16v4.17zm3.78 9.44-1.85-1.85c-.28.15-.59.24-.93.24 0 .55-.45 1-1 1s-1-.45-1-1H9c0 .55-.45 1-1 1s-1-.45-1-1c-1.1 0-2-.9-2-2V8c0-.05.02-.1.02-.15L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM16.17 19l-3.42-3.42V18h-1.5v-3.92L9.5 12.33V18H8v-7.17l-1-1V19h9.17zM12.75 9h-.92l.92.92V9zM19 8v8.17l-2-2V8h-6.17l-.99-.99L9 6.17V3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v3h2c1.1 0 2 .9 2 2zm-8.5-2h3V3.5h-3V6z" }),
  "NoLuggageOutlined"
);
const NoMealsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 14V6c0-1.76 2.24-4 5-4v16.17l-2-2V14h-3zm4.49 9.31L10.02 12.85c-.33.09-.66.15-1.02.15v9H7v-9c-2.21 0-4-1.79-4-4V5.83L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM6.17 9 5 7.83V9h1.17zM9 2H7v2.17l2 2V2zm4 7V2h-2v6.17l1.85 1.85c.09-.33.15-.66.15-1.02z" }),
  "NoMealsOutlined"
);
const NoMeetingRoomIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 5v3.88l2 2V6h3v7.88l2 2V4h-5V3H6.12l2 2zM2.41 2.13 1 3.54l4 4V19H3v2h11v-4.46L20.46 23l1.41-1.41L2.41 2.13zM12 19H7V9.54l5 5V19z" }),
  "NoMeetingRoomOutlined"
);
const NoPhotographyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8.9 6.07 7.48 4.66 9 3h6l1.83 2H20c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16L20 17.17V7h-4.05l-1.83-2H9.88L8.9 6.07zm11.59 17.24L18.17 21H4c-1.1 0-2-.9-2-2V7c0-.59.27-1.12.68-1.49l-2-2L2.1 2.1l19.8 19.8-1.41 1.41zM9.19 12.02c-.11.31-.19.63-.19.98 0 1.66 1.34 3 3 3 .35 0 .67-.08.98-.19l-3.79-3.79zM16.17 19l-1.68-1.68c-.73.43-1.58.68-2.49.68-2.76 0-5-2.24-5-5 0-.91.25-1.76.68-2.49L4.17 7H4v12h12.17zm-1.36-7.02 2.07 2.07c.08-.34.12-.69.12-1.05 0-2.76-2.24-5-5-5-.36 0-.71.04-1.06.12l2.07 2.07c.84.3 1.5.96 1.8 1.79z" }),
  "NoPhotographyOutlined"
);
const NoSimIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.26 21.21 3.79 3.74 2.38 5.15l2.74 2.74-.12.12V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.88 1.88 1.41-1.41zM7 19V9.77L16.23 19H7zm3.84-14H17v9.11l2 2V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06l1.41 1.41L10.84 5z" }),
  "NoSimOutlined"
);
const NoStrollerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm7-11.34v3.51l2 2v-7.9c.58-.68.97-1.27 1.65-1.27.77 0 1.35.66 1.35 1.48V7h2v-.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-3.5 4.11 1.42 1.42L15 8.66zm4.78 13.95-1.91-1.91c-.29.76-1.01 1.3-1.87 1.3-1.1 0-2-.9-2-2 0-.86.54-1.58 1.3-1.87L14.17 17H7.43c-.85 0-1.31-1-.76-1.65l2.69-3.16-7.97-7.97L2.8 2.81l7.86 7.86 1.42 1.42 9.11 9.11-1.41 1.41zM12.17 15l-1.39-1.39L9.6 15h2.57zM10 5c.29 0 .58.02.86.05L9.49 6.67l1.42 1.42L14.3 4.1C13.03 3.4 11.56 3 10 3c-1.23 0-2.4.25-3.47.7L8.1 5.27C8.71 5.1 9.35 5 10 5z" }),
  "NoStrollerOutlined"
);
const NoTransferIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8.5 13c.83 0 1.5.67 1.5 1.5S9.33 16 8.5 16 7 15.33 7 14.5 7.67 13 8.5 13zm11.28 9.61-1.64-1.64c-.05.01-.09.03-.14.03h-1c-.55 0-1-.45-1-1v-1H8v1c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-1.78c-.61-.55-1-1.34-1-2.22V6.83L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM6 8.83V10h1.17L6 8.83zM14.17 17l-5-5H6v4c0 .37.21.62.34.73l.29.27h7.54zM12 4c3.69 0 5.11.46 5.66.99H7.82l2 2H18V10h-5.17l2 2H18v3.17l1.81 1.81c.11-.31.19-.63.19-.98V6c0-3.5-3.58-4-8-4-2.52 0-4.76.16-6.22.95l1.53 1.53C8.17 4.2 9.6 4 12 4z" }),
  "NoTransferOutlined"
);
const NordicWalkingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 23h-1.5v-9H19v9zM7.53 14H6l-2 9h1.53l2-9zm5.97-8.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.56-.89-1.68-1.25-2.65-.84L6 8.3V13h2V9.6l1.8-.7z" }),
  "NordicWalkingOutlined"
);
const NorthIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z" }),
  "NorthOutlined"
);
const NorthEastIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" }),
  "NorthEastOutlined"
);
const NorthWestIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z" }),
  "NorthWestOutlined"
);
const NotAccessibleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 9v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.24-.24-.44-.36-.63-.46-.36-.19-.72-.3-1.2-.26-.49.04-.91.27-1.23.61L14 11.05c1.29 1.07 3.25 1.94 5 1.95zm-9 7c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07c-.41 1.16-1.52 2-2.83 2zM2.81 2.81 1.39 4.22 10 12.83V15c0 1.1.9 2 2 2h2.17l5.61 5.61 1.41-1.41L2.81 2.81z" }),
  "NotAccessibleOutlined"
);
const NotInterestedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" }),
  "NotInterestedOutlined"
);
const NotListedLocationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.01 16c-.27 0-.52-.1-.71-.29-.2-.2-.29-.43-.29-.71-.01-.55.43-.99.98-1h.02c.28 0 .51.1.71.29.18.19.28.43.28.7s-.1.51-.29.71-.43.3-.7.3zm-.88-3.66c0-.45.1-.84.29-1.16.19-.33.53-.7 1-1.12.28-.25.48-.47.61-.66s.19-.4.19-.64c0-.29-.11-.53-.32-.74-.21-.2-.5-.3-.85-.3-.37 0-.74.1-.96.3-.21.2-.4.45-.4.98H9c0-1.01.46-1.73.97-2.21C10.53 6.28 11.25 6 12 6c.59 0 1.11.12 1.57.35s.79.55 1.05.96.38.86.38 1.35-.1.9-.31 1.25-.48.71-.89 1.09c-.32.3-.53.56-.65.77s-.18.49-.18.81V13h-1.85v-.66h.01zM18 10.2C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z" }),
  "NotListedLocationOutlined"
);
const NotStartedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 6H9v8h2V8zm6 4-5-4v8l5-4z" }),
  "NotStartedOutlined"
);
const NoteAddIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 11h-2v3H8v2h3v3h2v-3h3v-2h-3zm1-9H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" }),
  "NoteAddOutlined"
);
const NoteAltIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m15.08 11.03-2.12-2.12L7 14.86V17h2.1zm1.77-1.76c.2-.2.2-.51 0-.71l-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06 2.12 2.12 1.06-1.06z" }, "1")],
  "NoteAltOutlined"
);
const NotesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 11.01 3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z" }),
  "NotesOutlined"
);
const NotificationAddIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 14v3H8v-7c0-2.21 1.79-4 4-4 .85 0 1.64.26 2.28.72l1.43-1.43c-.64-.51-1.39-.88-2.21-1.09v-.7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.7C7.91 4.86 6 7.21 6 10v7H4v2h16v-2h-2v-3h-2zm-4 8c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zM24 8h-3V5h-2v3h-3v2h3v3h2v-3h3V8z" }),
  "NotificationAddOutlined"
);
const NotificationImportantIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zM12 6c2.76 0 5 2.24 5 5v7H7v-7c0-2.76 2.24-5 5-5zm0-4.5c-.83 0-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1l-2-2v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5zM11 8h2v4h-2zm0 6h2v2h-2z" }),
  "NotificationImportantOutlined"
);
const NotificationsActiveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z" }),
  "NotificationsActiveOutlined"
);
const NotificationsNoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" }),
  "NotificationsNoneOutlined"
);
const NotificationsOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23l1.64 1.64c.18-.02.36-.05.55-.05zM5.41 3.35 4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-.68.12-1.32.34-1.9L16 16.76V17z" }),
  "NotificationsOffOutlined"
);
const NotificationsPausedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.5 9.8h2.8l-2.8 3.4V15h5v-1.8h-2.8l2.8-3.4V8h-5zM18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" }),
  "NotificationsPausedOutlined"
);
const NumbersIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m20.5 10 .5-2h-4l1-4h-2l-1 4h-4l1-4h-2L9 8H5l-.5 2h4l-1 4h-4L3 16h4l-1 4h2l1-4h4l-1 4h2l1-4h4l.5-2h-4l1-4h4zm-7 4h-4l1-4h4l-1 4z" }),
  "NumbersOutlined"
);
const OfflineBoltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98zM12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3z" }),
  "OfflineBoltOutlined"
);
const OfflinePinIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-5h10v2H7zm3.3-3.8L8.4 9.3 7 10.7l3.3 3.3L17 7.3l-1.4-1.4z" }),
  "OfflinePinOutlined"
);
const OfflineShareIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M6 5H4v16c0 1.1.9 2 2 2h10v-2H6V5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M18 1h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16h-8v-1h8v1zm0-3h-8V6h8v8zm0-10h-8V3h8v1z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M12.5 10.25h1.63l-.69.69L14.5 12 17 9.5 14.5 7l-1.06 1.06.69.69H12c-.55 0-1 .45-1 1V12h1.5v-1.75z" }, "2")],
  "OfflineShareOutlined"
);
const OndemandVideoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" }),
  "OndemandVideoOutlined"
);
const OneKIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M8.5 15H10V9H7v1.5h1.5zm5-2.25L15.25 15H17l-2.25-3L17 9h-1.75l-1.75 2.25V9H12v6h1.5z" }, "1")],
  "OneKOutlined"
);
const OneKPlusIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M7.5 15H9V9H6v1.5h1.5zm4.5-2.25L13.75 15h1.75l-2.25-3 2.25-3h-1.75L12 11.25V9h-1.5v6H12z" }, "1")],
  "OneKPlusOutlined"
);
const OneKkIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 6v10H5v-8.5h1V15h1.5V9H5V5h14v4z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M15.5 11.25V9H14v6h1.5v-2.25L17.25 15H19l-2.25-3L19 9h-1.75zM9.5 15H12c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H9.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-4.5h1.5v3H10v-3z" }, "1")],
  "OneKkOutlined"
);
const OnlinePredictionIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.5 11.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5C8.5 9.57 10.07 8 12 8s3.5 1.57 3.5 3.5zm-2.5 6h-2V19h2v-1.5zm9-5.5c0-2.76-1.12-5.26-2.93-7.07l-1.06 1.06C19.55 7.53 20.5 9.66 20.5 12s-.95 4.47-2.49 6.01l1.06 1.06C20.88 17.26 22 14.76 22 12zM3.5 12c0-2.34.95-4.47 2.49-6.01L4.93 4.93C3.12 6.74 2 9.24 2 12c0 2.76 1.12 5.26 2.93 7.07l1.06-1.06C4.45 16.47 3.5 14.34 3.5 12zm14 0c0 1.52-.62 2.89-1.61 3.89l1.06 1.06C18.22 15.68 19 13.93 19 12c0-1.93-.78-3.68-2.05-4.95l-1.06 1.06c.99 1 1.61 2.37 1.61 3.89zM7.05 16.95l1.06-1.06c-1-1-1.61-2.37-1.61-3.89s.62-2.89 1.61-3.89L7.05 7.05C5.78 8.32 5 10.07 5 12c0 1.93.78 3.68 2.05 4.95z" }),
  "OnlinePredictionOutlined"
);
const OpacityIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.66 8 12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z" }),
  "OpacityOutlined"
);
const OpenInBrowserIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z" }),
  "OpenInBrowserOutlined"
);
const OpenInFullIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z" }),
  "OpenInFullOutlined"
);
const OpenInNewOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.79 5.8 14 3h7v7l-2.79-2.8-4.09 4.09-1.41-1.41 4.08-4.08zM19 12v4.17l2 2V12h-2zm.78 10.61L18.17 21H5c-1.11 0-2-.9-2-2V5.83L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM16.17 19l-4.88-4.88-1.59 1.59-1.41-1.41 1.59-1.59L5 7.83V19h11.17zM7.83 5H12V3H5.83l2 2z" }),
  "OpenInNewOffOutlined"
);
const OpenWithIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z" }),
  "OpenWithOutlined"
);
const OtherHousesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 3 1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4 12 3zm6 16H6v-8.9l6-4.58 6 4.58V19zm-9-5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3 1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z" }),
  "OtherHousesOutlined"
);
const OutboundIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.88 9.54L8.92 16.5l-1.41-1.41 4.96-4.96L10.34 8l5.65.01.01 5.65-2.12-2.12z" }),
  "OutboundOutlined"
);
const OutboxIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M11 9.83V14h2V9.83l1.59 1.58L16 10l-4-4-4 4 1.41 1.41z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.02c.91 1.21 2.35 2 3.98 2s3.06-.79 3.98-2H19v3zm0-5h-4.18c-.41 1.16-1.51 2-2.82 2s-2.4-.84-2.82-2H5V5h14v9z" }, "1")],
  "OutboxOutlined"
);
const OutdoorGrillIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 22c1.66 0 3-1.34 3-3s-1.34-3-3-3c-1.3 0-2.4.84-2.82 2H9.14l1.99-3.06c.29.04.58.06.87.06s.58-.02.87-.06l1.02 1.57c.42-.53.96-.95 1.6-1.21l-.6-.93C17.31 13.27 19 10.84 19 8H5c0 2.84 1.69 5.27 4.12 6.37l-3.95 6.08c-.3.46-.17 1.08.29 1.38.46.3 1.08.17 1.38-.29l1-1.55h6.34C14.6 21.16 15.7 22 17 22zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-9.58-8h9.16c-.77 1.76-2.54 3-4.58 3s-3.81-1.24-4.58-3zm1.99-3h1c.15-1.15.23-1.64-.89-2.96-.42-.5-.68-.77-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96.22.24.79.67.45 2.04zm2.48 0h1c.15-1.15.23-1.64-.89-2.96-.42-.5-.68-.78-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96.23.24.8.67.45 2.04zm2.52 0h1c.15-1.15.23-1.64-.89-2.96-.42-.5-.68-.77-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96.22.24.79.67.45 2.04z" }),
  "OutdoorGrillOutlined"
);
const OutletIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 9V8c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1zm6 0V8c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1zm-2 5c0-1.1-.9-2-2-2s-2 .9-2 2v2h4v-2z" }),
  "OutletOutlined"
);
const PaddingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zM11 7h2v2h-2V7zM7 7h2v2H7V7zm8 0h2v2h-2V7z" }),
  "PaddingOutlined"
);
const PagesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 2h6v6h-3l1-4-4 1V5zM5 5h6v3L7 7l1 4H5V5zm6 14H5v-6h3l-1 4 4-1v3zm8 0h-6v-3l4 1-1-4h3v6zm-4.37-4.37L12 13.72l-2.63.91.91-2.63-.91-2.63 2.63.91 2.63-.91-.91 2.63.91 2.63z" }),
  "PagesOutlined"
);
const PageviewIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.49 16c.88 0 1.7-.26 2.39-.7l2.44 2.44 1.42-1.42-2.44-2.43c.44-.7.7-1.51.7-2.39C16 9.01 13.99 7 11.5 7S7 9.01 7 11.5 9.01 16 11.49 16zm.01-7c1.38 0 2.5 1.12 2.5 2.5S12.88 14 11.5 14 9 12.88 9 11.5 10.12 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" }),
  "PageviewOutlined"
);
const PaidIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.89-8.9c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.44-.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6.56-2.62 2.85-2.62 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 3.02 2.96V19h1.75v-1.24c.52-.09 3.02-.59 3.02-3.22.01-1.39-.6-2.61-3-3.44z" }),
  "PaidOutlined"
);
const PaletteIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "6.5", cy: "11.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "9.5", cy: "7.5", r: "1.5" }, "2"), /* @__PURE__ */ jsx("circle", { cx: "14.5", cy: "7.5", r: "1.5" }, "3"), /* @__PURE__ */ jsx("circle", { cx: "17.5", cy: "11.5", r: "1.5" }, "4")],
  "PaletteOutlined"
);
const PanToolIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 24h-6.55c-1.08 0-2.14-.45-2.89-1.23l-7.3-7.61 2.07-1.83c.62-.55 1.53-.66 2.26-.27L8 14.34V4.79c0-1.38 1.12-2.5 2.5-2.5.17 0 .34.02.51.05.09-1.3 1.17-2.33 2.49-2.33.86 0 1.61.43 2.06 1.09.29-.12.61-.18.94-.18 1.38 0 2.5 1.12 2.5 2.5v.28c.16-.03.33-.05.5-.05 1.38 0 2.5 1.12 2.5 2.5V20c0 2.21-1.79 4-4 4zM4.14 15.28l5.86 6.1c.38.39.9.62 1.44.62H18c1.1 0 2-.9 2-2V6.15c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V3.42c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V2.51c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V4.79c0-.28-.22-.5-.5-.5s-.5.23-.5.5v12.87l-5.35-2.83-.51.45z" }),
  "PanToolOutlined"
);
const PanToolAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18.89 11.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V5.5C14 4.12 12.88 3 11.5 3S9 4.12 9 5.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 15.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12zM17.08 19h-6.55l-3.7-3.78 4.17.89V5.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 13.56 17.08 19z" }),
  "PanToolAltOutlined"
);
const PanoramaIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12zm-6.5-7L11 15.51 8.5 12.5 5 17h14z" }),
  "PanoramaOutlined"
);
const PanoramaFishEyeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }),
  "PanoramaFishEyeOutlined"
);
const PanoramaHorizontalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16s-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7s-6.18-.55-9.12-1.64C2.77 4.02 2.66 4 2.57 4c-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64s6.18.55 9.12 1.64c.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63z" }),
  "PanoramaHorizontalOutlined"
);
const PanoramaHorizontalSelectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 5.5c-3.89 0-6.95-.84-8.69-1.43-.64-.22-1.31.26-1.31.95V19c0 .68.66 1.17 1.31.95C5.36 19.26 8.1 18.5 12 18.5c3.87 0 6.66.76 8.69 1.45.65.21 1.31-.27 1.31-.95V5c0-.68-.66-1.17-1.31-.95-2.03.68-4.83 1.45-8.69 1.45z" }),
  "PanoramaHorizontalSelectOutlined"
);
const PanoramaPhotosphereIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.95 8.15c-.29-.16-.61-.31-.93-.46C19.4 4.33 15.98 2 12 2 8.02 2 4.6 4.33 2.99 7.68c-.33.15-.64.3-.93.46C1.41 8.5 1 9.17 1 9.91v4.18c0 .74.41 1.41 1.05 1.77.29.16.61.31.93.46C4.6 19.67 8.02 22 12 22c3.98 0 7.4-2.33 9.01-5.68.33-.15.64-.3.93-.46.65-.36 1.06-1.03 1.06-1.77V9.91c0-.74-.41-1.41-1.05-1.76zM21 9.91v4.19c-2.19 1.21-5.47 1.9-9 1.9-3.53 0-6.81-.7-9-1.91V9.91C5.2 8.69 8.47 8 12 8c3.53 0 6.81.7 9 1.91zM12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6c-2.15 0-4.17.25-5.95.68C7.51 5.04 9.63 4 12 4zm0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68C16.49 18.96 14.37 20 12 20z" }),
  "PanoramaPhotosphereOutlined"
);
const PanoramaPhotosphereSelectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.95 8.15c-.29-.16-.61-.31-.93-.46C19.4 4.33 15.98 2 12 2 8.02 2 4.6 4.33 2.99 7.68c-.33.15-.64.3-.93.46C1.41 8.5 1 9.17 1 9.91v4.18c0 .74.41 1.41 1.05 1.77.29.16.61.31.93.46C4.6 19.67 8.02 22 12 22c3.98 0 7.4-2.33 9.01-5.68.33-.15.64-.3.93-.46.65-.36 1.06-1.03 1.06-1.77V9.91c0-.74-.41-1.41-1.05-1.76zM12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6c-2.15 0-4.17.25-5.95.68C7.51 5.04 9.63 4 12 4zm0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68C16.49 18.96 14.37 20 12 20z" }),
  "PanoramaPhotosphereSelectOutlined"
);
const PanoramaVerticalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12c.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12s-.55 6.18-1.64 9.12c-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31zM6.54 20c.77-2.6 1.16-5.28 1.16-8s-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8s.39 5.4 1.16 8H6.54z" }),
  "PanoramaVerticalOutlined"
);
const PanoramaVerticalSelectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.5 12c0-3.89.84-6.95 1.43-8.69.22-.64-.26-1.31-.95-1.31H5c-.68 0-1.16.66-.95 1.31C4.74 5.36 5.5 8.1 5.5 12c0 3.87-.76 6.66-1.45 8.69-.21.65.27 1.31.95 1.31h14c.68 0 1.17-.66.95-1.31-.68-2.03-1.45-4.83-1.45-8.69z" }),
  "PanoramaVerticalSelectOutlined"
);
const PanoramaWideAngleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36s-.24 3.58-.71 5.36c-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12s.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4z" }),
  "PanoramaWideAngleOutlined"
);
const PanoramaWideAngleSelectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4c-3.97 0-6.85.63-9 1-.55 1.97-1 3.92-1 7 0 3.03.45 5.05 1 7 2.15.37 4.98 1 9 1 3.97 0 6.85-.63 9-1 .57-2.02 1-3.99 1-7 0-3.03-.45-5.05-1-7-2.15-.37-4.98-1-9-1z" }),
  "PanoramaWideAngleSelectOutlined"
);
const ParaglidingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.48.94C14.68 18.54 14 19 12 19s-2.68-.46-3.48-1.06C8.04 17.55 7 16.76 7 14H5c0 2.7.93 4.41 2.3 5.5.5.4 1.1.7 1.7.9V24h6v-3.6c.6-.2 1.2-.5 1.7-.9 1.37-1.09 2.3-2.8 2.3-5.5h-2c0 2.76-1.04 3.55-1.52 3.94zM23 4.25v3.49c0 .8-.88 1.26-1.56.83-.14-.09-.28-.18-.44-.26L19 13h-2l-1.5-6.28c-1.1-.14-2.28-.22-3.5-.22s-2.4.08-3.5.22L7 13H5L3 8.31c-.16.08-.3.17-.44.26C1.88 9 1 8.55 1 7.74V4.25C1 1.9 5.92 0 12 0s11 1.9 11 4.25zM6.9 6.98c-.93.19-1.78.43-2.53.71l1.51 3.55L6.9 6.98zm12.73.71c-.75-.28-1.6-.52-2.53-.71l1.02 4.25 1.51-3.54zM21 4.31C20.65 3.63 17.57 2 12 2S3.35 3.63 3 4.31v1.77C5.34 5.07 8.56 4.5 12 4.5s6.66.57 9 1.58V4.31z" }),
  "ParaglidingOutlined"
);
const ParkIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.95v-4H21l-4-6zM6.79 16l3.9-6H8.88l3.13-4.5 3.15 4.5h-1.9l4 6H6.79z" }),
  "ParkOutlined"
);
const PartyModeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l.59-.65L9.88 4h4.24l1.24 1.35.59.65H20v12zM9 12c0-1.66 1.34-3 3-3h3.98c-.92-1.21-2.35-2-3.98-2-2.76 0-5 2.24-5 5 0 .34.04.68.1 1h2.08c-.11-.31-.18-.65-.18-1zm6 0c0 1.66-1.34 3-3 3H8.02c.92 1.21 2.35 2 3.98 2 2.76 0 5-2.24 5-5 0-.34-.03-.68-.1-1h-2.08c.11.31.18.65.18 1z" }),
  "PartyModeOutlined"
);
const PasswordIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z" }),
  "PasswordOutlined"
);
const PatternIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm2 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-.02 6c-.74 0-1.37.4-1.72 1h-2.54c-.34-.6-.98-1-1.72-1s-1.37.4-1.72 1H8.41l3.07-3.07c.17.04.34.07.52.07 1.1 0 2-.9 2-2 0-.18-.03-.35-.07-.51l3.56-3.56c.16.04.33.07.51.07 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .18.03.35.07.51l-3.56 3.56c-.16-.04-.33-.07-.51-.07-1.1 0-2 .9-2 2 0 .18.03.35.07.51l-3.56 3.56C6.35 16.03 6.18 16 6 16c-1.1 0-2 .9-2 2s.9 2 2 2c.74 0 1.37-.4 1.72-1h2.57c.34.6.98 1 1.72 1s1.37-.4 1.72-1h2.55c.34.6.98 1 1.72 1 1.1 0 2-.9 2-2-.02-1.1-.92-2-2.02-2z" }),
  "PatternOutlined"
);
const PauseCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z" }),
  "PauseCircleOutlined"
);
const PauseCircleFilledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" }),
  "PauseCircleFilledOutlined"
);
const PauseCircleOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z" }),
  "PauseCircleOutlineOutlined"
);
const PausePresentationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .85-2 1.95v14c0 1.1.9 2.05 2 2.05h18c1.1 0 2-.95 2-2.05v-14C23 3.85 22.1 3 21 3zm0 16H3V5h18v14zM9 8h2v8H9zm4 0h2v8h-2z" }),
  "PausePresentationOutlined"
);
const PaymentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" }),
  "PaymentOutlined"
);
const PedalBikeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18.18 10-1.7-4.68C16.19 4.53 15.44 4 14.6 4H12v2h2.6l1.46 4h-4.81l-.36-1H12V7H7v2h1.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 9.87 0 12.2 0 15c0 2.8 2.2 5 5 5 2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99 2.8.13 5.25-2.19 5.25-5 0-2.8-2.2-5-5-5h-.82zM7.82 16c-.4 1.17-1.49 2-2.82 2-1.68 0-3-1.32-3-3s1.32-3 3-3c1.33 0 2.42.83 2.82 2H5v2h2.82zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2zm4.9 4c-1.68 0-3-1.32-3-3 0-.93.41-1.73 1.05-2.28l.96 2.64 1.88-.68-.97-2.67c.03 0 .06-.01.09-.01 1.68 0 3 1.32 3 3s-1.33 3-3.01 3z" }),
  "PedalBikeOutlined"
);
const PendingIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "7", cy: "12", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1.5" }, "2"), /* @__PURE__ */ jsx("circle", { cx: "17", cy: "12", r: "1.5" }, "3")],
  "PendingOutlined"
);
const PendingActionsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85-.7.71zM18 3h-3.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H6c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h6.11c-.59-.57-1.07-1.25-1.42-2H6V5h2v3h8V5h2v5.08c.71.1 1.38.31 2 .6V5c0-1.1-.9-2-2-2zm-6 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }),
  "PendingActionsOutlined"
);
const PentagonIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44l7.63 5.34zM2 9l4 12h12l4-12-10-7L2 9z" }),
  "PentagonOutlined"
);
const PeopleAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z" }),
  "PeopleAltOutlined"
);
const PeopleOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z" }),
  "PeopleOutlineOutlined"
);
const PercentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.5 4C5.57 4 4 5.57 4 7.5S5.57 11 7.5 11 11 9.43 11 7.5 9.43 4 7.5 4zm0 5C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm9 4c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5.41 20 4 18.59 18.59 4 20 5.41 5.41 20z" }),
  "PercentOutlined"
);
const PermCameraMicIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2zm8-1h-3.17l-1.86-2H8.96L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-7v-1.09c2.83-.48 5-2.94 5-5.91h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6c0 2.97 2.17 5.43 5 5.91V19H4V7h4.21l.59-.65L10.04 5h4.24l1.24 1.35.59.65H20v12z" }),
  "PermCameraMicOutlined"
);
const PermContactCalendarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.84 4.22c-.05-.12-.11-.23-.18-.34-.14-.21-.33-.4-.54-.54-.11-.07-.22-.13-.34-.18-.24-.1-.5-.16-.78-.16h-1V1h-2v2H8V1H6v2H5c-.42 0-.8.13-1.12.34-.21.14-.4.33-.54.54-.07.11-.13.22-.18.34-.1.24-.16.5-.16.78v14c0 1.1.89 2 2 2h14c.28 0 .54-.06.78-.16.12-.05.23-.11.34-.18.21-.14.4-.33.54-.54.21-.32.34-.71.34-1.12V5c0-.28-.06-.54-.16-.78zM5 19V5h14v14H5zm7-6.12c-2.03 0-6 1.08-6 3.58V18h12v-1.53c0-2.51-3.97-3.59-6-3.59zM8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31zM12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" }),
  "PermContactCalendarOutlined"
);
const PermDataSettingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.99 11.57H20V0L0 20h11.56v-2H4.83L17.99 4.83v6.74zm5.78 8.75-1.07-.83c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32zm-4.78.18c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" }),
  "PermDataSettingOutlined"
);
const PermDeviceInformationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 7h2v2h-2zm0 4h2v6h-2zm6-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zM7 4V3h10v1H7z" }),
  "PermDeviceInformationOutlined"
);
const PermIdentityIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" }),
  "PermIdentityOutlined"
);
const PermMediaIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm5 9h14l-3.5-4.5-2.5 3.01L11.5 9zM22 4h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 12H6V4h5.17l1.41 1.41.59.59H22v10z" }),
  "PermMediaOutlined"
);
const PermPhoneMsgIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.46 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51zM12 3v10l3-3h6V3h-9zm7 5h-5V5h5v3z" }),
  "PermPhoneMsgOutlined"
);
const PermScanWifiIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zM2.92 7.65C5.8 5.85 8.74 5 12 5c3.25 0 6.18.85 9.08 2.67L12 18.83 2.92 7.65zM11 10h2v6h-2zm0-4h2v2h-2z" }),
  "PermScanWifiOutlined"
);
const PersonAddAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 9V6h-2v3h-3v2h3v3h2v-3h3V9h-3zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56C1.61 15.07 1 16.1 1 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM15 18H3v-.78c0-.38.2-.72.52-.88C4.71 15.73 6.63 15 9 15c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V18z" }),
  "PersonAddAltOutlined"
);
const PersonAddAlt1Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.78 1.28 6 2H3zm17-3v-3h3v-2h-3V7h-2v3h-3v2h3v3h2z" }),
  "PersonAddAlt1Outlined"
);
const PersonAddDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 6c1.1 0 2 .9 2 2 0 .99-.73 1.82-1.67 1.97l-2.31-2.31C13.19 6.72 14.01 6 15 6m0-2c-2.21 0-4 1.79-4 4 0 .18.03.35.05.52l3.43 3.43c.17.02.34.05.52.05 2.21 0 4-1.79 4-4s-1.79-4-4-4zm1.69 10.16L22.53 20H23v-2c0-2.14-3.56-3.5-6.31-3.84zm-3.68 1.97L14.88 18H9c.08-.24.88-1.01 2.91-1.57l1.1-.3M1.41 1.71 0 3.12l4 4V10H1v2h3v3h2v-3h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v2h9.88l4 4 1.41-1.41L1.41 1.71zM6 10v-.88l.88.88H6z" }),
  "PersonAddDisabledOutlined"
);
const PersonOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" }),
  "PersonOutlineOutlined"
);
const PersonPinIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-7-7c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V17h12v-1.42zM8.48 15c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1H8.48z" }),
  "PersonPinOutlined"
);
const PersonPinCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 11c1.33 0 4 .67 4 2v.16c-.97 1.12-2.4 1.84-4 1.84s-3.03-.72-4-1.84V13c0-1.33 2.67-2 4-2zm0-1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 .2C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z" }),
  "PersonPinCircleOutlined"
);
const PersonRemoveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zm13-8h6v2h-6z" }),
  "PersonRemoveOutlined"
);
const PersonRemoveAlt1Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zm13-8h6v2h-6z" }),
  "PersonRemoveAlt1Outlined"
);
const PersonSearchIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 18c.22-.72 3.31-2 6-2 0-.7.13-1.37.35-1.99C7.62 13.91 2 15.27 2 18v2h9.54c-.52-.58-.93-1.25-1.19-2H4zm15.43.02c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59c-1.5-1.5-.79-.8-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }),
  "PersonSearchOutlined"
);
const PersonalVideoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" }),
  "PersonalVideoOutlined"
);
const PestControlIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M21 15v-2h-3.07c-.05-.39-.12-.77-.22-1.14l2.58-1.49-1-1.73L16.92 10c-.28-.48-.62-.91-.99-1.29.1-.56.2-1.69-.58-2.89L17 4.17l-1.41-1.41-1.72 1.72c-1.68-.89-3.1-.33-3.73 0L8.41 2.76 7 4.17l1.65 1.65c-.78 1.2-.68 2.34-.58 2.89-.37.39-.71.82-.99 1.29L4.71 8.63l-1 1.73 2.58 1.49c-.1.37-.17.75-.22 1.14H3v2h3.07c.05.39.12.77.22 1.14l-2.58 1.49 1 1.73L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l2.37 1.37 1-1.73-2.58-1.49c.1-.37.17-.75.22-1.14H21zm-9-9c.88 0 1.62.57 1.88 1.36C13.29 7.13 12.66 7 12 7s-1.29.13-1.88.36C10.38 6.57 11.12 6 12 6zm0 13c-2.21 0-4-2.24-4-5s1.79-5 4-5 4 2.24 4 5-1.79 5-4 5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M11 11h2v6h-2z" }, "1")],
  "PestControlOutlined"
);
const PestControlRodentIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "17", cy: "17", r: "1" }, "0"), /* @__PURE__ */ jsx("path", { d: "m20.86 14.97-.93-.84c.48-3.45-2.87-6.04-6.05-4.82C13.3 9.11 12.66 9 12 9c-4.26 0-5.65 3.58-5.89 4.85C4.89 13.47 4 12.35 4 11c0-1.66 1.34-3 3-3h2.5C10.88 8 12 6.88 12 5.5S10.88 3 9.5 3H8c-.55 0-1 .45-1 1s.45 1 1 1h1.5c.28 0 .5.22.5.5s-.22.5-.5.5H7c-2.76 0-5 2.24-5 5 0 2.44 1.76 4.47 4.07 4.91C6.51 18.79 8.99 21 12 21h6.53c3.11 0 4.7-3.89 2.33-6.03zM18.53 19H12c-1.21 0-2.34-.54-3.11-1.48-.78-.95-1.06-2.16-.8-3.41.31-1.48 1.51-2.69 2.99-3.01.22-.05.45-.06.67-.07-.47.71-.75 1.55-.75 2.47 0 1.24.5 2.37 1.32 3.18l1.41-1.41c-.45-.45-.73-1.08-.73-1.77 0-1.42 1.2-2.5 2.5-2.5 1.38 0 2.5 1.12 2.5 2.5 0 .46-.13.88-.35 1.25l1.87 1.7c.31.28.48.67.48 1.09 0 .8-.66 1.46-1.47 1.46z" }, "1")],
  "PestControlRodentOutlined"
);
const PetsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "4.5", cy: "9.5", r: "2.5" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "9", cy: "5.5", r: "2.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "15", cy: "5.5", r: "2.5" }, "2"), /* @__PURE__ */ jsx("circle", { cx: "19.5", cy: "9.5", r: "2.5" }, "3"), /* @__PURE__ */ jsx("path", { d: "M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z" }, "4")],
  "PetsOutlined"
);
const PhishingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 6.18V2h-2v4.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82V15c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1.17l1.59 1.59L10 14 5 9v6c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.18c1.16-.41 2-1.51 2-2.82s-.84-2.4-2-2.82zM16 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }),
  "PhishingOutlined"
);
const PhoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" }),
  "PhoneOutlined"
);
const PhoneAndroidIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z" }),
  "PhoneAndroidOutlined"
);
const PhoneBluetoothSpeakerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51zM14.71 9.5 17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79l.71.71zM18 2.91l.94.94-.94.94V2.91zm0 4.3.94.94-.94.94V7.21z" }),
  "PhoneBluetoothSpeakerOutlined"
);
const PhoneCallbackIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 15.51c-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1zM5.03 5h1.5c.07.89.22 1.76.46 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zM19 18.97c-1.32-.09-2.59-.35-3.8-.75l1.19-1.19c.85.24 1.72.39 2.6.45v1.49zM18 9h-2.59l5.02-5.02-1.41-1.41L14 7.59V5h-2v6h6z" }),
  "PhoneCallbackOutlined"
);
const PhoneDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17.34 14.54-1.43-1.43c.56-.73 1.05-1.5 1.47-2.32l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1 0 3.98-1.37 7.64-3.66 10.54zm-2.82 2.81C11.63 19.64 7.97 21 4 21c-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.1-.04.21-.05.31-.05.26 0 .51.1.71.29l2.2 2.2c.81-.42 1.58-.9 2.3-1.46L1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41-5.26-5.26zm-6.92-.33c-.85.24-1.72.39-2.6.45v1.49c1.32-.09 2.59-.35 3.8-.75l-1.2-1.19zM17.46 5c-.06.89-.21 1.76-.45 2.59l1.2 1.2c.41-1.2.67-2.47.76-3.79h-1.51z" }),
  "PhoneDisabledOutlined"
);
const PhoneEnabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.46 5c-.06.89-.21 1.76-.45 2.59l1.2 1.2c.41-1.2.67-2.47.76-3.79h-1.51zM7.6 17.02c-.85.24-1.72.39-2.6.45v1.49c1.32-.09 2.59-.35 3.8-.75l-1.2-1.19zM16.5 3H20c.55 0 1 .45 1 1 0 9.39-7.61 17-17 17-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.1-.04.21-.05.31-.05.26 0 .51.1.71.29l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1z" }),
  "PhoneEnabledOutlined"
);
const PhoneForwardedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51zM18 11l5-5-5-5v3h-4v4h4z" }),
  "PhoneForwardedOutlined"
);
const PhoneInTalkIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z" }),
  "PhoneInTalkOutlined"
);
const PhoneIphoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" }),
  "PhoneIphoneOutlined"
);
const PhoneLockedIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 5V4c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1v5h6V5h-1zm-1 0h-2V4c0-.55.45-1 1-1s1 .45 1 1v1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m20.2 14.87-3.67-.73c-.5-.1-.83.2-.9.27l-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c.23-.24.33-.57.27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.43.55.03 1.03-.43 1.03-1v-4.15c0-.48-.34-.89-.8-.98zM5.1 5h2.23l.47 2.35L6.17 9c-.54-1.3-.9-2.63-1.07-4zM19 18.9c-1.37-.18-2.7-.53-4-1.07l1.65-1.63 2.35.47v2.23z" }, "1")],
  "PhoneLockedOutlined"
);
const PhoneMissedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M23.71 16.67C20.66 13.78 16.54 12 12 12S3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.28-.12-.52-.3-.7zm-18.31.56c-.66.37-1.29.8-1.87 1.27l-1.07-1.07c.91-.75 1.9-1.39 2.95-1.9v1.7zm15.08 1.26c-.6-.48-1.22-.9-1.88-1.27v-1.7c1.05.51 2.03 1.15 2.95 1.9l-1.07 1.07zM7 6.43l4.94 4.94 7.07-7.07-1.41-1.42-5.66 5.66L8.4 5H11V3H5v6h2z" }),
  "PhoneMissedOutlined"
);
const PhonePausedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.54 5c.06.88.21 1.75.44 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79h1.51m9.86 12.01c.85.24 1.72.39 2.6.45v1.5c-1.32-.09-2.6-.35-3.8-.76l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1zM15 3h2v7h-2zm4 0h2v7h-2z" }),
  "PhonePausedOutlined"
);
const PhonelinkIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" }),
  "PhonelinkOutlined"
);
const PhonelinkEraseIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m13 8.2-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" }),
  "PhonelinkEraseOutlined"
);
const PhonelinkOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 6V4H7.39l2 2zm2 13V9c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v3.61l2 2V10h4v7h-1.61l2.93 2.93c.39-.13.68-.49.68-.93zM2.06 1.51.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.41-1.41L2.06 1.51zM4 17V6.27L14.73 17H4z" }),
  "PhonelinkOffOutlined"
);
const PhonelinkRingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m20.1 7.7-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3zM14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H4V4h10v16z" }),
  "PhonelinkRingOutlined"
);
const PhonelinkSetupIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 3v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2zm2.5 12.5c.29-.12.55-.29.8-.48l-.02.03 1.01.39c.23.09.49 0 .61-.22l.84-1.46c.12-.21.07-.49-.12-.64l-.85-.68-.02.03c.02-.16.05-.32.05-.48s-.03-.32-.05-.48l.02.03.85-.68c.19-.15.24-.43.12-.64l-.84-1.46c-.12-.21-.38-.31-.61-.22l-1.01.39.02.03c-.25-.17-.51-.34-.8-.46l-.17-1.08C9.3 7.18 9.09 7 8.84 7H7.16c-.25 0-.46.18-.49.42L6.5 8.5c-.29.12-.55.29-.8.48l.02-.03-1.02-.39c-.23-.09-.49 0-.61.22l-.84 1.46c-.12.21-.07.49.12.64l.85.68.02-.03c-.02.15-.05.31-.05.47s.03.32.05.48l-.02-.03-.85.68c-.19.15-.24.43-.12.64l.84 1.46c.12.21.38.31.61.22l1.01-.39-.01-.04c.25.19.51.36.8.48l.17 1.07c.03.25.24.43.49.43h1.68c.25 0 .46-.18.49-.42l.17-1.08zM6 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" }),
  "PhonelinkSetupOutlined"
);
const PhotoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z" }),
  "PhotoOutlined"
);
const PhotoAlbumIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h5v7l2.5-1.5L16 11V4h2v16zm-4.38-6.5L17 18H7l2.38-3.17L11 17l2.62-3.5z" }),
  "PhotoAlbumOutlined"
);
const PhotoCameraIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14.12 4 1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" }),
  "PhotoCameraOutlined"
);
const PhotoCameraBackIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M11.25 16 9 13l-3 4h12l-3.75-5z" }, "1")],
  "PhotoCameraBackOutlined"
);
const PhotoCameraFrontIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "11", r: "2" }, "1"), /* @__PURE__ */ jsx("path", { d: "M14.78 14.58c-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58C8.48 14.9 8 15.62 8 16.43V17h8v-.57c0-.81-.48-1.53-1.22-1.85z" }, "2")],
  "PhotoCameraFrontOutlined"
);
const PhotoFilterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 10v9H4.98V5h9V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2zm-2.94-2.06L17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7zM12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12l-2.75-1.25z" }),
  "PhotoFilterOutlined"
);
const PhotoLibraryIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67 1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" }),
  "PhotoLibraryOutlined"
);
const PhotoSizeSelectActualIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zm0 15.92c-.02.03-.06.06-.08.08H3V5.08L3.08 5h17.83c.03.02.06.06.08.08v13.84zm-10-3.41L8.5 12.5 5 17h14l-4.5-6z" }),
  "PhotoSizeSelectActualOutlined"
);
const PhotoSizeSelectLargeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12V11H1zm2 8 2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z" }),
  "PhotoSizeSelectLargeOutlined"
);
const PhotoSizeSelectSmallIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M23 15h-2v2h2v-2zm0-4h-2v2h2v-2zm0 8h-2v2c1 0 2-1 2-2zM15 3h-2v2h2V3zm8 4h-2v2h2V7zm-2-4v2h2c0-1-1-2-2-2zM3 21h8v-6H1v4c0 1.1.9 2 2 2zM3 7H1v2h2V7zm12 12h-2v2h2v-2zm4-16h-2v2h2V3zm0 16h-2v2h2v-2zM3 3C2 3 1 4 1 5h2V3zm0 8H1v2h2v-2zm8-8H9v2h2V3zM7 3H5v2h2V3z" }),
  "PhotoSizeSelectSmallOutlined"
);
const PhpIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2V9zm-5 1.5v1c0 .8-.7 1.5-1.5 1.5h-2v2H3V9h3.5c.8 0 1.5.7 1.5 1.5zm-1.5 0h-2v1h2v-1zm15 0v1c0 .8-.7 1.5-1.5 1.5h-2v2h-1.5V9H20c.8 0 1.5.7 1.5 1.5zm-1.5 0h-2v1h2v-1z" }),
  "PhpOutlined"
);
const PianoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 11.5h.25V19h-4.5v-4.5H10c.55 0 1-.45 1-1V5h2v8.5c0 .55.45 1 1 1zM5 5h2v8.5c0 .55.45 1 1 1h.25V19H5V5zm14 14h-3.25v-4.5H16c.55 0 1-.45 1-1V5h2v14z" }),
  "PianoOutlined"
);
const PianoOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.42zM8.25 19H5V7.83l2 2v3.67c0 .55.45 1 1 1h.25V19zm1.5 0v-4.5H10c.46 0 .82-.31.94-.73l3.31 3.31V19h-4.5zM11 8.17 5.83 3H19c1.1 0 2 .9 2 2v13.17l-2-2V5h-2v8.5c0 .19-.07.36-.16.51L13 10.17V5h-2v3.17z" }),
  "PianoOffOutlined"
);
const PictureAsPdfIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm12 6V9c0-.55-.45-1-1-1h-2v5h2c.55 0 1-.45 1-1zm-2-3h1v3h-1V9zm4 2h1v-1h-1V9h1V8h-2v5h1zm-8 0h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9v5h1v-2zm0-2h1v1h-1V9z" }),
  "PictureAsPdfOutlined"
);
const PictureInPictureIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 7h-8v6h8V7zm-2 4h-4V9h4v2zm4-8H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z" }),
  "PictureInPictureOutlined"
);
const PictureInPictureAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 11h-8v6h8v-6zm-2 4h-4v-2h4v2zm4-12H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4.98C23 3.88 22.1 3 21 3zm0 16.02H3V4.97h18v14.05z" }),
  "PictureInPictureAltOutlined"
);
const PieChartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.93 9H13V4.07c3.61.45 6.48 3.32 6.93 6.93zM4 12c0-4.07 3.06-7.44 7-7.93v15.86c-3.94-.49-7-3.86-7-7.93zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z" }),
  "PieChartOutlined"
);
const PieChartOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z" }),
  "PieChartOutlineOutlined"
);
const PinIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M6.49 10.5V15h1.15V9h-.87l-1.76 1.27.58.89zm4.98-.45c.5 0 .81.32.81.72 0 .37-.14.64-.54 1.06-.36.38-1.06 1.08-2.13 2.15V15h3.89v-.99h-2.37l-.03-.05c.68-.68 1.15-1.14 1.4-1.39.61-.6.92-1.22.92-1.86 0-.24-.05-1.04-.91-1.48-.47-.23-1.26-.36-1.95-.03-.82.39-.99 1.13-1 1.15l1.01.42c.1-.33.38-.72.9-.72zm5.52 3.89c-.83 0-.99-.76-1.02-.86l-1.03.41c.45 1.59 2.01 1.51 2.05 1.51 1.2 0 1.68-.72 1.76-.85.32-.49.36-1.24-.01-1.76-.17-.24-.4-.41-.68-.52v-.07c.2-.1.37-.26.52-.48.26-.41.31-1.07-.02-1.57-.08-.11-.53-.75-1.62-.75-1.26 0-1.74.9-1.85 1.24l.99.41c.11-.32.35-.64.85-.64.44 0 .75.26.75.65 0 .58-.55.72-.88.72h-.46v1h.5c.56 0 1.04.24 1.04.79 0 .49-.48.77-.89.77z" }, "1")],
  "PinOutlined"
);
const PinDropIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 4c1.93 0 5 1.4 5 5.15 0 2.16-1.72 4.67-5 7.32-3.28-2.65-5-5.17-5-7.32C7 5.4 10.07 4 12 4m0-2C8.73 2 5 4.46 5 9.15c0 3.12 2.33 6.41 7 9.85 4.67-3.44 7-6.73 7-9.85C19 4.46 15.27 2 12 2z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M12 7c-1.1 0-2 .9-2 2s.9 2 2 2a2 2 0 1 0 0-4zM5 20h14v2H5v-2z" }, "1")],
  "PinDropOutlined"
);
const PinchIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 2.5V1h5v5H9.5V3.56L3.56 9.5H6V11H1V6h1.5v2.44L8.44 2.5H6zm15.89 11.27-3.8-1.67c-.13-.06-.28-.1-.44-.1H17V7.5C17 6.12 15.88 5 14.5 5S12 6.12 12 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L7 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12zM20.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L21 15.56 20.08 21z" }),
  "PinchOutlined"
);
const PivotTableChartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 5c0-1.1-.9-2-2-2h-9v5h11V5zM3 19c0 1.1.9 2 2 2h3V10H3v9zM3 5v3h5V3H5c-1.1 0-2 .9-2 2zm15 3.99L14 13l1.41 1.41 1.59-1.6V15c0 1.1-.9 2-2 2h-2.17l1.59-1.59L13 14l-4 4 4 4 1.41-1.41L12.83 19H15c2.21 0 4-1.79 4-4v-2.18l1.59 1.6L22 13l-4-4.01z" }),
  "PivotTableChartOutlined"
);
const PixIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m15.45 16.52-3.01-3.01c-.11-.11-.24-.13-.31-.13s-.2.02-.31.13L8.8 16.53c-.34.34-.87.89-2.64.89l3.71 3.7c1.17 1.17 3.07 1.17 4.24 0l3.72-3.71c-.91 0-1.67-.18-2.38-.89zM8.8 7.47l3.02 3.02c.08.08.2.13.31.13s.23-.05.31-.13l2.99-2.99c.71-.74 1.52-.91 2.43-.91l-3.72-3.71c-1.17-1.17-3.07-1.17-4.24 0l-3.71 3.7c1.76 0 2.3.58 2.61.89z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m21.11 9.85-2.25-2.26H17.6c-.54 0-1.08.22-1.45.61l-3 3c-.28.28-.65.42-1.02.42-.36 0-.74-.15-1.02-.42L8.09 8.17c-.38-.38-.9-.6-1.45-.6H5.17l-2.29 2.3c-1.17 1.17-1.17 3.07 0 4.24l2.29 2.3h1.48c.54 0 1.06-.22 1.45-.6l3.02-3.02c.28-.28.65-.42 1.02-.42s.74.14 1.02.42l3.01 3.01c.38.38.9.6 1.45.6h1.26l2.25-2.26c1.17-1.18 1.17-3.1-.02-4.29z" }, "1")],
  "PixOutlined"
);
const PlaceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z" }),
  "PlaceOutlined"
);
const PlagiarismIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M9.03 11.03c-1.37 1.37-1.37 3.58 0 4.95 1.12 1.12 2.8 1.31 4.13.59l1.88 1.88 1.41-1.41-1.88-1.88c.71-1.33.53-3.01-.59-4.13-1.37-1.37-3.59-1.37-4.95 0zm3.53 3.53c-.59.59-1.54.59-2.12 0-.59-.59-.59-1.54 0-2.12.59-.59 1.54-.59 2.12 0 .59.59.59 1.53 0 2.12z" }, "1")],
  "PlagiarismOutlined"
);
const PlayCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-3.5 7-4.5-7-4.5v9z" }),
  "PlayCircleOutlined"
);
const PlayCircleFilledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" }),
  "PlayCircleFilledOutlined"
);
const PlayCircleFilledWhiteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5z" }),
  "PlayCircleFilledWhiteOutlined"
);
const PlayCircleOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }),
  "PlayCircleOutlineOutlined"
);
const PlayDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.45 13.62 19 12 8 5v.17zM2.81 2.81 1.39 4.22 8 10.83V19l4.99-3.18 6.78 6.78 1.41-1.41L2.81 2.81zM10 15.36v-2.53l1.55 1.55-1.55.98z" }),
  "PlayDisabledOutlined"
);
const PlayForWorkIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z" }),
  "PlayForWorkOutlined"
);
const PlayLessonIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 20V4h2v7l2.5-1.5L12 11V4h5v7.08c.33-.05.66-.08 1-.08s.67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26c-.42-.6-.75-1.28-.97-2H5zm13-7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1.25 7.5v-5l4 2.5-4 2.5z" }),
  "PlayLessonOutlined"
);
const PlaylistAddIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z" }),
  "PlaylistAddOutlined"
);
const PlaylistAddCheckIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm17.59-2.07-4.25 4.24-2.12-2.12-1.41 1.41L16.34 19 22 13.34z" }),
  "PlaylistAddCheckOutlined"
);
const PlaylistAddCheckCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 8H7v2h7v-2zm0-3H7v2h7V7zm-7 8h3v-2H7v2zm12-1.59L17.59 12l-3.54 3.54-1.41-1.41-1.41 1.41 2.83 2.83L19 13.41z" }),
  "PlaylistAddCheckCircleOutlined"
);
const PlaylistAddCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-10H7v2h7v-2zm0-3H7v2h7V7zm-7 8h3v-2H7v2zm12-2v2h-2v2h-2v-2h-2v-2h2v-2h2v2h2z" }),
  "PlaylistAddCircleOutlined"
);
const PlaylistPlayIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z" }),
  "PlaylistPlayOutlined"
);
const PlaylistRemoveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 10H3v2h11v-2zm0-4H3v2h11V6zM3 16h7v-2H3v2zm11.41 6L17 19.41 19.59 22 21 20.59 18.41 18 21 15.41 19.59 14 17 16.59 14.41 14 13 15.41 15.59 18 13 20.59 14.41 22z" }),
  "PlaylistRemoveOutlined"
);
const PlumbingIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m19.28 4.93-2.12-2.12c-.78-.78-2.05-.78-2.83 0L11.5 5.64l2.12 2.12 2.12-2.12 3.54 3.54c1.17-1.18 1.17-3.08 0-4.25zM5.49 13.77c.59.59 1.54.59 2.12 0l2.47-2.47-2.12-2.13-2.47 2.47c-.59.59-.59 1.54 0 2.13z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m15.04 7.76-.71.71-.71.71L10.44 6c-.59-.6-1.54-.6-2.12-.01-.59.59-.59 1.54 0 2.12l3.18 3.18-.71.71-6.36 6.36c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0L16.45 12c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-2.82-2.83z" }, "1")],
  "PlumbingOutlined"
);
const PlusOneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 8H8v4H4v2h4v4h2v-4h4v-2h-4V8zm4.5-1.92V7.9l2.5-.5V18h2V5l-4.5 1.08z" }),
  "PlusOneOutlined"
);
const PodcastsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 12c0 .74-.4 1.38-1 1.72V22h-2v-8.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2s2 .9 2 2zm-2-6c-3.31 0-6 2.69-6 6 0 1.74.75 3.31 1.94 4.4l1.42-1.42C8.53 14.25 8 13.19 8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.19-.53 2.25-1.36 2.98l1.42 1.42C17.25 15.31 18 13.74 18 12c0-3.31-2.69-6-6-6zm0-4C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.11 7.24l1.42-1.42C4.98 16.36 4 14.29 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.29-.98 4.36-2.53 5.82l1.42 1.42C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10z" }),
  "PodcastsOutlined"
);
const PointOfSaleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4H7V4h10v2zm3 16H4c-1.1 0-2-.9-2-2v-1h20v1c0 1.1-.9 2-2 2zm-1.47-11.81C18.21 9.47 17.49 9 16.7 9H7.3c-.79 0-1.51.47-1.83 1.19L2 18h20l-3.47-7.81zM9.5 16h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5z" }),
  "PointOfSaleOutlined"
);
const PolicyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 1.85-.51 3.65-1.38 5.21l-1.45-1.45c1.29-1.94 1.07-4.58-.64-6.29-1.95-1.95-5.12-1.95-7.07 0-1.95 1.95-1.95 5.12 0 7.07 1.71 1.71 4.35 1.92 6.29.64l1.72 1.72c-1.19 1.42-2.73 2.51-4.47 3.04-4.02-1.25-7-5.42-7-9.94V6.3l7-3.11 7 3.11V11zm-7 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" }),
  "PolicyOutlined"
);
const PollIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" }),
  "PollOutlined"
);
const PolylineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6h-6zM12 4h2v2h-2V4zM7 14H5v-2h2v2zm12 6h-2v-2h2v2z" }),
  "PolylineOutlined"
);
const PoolIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m10 8-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36s.78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.55 0 .78-.13 1.15-.36.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1zm12 8.5h-.02.02zm-16.65-1c.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.06.63 2.16.64v-2c-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36v2c1.11 0 1.73-.37 2.2-.64.37-.23.6-.36 1.15-.36zM18.67 18c-1.11 0-1.73.37-2.18.64-.37.23-.6.36-1.15.36-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.37.23-.59.36-1.15.36s-.78-.13-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.37.23-.59.36-1.15.36v2c1.11 0 1.73-.37 2.19-.64.37-.23.6-.36 1.15-.36.55 0 .78.13 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.19-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.72-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64v-2c-.56 0-.78-.13-1.15-.36-.45-.27-1.07-.64-2.18-.64z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "16.5", cy: "5.5", r: "2.5" }, "1")],
  "PoolOutlined"
);
const PortableWifiOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3.42 2.36 2.01 3.78 4.1 5.87C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02 7.52 7.52 1.41-1.41L3.42 2.36zm14.29 11.46c.18-.57.29-1.19.29-1.82 0-3.31-2.69-6-6-6-.63 0-1.25.11-1.82.29l1.72 1.72c.03 0 .06-.01.1-.01 2.21 0 4 1.79 4 4 0 .04-.01.07-.01.11l1.72 1.71zM12 4c4.42 0 8 3.58 8 8 0 1.2-.29 2.32-.77 3.35l1.49 1.49C21.53 15.4 22 13.76 22 12c0-5.52-4.48-10-10-10-1.76 0-3.4.48-4.84 1.28l1.48 1.48C9.66 4.28 10.8 4 12 4z" }),
  "PortableWifiOffOutlined"
);
const PortraitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.42zM8.48 16c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1H8.48zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }),
  "PortraitOutlined"
);
const PostAddIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z" }, "1")],
  "PostAddOutlined"
);
const PowerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 9v4.66l-3.5 3.51V19h-1v-1.83L8 13.65V9h8m0-6h-2v4h-4V3H8v4h-.01C6.9 6.99 6 7.89 6 8.98v5.52L9.5 18v3h5v-3l3.5-3.51V9c0-1.1-.9-2-2-2V3z" }),
  "PowerOutlined"
);
const PowerInputIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z" }),
  "PowerInputOutlined"
);
const PowerOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 3H8v1.88l2 2zm6 6v3.88l1.8 1.8.2-.2V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l2 2H16zM4.12 3.84 2.71 5.25 6 8.54v5.96L9.5 18v3h5v-3l.48-.48 4.47 4.47 1.41-1.41L4.12 3.84zm8.38 13.33V19h-1v-1.83L8 13.65v-3.11l5.57 5.57-1.07 1.06z" }),
  "PowerOffOutlined"
);
const PowerSettingsNewIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 3h-2v10h2V3zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z" }),
  "PowerSettingsNewOutlined"
);
const PrecisionManufacturingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m19.93 8.35-3.6 1.68L14 7.7V6.3l2.33-2.33 3.6 1.68c.38.18.82.01 1-.36.18-.38.01-.82-.36-1l-3.92-1.83c-.38-.18-.83-.1-1.13.2L13.78 4.4c-.18-.24-.46-.4-.78-.4-.55 0-1 .45-1 1v1H8.82C8.4 4.84 7.3 4 6 4 4.34 4 3 5.34 3 7c0 1.1.6 2.05 1.48 2.58L7.08 18H6c-1.1 0-2 .9-2 2v1h13v-1c0-1.1-.9-2-2-2h-1.62L8.41 8.77c.17-.24.31-.49.41-.77H12v1c0 .55.45 1 1 1 .32 0 .6-.16.78-.4l1.74 1.74c.3.3.75.38 1.13.2l3.92-1.83c.38-.18.54-.62.36-1-.18-.37-.62-.54-1-.36zM6 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5.11 10H9.17l-2.46-8h.1l4.3 8z" }),
  "PrecisionManufacturingOutlined"
);
const PregnantWomanIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z" }),
  "PregnantWomanOutlined"
);
const PresentToAllIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z" }),
  "PresentToAllOutlined"
);
const PreviewIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" }),
  "PreviewOutlined"
);
const PriceChangeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H8v-1h4V8h-2V7H8v1H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H6v2h2v1zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12zm-6-8 2-2 2 2m0 4.25-2 2-2-2" }),
  "PriceChangeOutlined"
);
const PriceCheckIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 13V9c0-.55-.45-1-1-1H6V6h5V4H8.5V3h-2v1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H4v2h2.5v1h2v-1H10c.55 0 1-.45 1-1zm8.59-.48-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z" }),
  "PriceCheckOutlined"
);
const PrintIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "18", cy: "11.5", r: "1" }, "1")],
  "PrintOutlined"
);
const PrintDisabledIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M1.41 1.6 0 3.01 5 8c-1.66 0-3 1.34-3 3v6h4v4h12l2.95 2.96 1.41-1.41L1.41 1.6zM6 15H4v-4c0-.55.45-1 1-1h2l3 3H6v2zm2 4v-4h4l4 4H8zM8 5h8v3h-5.34l2 2H19c.55 0 1 .45 1 1v4l-2 .01V13h-2.34l4 4H22v-6c0-1.66-1.34-3-3-3h-1V3H6v.36l2 2V5z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "18", cy: "11.51", r: "1" }, "1")],
  "PrintDisabledOutlined"
);
const PrivacyTipIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 3.19 7 3.11V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z" }),
  "PrivacyTipOutlined"
);
const ProductionQuantityLimitsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 10h-2V8h2v2zm0-4h-2V1h2v5zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z" }),
  "ProductionQuantityLimitsOutlined"
);
const PsychologyIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m15.82 7.22-1 .4c-.21-.16-.43-.29-.67-.39L14 6.17c-.02-.1-.1-.17-.2-.17h-1.6c-.1 0-.18.07-.19.17l-.15 1.06c-.24.1-.47.23-.67.39l-1-.4c-.09-.03-.2 0-.24.09l-.8 1.38c-.05.09-.03.2.05.26l.85.66c-.03.12-.05.26-.05.39s.01.26.03.39l-.84.66c-.08.06-.1.17-.05.25l.8 1.39c.05.09.15.12.25.09l.99-.4c.21.16.43.29.68.39l.14 1.06c.02.1.1.17.2.17h1.6c.1 0 .18-.07.2-.17l.15-1.06c.24-.1.47-.23.67-.39l.99.4c.09.04.2 0 .24-.09l.8-1.39c.05-.09.03-.19-.05-.25l-.83-.66c.02-.13.03-.26.03-.39 0-.14-.01-.27-.03-.39l.85-.66c.08-.06.1-.17.05-.26l-.8-1.38c-.05-.09-.16-.12-.25-.09zM13 11.43c-.79 0-1.43-.64-1.43-1.43s.64-1.43 1.43-1.43 1.43.64 1.43 1.43-.64 1.43-1.43 1.43z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19.94 9.06c-.43-3.27-3.23-5.86-6.53-6.05C13.27 3 13.14 3 13 3 9.47 3 6.57 5.61 6.08 9l-1.93 3.48c-.41.66.07 1.52.85 1.52h1v2c0 1.1.9 2 2 2h1v3h7v-4.68c2.62-1.25 4.35-4.08 3.94-7.26zm-5.05 5.57-.89.42V19h-3v-3H8v-4H6.7l1.33-2.33C8.21 7.06 10.35 5 13 5c2.76 0 5 2.24 5 5 0 2.09-1.29 3.88-3.11 4.63z" }, "1")],
  "PsychologyOutlined"
);
const PublicIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z" }),
  "PublicOutlined"
);
const PublicOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 8.17 6.49 3.66C8.07 2.61 9.96 2 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46C19.59 14.87 20 13.48 20 12c0-3.35-2.07-6.22-5-7.41V5c0 1.1-.9 2-2 2h-2v1.17zm10.19 13.02-1.41 1.41-2.27-2.27C15.93 21.39 14.04 22 12 22 6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.39 18.38zM11 18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.08 3.05 7.44 7 7.93V18z" }),
  "PublicOffOutlined"
);
const PublishIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 4h14v2H5zm0 10h4v6h6v-6h4l-7-7-7 7zm8-2v6h-2v-6H9.83L12 9.83 14.17 12H13z" }),
  "PublishOutlined"
);
const PublishedWithChangesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.6 19.5H21v2h-6v-6h2v2.73c1.83-1.47 3-3.71 3-6.23 0-4.07-3.06-7.44-7-7.93V2.05c5.05.5 9 4.76 9 9.95 0 2.99-1.32 5.67-3.4 7.5zM4 12c0-2.52 1.17-4.77 3-6.23V8.5h2v-6H3v2h2.4C3.32 6.33 2 9.01 2 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-.49-7-3.86-7-7.93zm12.24-3.89-5.66 5.66-2.83-2.83-1.41 1.41 4.24 4.24 7.07-7.07-1.41-1.41z" }),
  "PublishedWithChangesOutlined"
);
const PunchClockIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 6h-1V1H6v5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 3h8v3H8V3zm11 17H5V8h14v12z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M12 9c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M12.5 11.5h-1v2.71l1.64 1.64.71-.71-1.35-1.35z" }, "2")],
  "PunchClockOutlined"
);
const PushPinIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z" }),
  "PushPinOutlined"
);
const QrCodeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zm0 10h2v2h-2zm-6-6h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm2-2h2v2h-2zm0-4h2v2h-2zm2 2h2v2h-2z" }),
  "QrCodeOutlined"
);
const QrCode2Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM9 9H3V3h6v6zm-4.5 7.5v3h3v-3h-3zM9 21H3v-6h6v6zm7.5-16.5v3h3v-3h-3zM21 9h-6V3h6v6zm-2 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z" }),
  "QrCode2Outlined"
);
const QrCodeScannerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.5 6.5v3h-3v-3h3M11 5H5v6h6V5zm-1.5 9.5v3h-3v-3h3M11 13H5v6h6v-6zm6.5-6.5v3h-3v-3h3M19 5h-6v6h6V5zm-6 8h1.5v1.5H13V13zm1.5 1.5H16V16h-1.5v-1.5zM16 13h1.5v1.5H16V13zm-3 3h1.5v1.5H13V16zm1.5 1.5H16V19h-1.5v-1.5zM16 16h1.5v1.5H16V16zm1.5-1.5H19V16h-1.5v-1.5zm0 3H19V19h-1.5v-1.5zM22 7h-2V4h-3V2h5v5zm0 15v-5h-2v3h-3v2h5zM2 22h5v-2H4v-3H2v5zM2 2v5h2V4h3V2H2z" }),
  "QrCodeScannerOutlined"
);
const QueryBuilderIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" }),
  "QueryBuilderOutlined"
);
const QueryStatsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.88 18.47c.44-.7.7-1.51.7-2.39 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5 2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21.58 23 23 21.58l-3.12-3.11zm-3.8.11c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm-.36-8.5c-.74.02-1.45.18-2.1.45l-.55-.83-3.8 6.18-3.01-3.52-3.63 5.81L1 17l5-8 3 3.5L13 6l2.72 4.08zm2.59.5c-.64-.28-1.33-.45-2.05-.49L21.38 2 23 3.18l-4.69 7.4z" }),
  "QueryStatsOutlined"
);
const QuestionAnswerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" }),
  "QuestionAnswerOutlined"
);
const QuestionMarkIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" }),
  "QuestionMarkOutlined"
);
const QueueIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z" }),
  "QueueOutlined"
);
const QueueMusicIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 6h-5v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6zm-7 0H3v2h12V6zm0 4H3v2h12v-2zm-4 4H3v2h8v-2z" }),
  "QueueMusicOutlined"
);
const QueuePlayNextIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z" }),
  "QueuePlayNextOutlined"
);
const QuickreplyIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M4 17.17V4h16v6h2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-2H5.17L4 17.17z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M22.5 16h-2.2l1.7-4h-5v6h2v5z" }, "1")],
  "QuickreplyOutlined"
);
const QuizIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-6.49-5.84c.41-.73 1.18-1.16 1.63-1.8.48-.68.21-1.94-1.14-1.94-.88 0-1.32.67-1.5 1.23l-1.37-.57C11.51 5.96 12.52 5 13.99 5c1.23 0 2.08.56 2.51 1.26.37.6.58 1.73.01 2.57-.63.93-1.23 1.21-1.56 1.81-.13.24-.18.4-.18 1.18h-1.52c.01-.41-.06-1.08.26-1.66zm-.56 3.79c0-.59.47-1.04 1.05-1.04.59 0 1.04.45 1.04 1.04 0 .58-.44 1.05-1.04 1.05-.58 0-1.05-.47-1.05-1.05z" }),
  "QuizOutlined"
);
const RMobiledataIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.8 7.2 9 10H7L5.87 7.33H4V10H2V2h5c1.13 0 2 .87 2 2v1.33c0 .8-.53 1.54-1.2 1.87zM7 4H4v1.33h3V4z" }),
  "RMobiledataOutlined"
);
const RadarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.74 18.33C21.15 16.6 22 14.4 22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10c2.4 0 4.6-.85 6.33-2.26.27-.22.53-.46.78-.71.03-.03.05-.06.07-.08.2-.2.39-.41.56-.62zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8c0 1.85-.63 3.54-1.69 4.9l-1.43-1.43c.69-.98 1.1-2.17 1.1-3.46 0-3.31-2.69-6-6-6s-6 2.69-6 6 2.69 6 6 6c1.3 0 2.51-.42 3.49-1.13l1.42 1.42C15.54 19.37 13.85 20 12 20zm1.92-7.49c.17-.66.02-1.38-.49-1.9l-.02-.02c-.77-.77-2-.78-2.78-.04-.01.01-.03.02-.05.04-.78.78-.78 2.05 0 2.83l.02.02c.52.51 1.25.67 1.91.49l1.51 1.51c-.6.36-1.29.58-2.04.58-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4c0 .73-.21 1.41-.56 2l-1.5-1.51z" }),
  "RadarOutlined"
);
const RadioIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 6H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2zm0 2v3h-2V9h-2v2H4V8h16zM4 20v-7h16v7H4z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8", cy: "16.48", r: "2.5" }, "1")],
  "RadioOutlined"
);
const RadioButtonCheckedIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }, "1")],
  "RadioButtonCheckedOutlined"
);
const RadioButtonUncheckedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }),
  "RadioButtonUncheckedOutlined"
);
const RailwayAlertIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "10", cy: "15.5", r: "1.5" }, "0"), /* @__PURE__ */ jsx("path", { d: "M4 11V8h7.29C11.1 7.37 11 6.7 11 6H4.43c.9-.77 3.28-1.08 6.65-.98.1-.7.3-1.37.59-1.99C2.97 2.67 2 5.02 2 7v9.5C2 18.43 3.57 20 5.5 20L4 21v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V13c-1.91 0-3.63-.76-4.89-2H4zm12 5.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V13h12v3.5z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 8h-1V8h1v1zm0-2h-1V3h1v4z" }, "2")],
  "RailwayAlertOutlined"
);
const RamenDiningIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.66 14c-.66 1.92-2.24 3.54-4.4 4.39l-1.26.5V20h-4v-1.11l-1.27-.5c-2.16-.85-3.74-2.47-4.4-4.39h15.33M22 2 4 3.99V12H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10.5V8H22V6.5H10.5V4.78L22 3.51V2zM8 6.5V5.06l1-.11V6.5H8zm-2.5 0V5.34l1-.11V6.5h-1zM8 12V8h1v4H8zm-2.5 0V8h1v4h-1z" }),
  "RamenDiningOutlined"
);
const RampLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 21h-2V6.83L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V9c0 4.27 4.03 7.13 6 8.27l-1.46 1.46c-1.91-1.16-3.44-2.53-4.54-4.02V21z" }),
  "RampLeftOutlined"
);
const RampRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 21h2V6.83l1.59 1.59L16 7l-4-4-4 4 1.41 1.41L11 6.83V9c0 4.27-4.03 7.13-6 8.27l1.46 1.46C8.37 17.56 9.9 16.19 11 14.7V21z" }),
  "RampRightOutlined"
);
const RateReviewIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9.5-2H18v-2h-5.5zm3.86-5.87c.2-.2.2-.51 0-.71l-1.77-1.77c-.2-.2-.51-.2-.71 0L6 11.53V14h2.47l5.89-5.87z" }),
  "RateReviewOutlined"
);
const RawOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17.15 14.32.59-2.36.76 3.04h1.48l1.5-6h-1.5l-.74 3-.74-3h-1.52l-.74 3-.74-3H14l.72 2.9zM1.39 4.22 6.17 9H3v6h1.5v-2h1.1l.9 2H8l-.9-2.1c.5-.3.9-.8.9-1.4v-.67l1.43 1.43L8.75 15h1.5l.38-1.5h.04l9.11 9.11 1.41-1.41L2.81 2.81 1.39 4.22zM6.5 11.5h-2v-1h2v1z" }),
  "RawOffOutlined"
);
const RawOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.5 9H3v6h1.5v-2h1.1l.9 2H8l-.9-2.1c.5-.3.9-.8.9-1.4v-1C8 9.7 7.3 9 6.5 9zm0 2.5h-2v-1h2v1zM10.25 9l-1.5 6h1.5l.38-1.5h1.75l.37 1.5h1.5l-1.5-6h-2.5zm.75 3 .25-1h.5l.25 1h-1zm8.98-3-.74 3-.74-3h-1.52l-.74 3-.74-3H14l1.5 6h1.48l.76-3.04.76 3.04h1.48l1.5-6z" }),
  "RawOnOutlined"
);
const ReadMoreIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 7h9v2h-9zm0 8h9v2h-9zm3-4h6v2h-6zm-3 1L8 7v4H2v2h6v4z" }),
  "ReadMoreOutlined"
);
const ReceiptIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19.09H5V4.91h14v14.18zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z" }),
  "ReceiptOutlined"
);
const ReceiptLongIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM15 20H6c-.55 0-1-.45-1-1v-1h10v2zm4-1c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M9 7h6v2H9zm7 0h2v2h-2zm-7 3h6v2H9zm7 0h2v2h-2z" }, "1")],
  "ReceiptLongOutlined"
);
const RecentActorsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M21 5h2v14h-2zm-4 0h2v14h-2zm-3 0H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 12H3V7h10v10z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8", cy: "9.94", r: "1.95" }, "1"), /* @__PURE__ */ jsx("path", { d: "M11.89 15.35c0-1.3-2.59-1.95-3.89-1.95s-3.89.65-3.89 1.95V16h7.78v-.65z" }, "2")],
  "RecentActorsOutlined"
);
const RecommendIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M17 10h-4.59l.58-3.41v-.2c-.01-.26-.12-.51-.3-.7L12 5l-4.6 5c-.27.26-.42.62-.4 1v5c0 1.1.9 2 2 2h5.5c.56.03 1.08-.29 1.3-.8l2.1-4.9c.08-.15.12-.33.1-.5V11c0-.55-.45-1-1-1z" }, "1")],
  "RecommendOutlined"
);
const RecordVoiceOverIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27l-1.68 1.69zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z" }),
  "RecordVoiceOverOutlined"
);
const RectangleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 4v16h20V4H2zm18 14H4V6h16v12z" }),
  "RectangleOutlined"
);
const RedeemIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" }),
  "RedeemOutlined"
);
const ReduceCapacityIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58C19.93 7.21 18.99 7 18 7c-.67 0-1.31.1-1.92.28.58.55.92 1.32.92 2.15V10h5v-.57c0-.81-.48-1.53-1.22-1.85zM6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.92 1.28C7.31 7.1 6.67 7 6 7c-.99 0-1.93.21-2.78.58C2.48 7.9 2 8.62 2 9.43V10h5v-.57c0-.83.34-1.6.92-2.15zM10 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H8v-.57c0-.81.48-1.53 1.22-1.85C10.07 7.21 11.01 7 12 7c.99 0 1.93.21 2.78.58.74.32 1.22 1.04 1.22 1.85V10zm-1 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6h-8v-.57c0-.81.48-1.53 1.22-1.85.85-.37 1.79-.58 2.78-.58.99 0 1.93.21 2.78.58.74.32 1.22 1.04 1.22 1.85V22zM5 16c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H3v-.57c0-.81.48-1.53 1.22-1.85C5.07 19.21 6.01 19 7 19c.99 0 1.93.21 2.78.58.74.32 1.22 1.04 1.22 1.85V22zm1.75-9v-2h-1.5v2H9l3 3 3-3h-2.25z" }),
  "ReduceCapacityOutlined"
);
const RefreshIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" }),
  "RefreshOutlined"
);
const RememberMeIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 20H7v-1h10v1zm0-3H7v-.48c1.47-.99 3.22-1.52 5-1.52s3.53.53 5 1.52V18zm0-2.79c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10v9.21zM17 4H7V3h10v1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M12 13c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" }, "1")],
  "RememberMeOutlined"
);
const RemoveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 13H5v-2h14v2z" }),
  "RemoveOutlined"
);
const RemoveCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" }),
  "RemoveCircleOutlined"
);
const RemoveCircleOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }),
  "RemoveCircleOutlineOutlined"
);
const RemoveDoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4.84 1.98 3.43 3.39l10.38 10.38-1.41 1.41-4.24-4.24-1.41 1.41 5.66 5.66 2.83-2.83 6.6 6.6 1.41-1.41L4.84 1.98zm13.21 10.38L23 7.4 21.57 6l-4.94 4.94 1.42 1.42zm-.71-4.96-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM1.08 12.35l5.66 5.66 1.41-1.41-5.66-5.66-1.41 1.41z" }),
  "RemoveDoneOutlined"
);
const RemoveFromQueueIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z" }),
  "RemoveFromQueueOutlined"
);
const RemoveModeratorIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 4.14 6 2.25v4.7c0 1.19-.23 2.36-.64 3.44l1.51 1.51c.72-1.53 1.13-3.22 1.13-4.95V5l-8-3-5.22 1.96 1.55 1.55L12 4.14zM2.81 2.81 1.39 4.22 4 6.83v4.26c0 5.05 3.41 9.76 8 10.91 1.72-.43 3.28-1.36 4.55-2.62l3.23 3.23 1.41-1.41L2.81 2.81zM12 19.92c-3.45-1.13-6-4.82-6-8.83V8.83l9.14 9.14c-.9.88-1.97 1.57-3.14 1.95z" }),
  "RemoveModeratorOutlined"
);
const RemoveShoppingCartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1.41 1.13 0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.41-1.41L1.41 1.13zM7 15l1.1-2h2.36l2 2H7zM20 4H7.12l2 2h9.19l-2.76 5h-1.44l1.94 1.94c.54-.14.99-.49 1.25-.97l3.58-6.49C21.25 4.82 20.76 4 20 4zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z" }),
  "RemoveShoppingCartOutlined"
);
const ReorderIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" }),
  "ReorderOutlined"
);
const RepeatIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" }),
  "RepeatOutlined"
);
const RepeatOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-2 18H6.83l1.58 1.58L7 22l-4-4 4-4 1.41 1.42L6.83 17H17v-4h2v6zm-2-9-1.41-1.42L17.17 7H7v4H5V5h12.17l-1.58-1.58L17 2l4 4-4 4z" }),
  "RepeatOnOutlined"
);
const RepeatOneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z" }),
  "RepeatOneOutlined"
);
const RepeatOneOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-2 18H6.83l1.58 1.58L7 22l-4-4 4-4 1.41 1.42L6.83 17H17v-4h2v6zm-9-8.5V9h3v6h-1.5v-4.5H10zm7-.5-1.41-1.42L17.17 7H7v4H5V5h12.17l-1.58-1.58L17 2l4 4-4 4z" }),
  "RepeatOneOnOutlined"
);
const ReplayIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" }),
  "ReplayOutlined"
);
const Replay10Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-1.1 11h-.85v-3.26l-1.01.31v-.69l1.77-.63h.09V16zm4.28-1.76c0 .32-.03.6-.1.82s-.17.42-.29.57-.28.26-.45.33-.37.1-.59.1-.41-.03-.59-.1-.33-.18-.46-.33-.23-.34-.3-.57-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82s.17-.42.29-.57.28-.26.45-.33.37-.1.59-.1.41.03.59.1.33.18.46.33.23.34.3.57.11.5.11.82v.74zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31-.11-.14-.19-.17-.16-.05-.25-.05-.18.02-.25.05-.14.09-.19.17-.09.18-.12.31-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32.11.14.19.17.16.05.25.05.18-.02.25-.05.14-.09.19-.17.09-.19.11-.32.04-.29.04-.48v-.97z" }),
  "Replay10Outlined"
);
const Replay30Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-2.44 8.49h.45c.21 0 .37-.05.48-.16s.16-.25.16-.43c0-.08-.01-.15-.04-.22s-.06-.12-.11-.17-.11-.09-.18-.11-.16-.04-.25-.04c-.08 0-.15.01-.22.03s-.13.05-.18.1-.09.09-.12.15-.05.13-.05.2h-.85c0-.18.04-.34.11-.48s.17-.27.3-.37.27-.18.44-.23.35-.08.54-.08c.21 0 .41.03.59.08s.33.13.46.23.23.23.3.38.11.33.11.53c0 .09-.01.18-.04.27s-.07.17-.13.25-.12.15-.2.22-.17.12-.28.17c.24.09.42.21.54.39s.18.38.18.61c0 .2-.04.38-.12.53s-.18.29-.32.39-.29.19-.48.24-.38.08-.6.08c-.18 0-.36-.02-.53-.07s-.33-.12-.46-.23-.25-.23-.33-.38-.12-.34-.12-.55h.85c0 .08.02.15.05.22s.07.12.13.17.12.09.2.11.16.04.25.04c.1 0 .19-.01.27-.04s.15-.07.2-.12.1-.11.13-.18.04-.15.04-.24c0-.11-.02-.21-.05-.29s-.08-.15-.14-.2-.13-.09-.22-.11-.18-.04-.29-.04h-.47v-.65zm5.74.75c0 .32-.03.6-.1.82s-.17.42-.29.57-.28.26-.45.33-.37.1-.59.1-.41-.03-.59-.1-.33-.18-.46-.33-.23-.34-.3-.57-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82s.17-.42.29-.57.28-.26.45-.33.37-.1.59-.1.41.03.59.1.33.18.46.33.23.34.3.57.11.5.11.82v.74zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31-.11-.14-.19-.17-.16-.05-.25-.05-.18.02-.25.05-.14.09-.19.17-.09.18-.12.31-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32.11.14.19.17.16.05.25.05.18-.02.25-.05.14-.09.19-.17.09-.19.11-.32c.03-.13.04-.29.04-.48v-.97z" }),
  "Replay30Outlined"
);
const Replay5Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-1.31 8.9.25-2.17h2.39v.71h-1.7l-.11.92c.03-.02.07-.03.11-.05s.09-.04.15-.05.12-.03.18-.04.13-.02.2-.02c.21 0 .39.03.55.1s.3.16.41.28.2.27.25.45.09.38.09.6c0 .19-.03.37-.09.54s-.15.32-.27.45-.27.24-.45.31-.39.12-.64.12c-.18 0-.36-.03-.53-.08s-.32-.14-.46-.24-.24-.24-.32-.39-.13-.33-.13-.53h.84c.02.18.08.32.19.41s.25.15.42.15c.11 0 .2-.02.27-.06s.14-.1.18-.17.08-.15.11-.25.03-.2.03-.31-.01-.21-.04-.31-.07-.17-.13-.24-.13-.12-.21-.15-.19-.05-.3-.05c-.08 0-.15.01-.2.02s-.11.03-.15.05-.08.05-.12.07-.07.06-.1.09l-.67-.16z" }),
  "Replay5Outlined"
);
const ReplayCircleFilledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-3.31 0-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.24-1.85-4.09-4.16-3.99l1.57 1.57L12 11.5l-4-4 4-4 1.41 1.41-1.6 1.6C15.28 6.4 18 9.18 18 12.5c0 3.31-2.69 6-6 6z" }),
  "ReplayCircleFilledOutlined"
);
const ReplyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" }),
  "ReplyOutlined"
);
const ReplyAllIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" }),
  "ReplyAllOutlined"
);
const ReportGmailerrorredIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9 14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "16", r: "1" }, "1"), /* @__PURE__ */ jsx("path", { d: "M11 7h2v7h-2z" }, "2")],
  "ReportGmailerrorredOutlined"
);
const ReportOffIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M9.1 5h5.8L19 9.1v5.8l-.22.22 1.42 1.41.8-.8V8.27L15.73 3H8.27l-.8.8 1.41 1.42z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "16", r: "1" }, "1"), /* @__PURE__ */ jsx("path", { d: "M13 9.33V7h-2v.33zM2.41 1.58 1 2.99l3.64 3.64L3 8.27v7.46L8.27 21h7.46l1.64-1.64L21.01 23l1.41-1.41L2.41 1.58zM14.9 19H9.1L5 14.9V9.1l1.05-1.05 9.9 9.9L14.9 19z" }, "2")],
  "ReportOffOutlined"
);
const ReportProblemIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" }),
  "ReportProblemOutlined"
);
const RequestPageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.17 4 18 8.83V20H6V4h7.17M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm1 9h-4v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1h-2v-1H9v-2h4v-1h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1V8h2v1h2v2z" }),
  "RequestPageOutlined"
);
const RequestQuoteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v4h5v12H6zm5-1h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4v-2h-2V9h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1z" }),
  "RequestQuoteOutlined"
);
const ResetTvIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 8V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 1.99-.9 1.99-2v-5H22c0-1.1-.9-2-2-2h-7.17l1.83-1.83-1.41-1.41C9.69 10.31 10.88 9.12 9 11l4.24 4.24 1.41-1.41L12.83 12H20v5H4V5h16v3h2z" }),
  "ResetTvOutlined"
);
const RestaurantIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z" }),
  "RestaurantOutlined"
);
const RestaurantMenuIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m8.1 13.34 2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" }),
  "RestaurantMenuOutlined"
);
const RestoreFromTrashIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2-5V9h8v10H8v-5zm2 4h4v-4h2l-4-4-4 4h2z" }),
  "RestoreFromTrashOutlined"
);
const RestorePageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7.17L18 8.83V20zm-9.55-9.43L7.28 9.4V13h3.6l-1.44-1.44c.52-1.01 1.58-1.71 2.79-1.71 1.74 0 3.15 1.41 3.15 3.15s-1.41 3.15-3.15 3.15c-1.07 0-2.02-.54-2.58-1.35H8.1c.69 1.58 2.28 2.7 4.12 2.7 2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5c-1.59 0-2.97.83-3.77 2.07z" }),
  "RestorePageOutlined"
);
const ReviewsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m12 15 1.57-3.43L17 10l-3.43-1.57L12 5l-1.57 3.43L7 10l3.43 1.57z" }, "1")],
  "ReviewsOutlined"
);
const RiceBowlIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.66 14c-.66 1.92-2.24 3.54-4.4 4.39l-1.26.49V20h-4v-1.12l-1.27-.5c-2.16-.85-3.74-2.47-4.4-4.39h15.33M12 2C6.48 2 2 6.48 2 12c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25 0-5.52-4.48-10-10-10zm-2 10V4.26c.64-.16 1.31-.26 2-.26s1.36.1 2 .26V12h-4zm6 0V5.08c2.39 1.39 4 3.96 4 6.92h-4zM4 12c0-2.95 1.61-5.53 4-6.92V12H4z" }),
  "RiceBowlOutlined"
);
const RingVolumeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M23.71 16.67C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73 1.6 0 3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.66 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.27-.11-.52-.29-.7zm-18.31.56c-.66.37-1.29.8-1.87 1.27l-1.07-1.07c.91-.75 1.9-1.39 2.95-1.9v1.7zm15.07 1.26c-.59-.48-1.21-.9-1.87-1.27v-1.7c1.04.51 2.03 1.15 2.94 1.9l-1.07 1.07zm.69-12.23-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM11 2h2v5h-2zM6.4 9.81 7.81 8.4 4.26 4.84 2.84 6.26c.11.03 3.56 3.55 3.56 3.55z" }),
  "RingVolumeOutlined"
);
const RocketIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6.02 7.25c-.29-.9-.57-1.94-.76-3L6 16.07v2.98l1.98-.8zM12 2s5 2 5 11l2.11 1.41c.56.37.89 1 .89 1.66V22l-5-2H9l-5 2v-5.93c0-.67.33-1.29.89-1.66L7 13c0-9 5-11 5-11zm0 2.36S9 6.38 9 13c0 2.25 1 5 1 5h4s1-2.75 1-5c0-6.62-3-8.64-3-8.64zm6 14.69v-2.98l-1.22-.81c-.19 1.05-.47 2.1-.76 3l1.98.79z" }),
  "RocketOutlined"
);
const RocketLaunchIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 15c-.83 0-1.58.34-2.12.88C2.7 17.06 2 22 2 22s4.94-.7 6.12-1.88c.54-.54.88-1.29.88-2.12 0-1.66-1.34-3-3-3zm.71 3.71c-.28.28-2.17.76-2.17.76s.47-1.88.76-2.17c.17-.19.42-.3.7-.3.55 0 1 .45 1 1 0 .28-.11.53-.29.71zm10.71-5.06c6.36-6.36 4.24-11.31 4.24-11.31S16.71.22 10.35 6.58l-2.49-.5c-.65-.13-1.33.08-1.81.55L2 10.69l5 2.14L11.17 17l2.14 5 4.05-4.05c.47-.47.68-1.15.55-1.81l-.49-2.49zM7.41 10.83l-1.91-.82 1.97-1.97 1.44.29c-.57.83-1.08 1.7-1.5 2.5zm6.58 7.67-.82-1.91c.8-.42 1.67-.93 2.49-1.5l.29 1.44-1.96 1.97zM16 12.24c-1.32 1.32-3.38 2.4-4.04 2.73l-2.93-2.93c.32-.65 1.4-2.71 2.73-4.04 4.68-4.68 8.23-3.99 8.23-3.99s.69 3.55-3.99 8.23zM15 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" }),
  "RocketLaunchOutlined"
);
const RoofingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 18h-2v-2h2v2zm2-4H9v6h6v-6zm4-4.7V4h-3v2.6L12 3 2 12h3l7-6.31L19 12h3l-3-2.7z" }),
  "RoofingOutlined"
);
const RoomIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "9", r: "2.5" }, "1")],
  "RoomOutlined"
);
const RoomPreferencesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m21.69 16.37 1.14-1-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L19 12h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1c-.08.5-.08.76 0 1.26l-1.14 1 1 1.73 1.45-.49c.32.27.68.48 1.08.63L17 22h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1c.08-.51.08-.77 0-1.27zM18 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1-15v6h-2V6h-2v6h-2V5H7v14h5v2H3v-2h2V3h10v1h4zm-7 9h-2v-2h2v2z" }),
  "RoomPreferencesOutlined"
);
const RoomServiceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.98 17H2v2h20v-2zM21 16c-.27-4.07-3.25-7.4-7.16-8.21.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13c1.03-2.58 3.55-4.41 6.5-4.41z" }),
  "RoomServiceOutlined"
);
const Rotate90DegreesCcwIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.34 6.41.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z" }),
  "Rotate90DegreesCcwOutlined"
);
const Rotate90DegreesCwIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 13c0 4.97 4.03 9 9 9 1.76 0 3.4-.51 4.79-1.38l-1.46-1.46c-.99.53-2.13.84-3.33.84-3.86 0-7-3.14-7-7s3.14-7 7-7h.17L9.59 7.59 11 9l4-4-4-4-1.42 1.41L11.17 4H11c-4.97 0-9 4.03-9 9zm9 0 6 6 6-6-6-6-6 6zm6 3.17L13.83 13 17 9.83 20.17 13 17 16.17z" }),
  "Rotate90DegreesCwOutlined"
);
const RotateLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.11 8.53 5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z" }),
  "RotateLeftOutlined"
);
const RotateRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.55 5.55 11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42 1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z" }),
  "RotateRightOutlined"
);
const RoundaboutLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.08 8c.48-2.84 2.94-5 5.92-5 3.31 0 6 2.69 6 6 0 2.97-2.16 5.44-5 5.92V21h-2v-6.09c0-.98.71-1.8 1.67-1.97C18.56 12.63 20 10.98 20 9c0-2.21-1.79-4-4-4-1.98 0-3.63 1.44-3.94 3.33-.17.96-.99 1.67-1.97 1.67H5.83l1.59 1.59L6 13 2 9l4-4 1.41 1.41L5.83 8h4.25z" }),
  "RoundaboutLeftOutlined"
);
const RoundaboutRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.92 8C13.44 5.16 10.97 3 8 3 4.69 3 2 5.69 2 9c0 2.97 2.16 5.44 5 5.92V21h2v-6.09c0-.98-.71-1.8-1.67-1.97C5.44 12.63 4 10.98 4 9c0-2.21 1.79-4 4-4 1.98 0 3.63 1.44 3.94 3.33.17.96.99 1.67 1.97 1.67h4.26l-1.59 1.59L18 13l4-4-4-4-1.41 1.41L18.17 8h-4.25z" }),
  "RoundaboutRightOutlined"
);
const RoundedCornerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z" }),
  "RoundedCornerOutlined"
);
const RouteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 15.18V7c0-2.21-1.79-4-4-4s-4 1.79-4 4v10c0 1.1-.9 2-2 2s-2-.9-2-2V8.82C8.16 8.4 9 7.3 9 6c0-1.66-1.34-3-3-3S3 4.34 3 6c0 1.3.84 2.4 2 2.82V17c0 2.21 1.79 4 4 4s4-1.79 4-4V7c0-1.1.9-2 2-2s2 .9 2 2v8.18c-1.16.41-2 1.51-2 2.82 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82zM6 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }),
  "RouteOutlined"
);
const RouterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 4.2c1.5 0 3 .6 4.2 1.7l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2zm-3.3 2.5.8.8c.7-.7 1.6-1 2.5-1s1.8.3 2.5 1l.8-.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H5v-4h14v4zM6 16h2v2H6zm3.5 0h2v2h-2zm3.5 0h2v2h-2z" }),
  "RouterOutlined"
);
const RowingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8.5 14.5 4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z" }),
  "RowingOutlined"
);
const RssFeedIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "6.18", cy: "17.82", r: "2.18" }, "0"), /* @__PURE__ */ jsx("path", { d: "M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" }, "1")],
  "RssFeedOutlined"
);
const RsvpIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 9h1.5l-1.75 6h-1.5L12.5 9H14l1 3.43L16 9zM5.1 12.9 6 15H4.5l-.85-2H2.5v2H1V9h3.5c.85 0 1.5.65 1.5 1.5v1c0 .6-.4 1.15-.9 1.4zm-.6-2.4h-2v1h2v-1zm17 2.5h-2v2H18V9h3.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5zm0-2.5h-2v1h2v-1zM11.5 9v1.5h-3v.75h2c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7v-1.5h3v-.75H7.75c-.41 0-.75-.34-.75-.75v-2c0-.55.45-1 1-1h3.5z" }),
  "RsvpOutlined"
);
const RttIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m9.03 3-1.11 7.07h2.62l.7-4.5h2.58L11.8 18.43H9.47L9.06 21h7.27l.4-2.57h-2.35l2-12.86h2.58l-.71 4.5h2.65L22 3H9.03zM8 5H4l-.31 2h4L8 5zm-.61 4h-4l-.31 2h4l.31-2zm.92 8h-6L2 19h6l.31-2zm.62-4h-6l-.31 2h6.01l.3-2z" }),
  "RttOutlined"
);
const RuleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.54 11 13 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L16.54 11zM11 7H2v2h9V7zm10 6.41L19.59 12 17 14.59 14.41 12 13 13.41 15.59 16 13 18.59 14.41 20 17 17.41 19.59 20 21 18.59 18.41 16 21 13.41zM11 15H2v2h9v-2z" }),
  "RuleOutlined"
);
const RuleFolderIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.83 16 5 13.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L7.83 16zm9.58-3L19 14.59 17.59 16 16 14.41 14.41 16 13 14.59 14.59 13 13 11.41 14.41 10 16 11.59 17.59 10 19 11.41 17.41 13zM20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10z" }),
  "RuleFolderOutlined"
);
const RunCircleIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M13.54 8.97c-.23-.47-.76-.71-1.26-.53L9 9.65V12h1v-1.65l1.54-.57-.96 4.89-2.78-.57-.2.98 3.76.77.52-2.64L13 14.42V18h1v-3.97l-1.32-1.44.41-2.35C13.99 11.46 15.3 12 16 12v-1c-.41 0-1.63-.33-2.46-2.03z" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "13.5", cy: "7", r: "1" }, "2")],
  "RunCircleOutlined"
);
const RunningWithErrorsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 10v8h-2v-8h2zm-2 10v2h2v-2h-2zm-2-2.71C16.53 18.95 14.39 20 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8v9l7.55-7.55C17.72 3.34 15.02 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c2.25 0 4.33-.74 6-2v-2.71z" }),
  "RunningWithErrorsOutlined"
);
const RvHookupIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3-3-3z" }),
  "RvHookupOutlined"
);
const SafetyDividerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 5h2v14h-2V5zm-6 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58C6.93 13.21 5.99 13 5 13s-1.93.21-2.78.58C1.48 13.9 1 14.62 1 15.43V16h8v-.57c0-.81-.48-1.53-1.22-1.85zM19 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58c-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58c-.74.32-1.22 1.04-1.22 1.85V16h8v-.57c0-.81-.48-1.53-1.22-1.85z" }),
  "SafetyDividerOutlined"
);
const SailingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 13.5V2L3 13.5h8zm-2-2H6.83L9 8.38v3.12zm12 2C21 6.5 14.5 1 12.5 1c0 0 1 3 1 6.5s-1 6-1 6H21zm-5.62-8.26c1.42 1.52 2.88 3.72 3.41 6.26h-3.68c.21-1.1.39-2.46.39-4 0-.79-.05-1.55-.12-2.26zM22 15H2c.31 1.53 1.16 2.84 2.33 3.73.65-.27 1.22-.72 1.67-1.23.73.84 1.8 1.5 3 1.5s2.27-.66 3-1.5c.73.84 1.8 1.5 3 1.5s2.26-.66 3-1.5c.45.51 1.02.96 1.67 1.23 1.17-.89 2.02-2.2 2.33-3.73zm0 8v-2h-1c-1.04 0-2.08-.35-3-1-1.83 1.3-4.17 1.3-6 0-1.83 1.3-4.17 1.3-6 0-.91.65-1.96 1-3 1H2v2h1c1.03 0 2.05-.25 3-.75 1.89 1 4.11 1 6 0 1.89 1 4.11 1 6 0 .95.5 1.97.75 3 .75h1z" }),
  "SailingOutlined"
);
const SanitizerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.5 6.5C15.5 5.66 17 4 17 4s1.5 1.66 1.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zm4 8.5c1.38 0 2.5-1.12 2.5-2.5 0-1.67-2.5-4.5-2.5-4.5S17 10.83 17 12.5c0 1.38 1.12 2.5 2.5 2.5zM13 14h-2v-2H9v2H7v2h2v2h2v-2h2v-2zm3-2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8c0-2.97 2.16-5.43 5-5.91V4H7V2h6c1.13 0 2.15.39 2.99 1.01l-1.43 1.43C14.1 4.17 13.57 4 13 4h-2v2.09c2.84.48 5 2.94 5 5.91zm-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4v8h8v-8z" }),
  "SanitizerOutlined"
);
const SatelliteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM8.57 6H6v2.58c1.42 0 2.57-1.16 2.57-2.58zM12 6h-1.71c0 2.36-1.92 4.29-4.29 4.29V12c3.32 0 6-2.69 6-6zm2.14 5.86-3 3.87L9 13.15 6 17h12z" }),
  "SatelliteOutlined"
);
const SatelliteAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 14h2c0 4.97-4.03 9-9 9v-2c3.87 0 7-3.13 7-7zm-7 3v2c2.76 0 5-2.24 5-5h-2c0 1.66-1.34 3-3 3zM18.26.59l3.54 3.54c.78.78.78 2.05 0 2.83l-3.18 3.18c-.78.78-2.05.78-2.83 0L14.55 8.9l-.71.7 1.24 1.24c.78.78.78 2.05 0 2.83l-1.41 1.41c-.78.78-2.05.78-2.83 0L9.6 13.84l-.71.71 1.24 1.24c.78.78.78 2.05 0 2.83L6.95 21.8c-.78.78-2.05.78-2.83 0L.58 18.26c-.78-.78-.78-2.05 0-2.83l3.18-3.18c.78-.78 2.05-.78 2.83 0l1.24 1.24.71-.71-1.24-1.23c-.78-.78-.78-2.05 0-2.83L8.72 7.3c.78-.78 2.05-.78 2.83 0l1.24 1.24.71-.71-1.25-1.23c-.78-.78-.78-2.05 0-2.83L15.43.59c.79-.79 2.05-.79 2.83 0zm-15.2 15.2L2 16.85l3.54 3.54 1.06-1.06-3.54-3.54zm2.12-2.12-1.06 1.06 3.54 3.54 1.06-1.06-3.54-3.54zm4.95-4.95-1.41 1.41 3.54 3.54 1.41-1.41-3.54-3.54zm4.6-4.6-1.06 1.06 3.54 3.54 1.06-1.06-3.54-3.54zM16.85 2l-1.06 1.06 3.54 3.54 1.06-1.06L16.85 2z" }),
  "SatelliteAltOutlined"
);
const SaveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z" }),
  "SaveOutlined"
);
const SaveAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z" }),
  "SaveAltOutlined"
);
const SaveAsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 12.4V7l-4-4H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h7.4l2-2H5V5h11.17L19 7.83v6.57l2-2zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zM6 6h9v4H6V6zm13.99 10.25 1.77 1.77L16.77 23H15v-1.77l4.99-4.98zm3.26.26-.85.85-1.77-1.77.85-.85c.2-.2.51-.2.71 0l1.06 1.06c.2.2.2.52 0 .71z" }),
  "SaveAsOutlined"
);
const SavedSearchIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M14.73 13.31C15.52 12.24 16 10.93 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.43 0 2.74-.48 3.81-1.27L19.59 21 21 19.59l-6.27-6.28zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M10.29 8.44 9.5 6l-.79 2.44H6.25l2.01 1.59-.77 2.47 2.01-1.53 2.01 1.53-.77-2.47 2.01-1.59z" }, "1")],
  "SavedSearchOutlined"
);
const SavingsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 10c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zM8 9h5V7H8v2zm14-1.5v6.97l-2.82.94L17.5 21H12v-2h-2v2H4.5S2 12.54 2 9.5 4.46 4 7.5 4h5c.91-1.21 2.36-2 4-2 .83 0 1.5.67 1.5 1.5 0 .21-.04.4-.12.58-.14.34-.26.73-.32 1.15l2.27 2.27H22zm-2 2h-1L15.5 6c0-.65.09-1.29.26-1.91-.97.25-1.76.97-2.09 1.91H7.5C5.57 6 4 7.57 4 9.5c0 1.88 1.22 6.65 2.01 9.5H8v-2h6v2h2.01l1.55-5.15 2.44-.82V9.5z" }),
  "SavingsOutlined"
);
const ScaleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 11V8c4.56-.58 8-3.1 8-6H2c0 2.9 3.44 5.42 8 6v3c-3.68.73-8 3.61-8 11h6v-2H4.13c.93-6.83 6.65-7.2 7.87-7.2s6.94.37 7.87 7.2H16v2h6c0-7.39-4.32-10.27-8-11zm4.87-7C17.5 5.19 15 6.12 12 6.12S6.5 5.19 5.13 4h13.74zM12 22c-1.1 0-2-.9-2-2 0-.55.22-1.05.59-1.41C11.39 17.79 16 16 16 16s-1.79 4.61-2.59 5.41c-.36.37-.86.59-1.41.59z" }),
  "ScaleOutlined"
);
const ScannerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.8 10.7 4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM19 18H5v-4h14v4zM6 15h2v2H6zm4 0h8v2h-8z" }),
  "ScannerOutlined"
);
const ScatterPlotIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 18c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5.6 17.6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }),
  "ScatterPlotOutlined"
);
const ScheduleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" }),
  "ScheduleOutlined"
);
const ScheduleSendIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85-.7.71z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m11 12-6-1.5V7.01l8.87 3.74c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5l6-1.5z" }, "1")],
  "ScheduleSendOutlined"
);
const SchemaIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9h-7zM6 3h3v2H6V3zm3 18H6v-2h3v2zm0-8H6v-2h3v2zm10 0h-3v-2h3v2z" }),
  "SchemaOutlined"
);
const SchoolIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" }),
  "SchoolOutlined"
);
const ScienceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 11.33 18 18H6l5-6.67V6h2m2.96-2H8.04c-.42 0-.65.48-.39.81L9 6.5v4.17L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6L15 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81z" }),
  "ScienceOutlined"
);
const ScoreIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5l4-4 4 4 6-6v6zm0-8.5-6 6-4-4-4 4V5h14v5.5zM13.5 9V6H12v6h1.5zm3.7 3-2-3 2-3h-1.7l-2 3 2 3zM11 10.5H8.5v-.75H11V6H7v1.5h2.5v.75H7V12h4z" }),
  "ScoreOutlined"
);
const ScreenLockLandscapeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4v-1z" }),
  "ScreenLockLandscapeOutlined"
);
const ScreenLockPortraitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4v-1zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z" }),
  "ScreenLockPortraitOutlined"
);
const ScreenLockRotationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m22.3 13.77-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L3.56 9.17l5.66-5.66 2.1 2.1 1.41-1.41-2.45-2.45c-.59-.59-1.54-.59-2.12 0L1.8 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.82-1.33 1.33zM15.05 10h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1v-.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4h-3.4v-.5z" }),
  "ScreenLockRotationOutlined"
);
const ScreenRotationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z" }),
  "ScreenRotationOutlined"
);
const ScreenSearchDesktopIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2zM4 5h16v11H4V5zM1 19h22v2H1z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M13.97 7.53c-1.37-1.37-3.58-1.37-4.95 0s-1.37 3.58 0 4.95c1.18 1.18 3 1.34 4.36.47l2.09 2.09 1.06-1.06-2.09-2.09c.87-1.36.72-3.18-.47-4.36zm-1.06 3.88c-.78.78-2.05.78-2.83 0-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0c.78.79.78 2.05 0 2.83z" }, "1")],
  "ScreenSearchDesktopOutlined"
);
const ScreenShareIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zM4 16V6h16v10.01L4 16zm9-6.87c-3.89.54-5.44 3.2-6 5.87 1.39-1.87 3.22-2.72 6-2.72v2.19l4-3.74L13 7v2.13z" }),
  "ScreenShareOutlined"
);
const ScreenshotIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1zM9.5 8.5H12V7H8v4h1.5V8.5zM12 17h4v-4h-1.5v2.5H12V17z" }),
  "ScreenshotOutlined"
);
const SdIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7 15h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H7.5v-1h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2V13H6v1c0 .55.45 1 1 1zm11-1v-4c0-.55-.45-1-1-1h-4v6h4c.55 0 1-.45 1-1zm-1.5-.5h-2v-3h2v3z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" }, "1")],
  "SdOutlined"
);
const SdCardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z" }),
  "SdCardOutlined"
);
const SdCardAlertIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16zm-7-5h2v2h-2zm0-7h2v5h-2z" }),
  "SdCardAlertOutlined"
);
const SdStorageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 4v16H6V8.83L10.83 4H18m0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z" }),
  "SdStorageOutlined"
);
const SearchOffIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3 6.08 3 3.28 5.64 3.03 9h2.02C5.3 6.75 7.18 5 9.5 5 11.99 5 14 7.01 14 9.5S11.99 14 9.5 14c-.17 0-.33-.03-.5-.05v2.02c.17.02.33.03.5.03 1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M6.47 10.82 4 13.29l-2.47-2.47-.71.71L3.29 14 .82 16.47l.71.71L4 14.71l2.47 2.47.71-.71L4.71 14l2.47-2.47z" }, "1")],
  "SearchOffOutlined"
);
const SecurityIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" }),
  "SecurityOutlined"
);
const SecurityUpdateIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zM7 4V3h10v1H7zm9 8-4 4-4-4 1.41-1.41L11 12.17V8h2v4.17l1.59-1.59L16 12z" }),
  "SecurityUpdateOutlined"
);
const SecurityUpdateGoodIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1zm-1 6.05-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15 16 10.05z" }),
  "SecurityUpdateGoodOutlined"
);
const SecurityUpdateWarningIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M11 15h2v2h-2zm0-8h2v6h-2z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1z" }, "1")],
  "SecurityUpdateWarningOutlined"
);
const SegmentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z" }),
  "SegmentOutlined"
);
const SelectAllIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z" }),
  "SelectAllOutlined"
);
const SelfImprovementIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "12", cy: "6", r: "2" }, "0"), /* @__PURE__ */ jsx("path", { d: "M21 16v-2c-2.24 0-4.16-.96-5.6-2.68l-1.34-1.6c-.38-.46-.94-.72-1.53-.72h-1.05c-.59 0-1.15.26-1.53.72l-1.34 1.6C7.16 13.04 5.24 14 3 14v2c2.77 0 5.19-1.17 7-3.25V15l-3.88 1.55c-.67.27-1.12.93-1.12 1.66C5 19.2 5.8 20 6.79 20H9v-.5c0-1.38 1.12-2.5 2.5-2.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.83 0-1.5.67-1.5 1.5v.5h7.21c.99 0 1.79-.8 1.79-1.79 0-.73-.45-1.39-1.12-1.66L14 15v-2.25c1.81 2.08 4.23 3.25 7 3.25z" }, "1")],
  "SelfImprovementOutlined"
);
const SellIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83zM12.83 20 4 11.17V4h7.17L20 12.83 12.83 20z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "6.5", cy: "6.5", r: "1.5" }, "1")],
  "SellOutlined"
);
const SendIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m4.01 6.03 7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3 2 10l15 2-15 2 .01 7L23 12 2.01 3z" }),
  "SendOutlined"
);
const SendAndArchiveIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m11 12-6-1.5V7.01l8.87 3.73c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5l6-1.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8-3-3 .71-.71 1.79 1.79V14h1v4.09l1.79-1.79.71.7-3 3z" }, "1")],
  "SendAndArchiveOutlined"
);
const SendTimeExtensionIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 6v6.26l2 1V6c0-1.1-.9-2-2-2h-4c0-1.38-1.12-2.5-2.5-2.5S9 2.62 9 4H5.01c-1.1 0-2 .9-2 2v3.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.16 1.37-2.78 2.2-2.94v-2.03c-1.43.17-3.15 1.04-3.87 2.97H5v-2.13c2.17-.8 3-2.87 3-4.37 0-1.49-.83-3.56-2.99-4.37V6H11V4c0-.28.22-.5.5-.5s.5.22.5.5v2h6z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M13 12v4l4 1-4 1v4l10-5z" }, "1")],
  "SendTimeExtensionOutlined"
);
const SendToMobileIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18 8 4 4-4 4-1.41-1.41L18.17 13H13v-2h5.17l-1.59-1.59L18 8zM7 1.01 17 1c1.1 0 2 .9 2 2v4h-2V6H7v12h10v-1h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-1.99 2-1.99zM7 21h10v-1H7v1zM7 4h10V3H7v1z" }),
  "SendToMobileOutlined"
);
const SensorDoorIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 4v16H6V4h12m0-2H6c-1.1 0-2 .9-2 2v18h16V4c0-1.1-.9-2-2-2zm-2.5 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 12.83 17 12s-.67-1.5-1.5-1.5z" }),
  "SensorDoorOutlined"
);
const SensorWindowIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v7h-4v-1h-4v1H6V4h12zM6 20v-7h12v7H6z" }),
  "SensorWindowOutlined"
);
const SensorsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.76 16.24C6.67 15.16 6 13.66 6 12s.67-3.16 1.76-4.24l1.42 1.42C8.45 9.9 8 10.9 8 12c0 1.1.45 2.1 1.17 2.83l-1.41 1.41zm8.48 0C17.33 15.16 18 13.66 18 12s-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12c0 1.1-.45 2.1-1.17 2.83l1.41 1.41zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 2c0 2.21-.9 4.21-2.35 5.65l1.42 1.42C20.88 17.26 22 14.76 22 12s-1.12-5.26-2.93-7.07l-1.42 1.42C19.1 7.79 20 9.79 20 12zM6.35 6.35 4.93 4.93C3.12 6.74 2 9.24 2 12s1.12 5.26 2.93 7.07l1.42-1.42C4.9 16.21 4 14.21 4 12s.9-4.21 2.35-5.65z" }),
  "SensorsOutlined"
);
const SensorsOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8.14 10.96c-.09.33-.14.68-.14 1.04 0 1.1.45 2.1 1.17 2.83l-1.42 1.42C6.67 15.16 6 13.66 6 12c0-.93.21-1.8.58-2.59L5.11 7.94C4.4 9.13 4 10.52 4 12c0 2.21.9 4.21 2.35 5.65l-1.42 1.42C3.12 17.26 2 14.76 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41L8.14 10.96zm9.28 3.63c.37-.79.58-1.66.58-2.59 0-1.66-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12c0 .36-.05.71-.14 1.04l1.56 1.55zM20 12c0 1.48-.4 2.87-1.11 4.06l1.45 1.45C21.39 15.93 22 14.04 22 12c0-2.76-1.12-5.26-2.93-7.07l-1.42 1.42C19.1 7.79 20 9.79 20 12z" }),
  "SensorsOffOutlined"
);
const SentimentDissatisfiedIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "9.5", r: "1.5" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "9.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("path", { d: "M12 14c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5zm-.01-12C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, "2")],
  "SentimentDissatisfiedOutlined"
);
const SentimentNeutralIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M9 14h6v1.5H9z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "9.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "9.5", r: "1.5" }, "2"), /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, "3")],
  "SentimentNeutralOutlined"
);
const SentimentSatisfiedIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "9.5", r: "1.5" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "9.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("path", { d: "M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, "2")],
  "SentimentSatisfiedOutlined"
);
const SentimentSatisfiedAltIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "9.5", r: "1.5" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "9.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("path", { d: "M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, "2")],
  "SentimentSatisfiedAltOutlined"
);
const SentimentVeryDissatisfiedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 13.5c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zm4.17-10C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06z" }),
  "SentimentVeryDissatisfiedOutlined"
);
const SentimentVerySatisfiedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12L13 9.94zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11l1.06-1.06zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" }),
  "SentimentVerySatisfiedOutlined"
);
const SetMealIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m21.05 17.56-17.97.94L3 17l17.98-.94.07 1.5zM21 19.48H3v1.5h18v-1.5zM23 13V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 0H3V4h18v9zm-1-7c-1.68 0-3.04.98-3.21 2.23-.64-.73-2.73-2.73-6.54-2.73-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11V6z" }),
  "SetMealOutlined"
);
const SettingsAccessibilityIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.5 4c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 6c1.86.5 4 .83 6 1v12h2v-6h2v6h2V7c2-.17 4.14-.5 6-1l-.5-2zM12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2z" }),
  "SettingsAccessibilityOutlined"
);
const SettingsApplicationsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m6.21 13.97 1.2 2.07c.08.13.23.18.37.13l1.49-.6c.31.24.64.44 1.01.59l.22 1.59c.03.14.15.25.3.25h2.4c.15 0 .27-.11.3-.26l.22-1.59c.36-.15.7-.35 1.01-.59l1.49.6c.14.05.29 0 .37-.13l1.2-2.07c.08-.13.04-.29-.07-.39l-1.27-.99c.03-.19.04-.39.04-.58 0-.2-.02-.39-.04-.59l1.27-.99c.11-.09.15-.26.07-.39l-1.2-2.07c-.08-.13-.23-.18-.37-.13l-1.49.6c-.31-.24-.64-.44-1.01-.59l-.22-1.59c-.03-.14-.15-.25-.3-.25h-2.4c-.15 0-.27.11-.3.26l-.22 1.59c-.36.15-.71.34-1.01.58l-1.49-.6c-.14-.05-.29 0-.37.13l-1.2 2.07c-.08.13-.04.29.07.39l1.27.99c-.03.2-.05.39-.05.59 0 .2.02.39.04.59l-1.27.99c-.11.1-.14.26-.06.39zM12 10.29c.94 0 1.71.77 1.71 1.71s-.77 1.71-1.71 1.71-1.71-.77-1.71-1.71.77-1.71 1.71-1.71zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V5h14v14z" }),
  "SettingsApplicationsOutlined"
);
const SettingsBackupRestoreIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" }),
  "SettingsBackupRestoreOutlined"
);
const SettingsBluetoothIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z" }),
  "SettingsBluetoothOutlined"
);
const SettingsBrightnessIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z" }),
  "SettingsBrightnessOutlined"
);
const SettingsCellIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 18H8v-1h8v1zm0-3H8V5h8v10zm0-12H8V2h8v1z" }),
  "SettingsCellOutlined"
);
const SettingsEthernetIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.77 6.76 6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" }),
  "SettingsEthernetOutlined"
);
const SettingsInputAntennaIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z" }),
  "SettingsInputAntennaOutlined"
);
const SettingsInputComponentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v10c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16V6H5V2zM4 17c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1zm-1-5V8h2v4H3zM13 2c0-.55-.45-1-1-1s-1 .45-1 1v4H9v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6h-2V2zm-1 15c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1zm-1-5V8h2v4h-2zm10-6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6h-2zm-1 11c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1zm-1-5V8h2v4h-2z" }),
  "SettingsInputComponentOutlined"
);
const SettingsInputCompositeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v10c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16V6H5V2zM4 17c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1zm-1-5V8h2v4H3zM13 2c0-.55-.45-1-1-1s-1 .45-1 1v4H9v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6h-2V2zm-1 15c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1zm-1-5V8h2v4h-2zm10-6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6h-2zm-1 11c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1zm-1-5V8h2v4h-2z" }),
  "SettingsInputCompositeOutlined"
);
const SettingsInputHdmiIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2.01V5h-1v2H11V5h-1v2H8V4zm9 8.53-3 6V20h-4v-1.47l-3-6V9h10v3.53z" }),
  "SettingsInputHdmiOutlined"
);
const SettingsInputSvideoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" }),
  "SettingsInputSvideoOutlined"
);
const SettingsOverscanIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.01 5.5 10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z" }),
  "SettingsOverscanOutlined"
);
const SettingsPhoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 9h2v2h-2zm4 0h2v2h-2zm5 6.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.46 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51zM19 9h2v2h-2z" }),
  "SettingsPhoneOutlined"
);
const SettingsPowerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z" }),
  "SettingsPowerOutlined"
);
const SettingsRemoteIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-1 12h-4V11h4v10z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "13", r: "1" }, "1"), /* @__PURE__ */ jsx("path", { d: "m7.05 6.05 1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z" }, "2")],
  "SettingsRemoteOutlined"
);
const SettingsSuggestIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm8.5-2 1.09-2.41L22 5.5l-2.41-1.09L18.5 2l-1.09 2.41L15 5.5l2.41 1.09L18.5 9zm2.78 3.72L20.5 11l-.78 1.72-1.72.78 1.72.78.78 1.72.78-1.72L23 13.5l-1.72-.78zM16.25 14c0-.12 0-.25-.01-.37l1.94-1.47-2.5-4.33-2.24.94c-.2-.13-.42-.26-.64-.37L12.5 6h-5l-.3 2.41c-.22.11-.43.24-.64.37l-2.24-.95-2.5 4.33 1.94 1.47c-.01.12-.01.25-.01.37s0 .25.01.37l-1.94 1.47 2.5 4.33 2.24-.94c.2.13.42.26.64.37l.3 2.4h5l.3-2.41c.22-.11.43-.23.64-.37l2.24.94 2.5-4.33-1.94-1.47c.01-.11.01-.24.01-.36zm-1.42 3.64-1.73-.73c-.56.6-1.3 1.04-2.13 1.23L10.73 20H9.27l-.23-1.86c-.83-.19-1.57-.63-2.13-1.23l-1.73.73-.73-1.27 1.49-1.13c-.12-.39-.18-.8-.18-1.23 0-.43.06-.84.18-1.23l-1.49-1.13.73-1.27 1.73.73c.56-.6 1.3-1.04 2.13-1.23L9.27 8h1.47l.23 1.86c.83.19 1.57.63 2.13 1.23l1.73-.73.73 1.27-1.49 1.13c.12.39.18.8.18 1.23 0 .43-.06.84-.18 1.23l1.49 1.13-.73 1.29z" }),
  "SettingsSuggestOutlined"
);
const SettingsSystemDaydreamIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.5 17H9c-2.21 0-4-1.79-4-4 0-1.93 1.36-3.56 3.22-3.92C9.04 7.8 10.47 7 12 7c1.95 0 3.66 1.28 4.26 3.09 1.58.36 2.74 1.75 2.74 3.41 0 1.93-1.57 3.5-3.5 3.5zm-6.76-5.98C7.74 11.15 7 11.99 7 13c0 1.1.9 2 2 2h6.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.87l-.17-.86C14.29 9.92 13.23 9 12 9c-.96 0-1.84.57-2.26 1.45l-.27.57h-.73zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z" }),
  "SettingsSystemDaydreamOutlined"
);
const SettingsVoiceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 22h2v2H7zm5-9c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .56-.44 1-1 1-.55 0-1-.45-1-1V4zm0 18h2v2h-2zm4 0h2v2h-2zm4-12h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z" }),
  "SettingsVoiceOutlined"
);
const SevenKIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M7.75 15H9.5l1.46-4.71C11.15 9.65 10.67 9 10 9H6.5v1.5h2.63L7.75 15zm6.75-2.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z" }, "1")],
  "SevenKOutlined"
);
const SevenKPlusIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M6.75 15H8.5l1.46-4.71C10.15 9.65 9.67 9 9 9H5.5v1.5h2.63L6.75 15zm5.75-2.25L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z" }, "1")],
  "SevenKPlusOutlined"
);
const SevenMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M11.25 11.5H13l1.46-4.71c.19-.64-.29-1.29-.96-1.29H10V7h2.62l-1.37 4.5z" }, "2")],
  "SevenMpOutlined"
);
const SeventeenMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M8.5 11.5H10v-6H7V7h1.5zm4.75 0H15l1.46-4.71c.19-.64-.29-1.29-.96-1.29H12V7h2.62l-1.37 4.5z" }, "2")],
  "SeventeenMpOutlined"
);
const ShareIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }),
  "ShareOutlined"
);
const ShareLocationIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M13.02 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.42-1.43c-1.11.86-2.44 1.44-3.9 1.62zM4.03 12c0-4.05 3.03-7.41 6.95-7.93V2.05C5.95 2.58 2.03 6.84 2.03 12c0 5.16 3.92 9.42 8.95 9.95v-2.02c-3.92-.52-6.95-3.88-6.95-7.93zm15.92-1h2.02c-.2-2.01-1-3.84-2.21-5.32l-1.43 1.43c.86 1.1 1.44 2.43 1.62 3.89zm-1.61-6.74c-1.48-1.21-3.32-2.01-5.32-2.21v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zm-.01 12.64 1.43 1.42c1.21-1.48 2.01-3.31 2.21-5.32h-2.02c-.18 1.46-.76 2.79-1.62 3.9z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M16 11.1C16 8.61 14.1 7 12 7s-4 1.61-4 4.1c0 1.66 1.33 3.63 4 5.9 2.67-2.27 4-4.24 4-5.9zm-4 .9c-.59 0-1.07-.48-1.07-1.07 0-.59.48-1.07 1.07-1.07s1.07.48 1.07 1.07c0 .59-.48 1.07-1.07 1.07z" }, "1")],
  "ShareLocationOutlined"
);
const ShieldIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z" }),
  "ShieldOutlined"
);
const ShieldMoonIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M9.01 14.33c1.75 2.17 5.12 2.24 6.96.07.23-.27.08-.68-.26-.74-1.29-.21-2.48-.98-3.18-2.2-.71-1.22-.78-2.63-.32-3.86.12-.33-.16-.66-.51-.6-3.34.62-4.89 4.61-2.69 7.33z" }, "1")],
  "ShieldMoonOutlined"
);
const ShopIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zm10 15H4V8h16v11zM9 18l7.5-5L9 9z" }),
  "ShopOutlined"
);
const Shop2Icon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M3 9H1v11c0 1.11.89 2 2 2h16v-2H3V9z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M12 8v7l5.5-3.5z" }, "2")],
  "Shop2Outlined"
);
const ShopTwoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9zm-9-1 5.5-4L12 8z" }),
  "ShopTwoOutlined"
);
const ShoppingBagIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" }),
  "ShoppingBagOutlined"
);
const ShoppingBasketIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8 14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }),
  "ShoppingBasketOutlined"
);
const ShoppingCartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" }),
  "ShoppingCartOutlined"
);
const ShoppingCartCheckoutIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM12 2l4 4-4 4-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59L12 2z" }),
  "ShoppingCartCheckoutOutlined"
);
const ShortTextIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 9h16v2H4V9zm0 4h10v2H4v-2z" }),
  "ShortTextOutlined"
);
const ShortcutIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m15 5-1.41 1.41L15 7.83 17.17 10H8c-2.76 0-5 2.24-5 5v4h2v-4c0-1.65 1.35-3 3-3h9.17L15 14.17l-1.41 1.41L15 17l6-6-6-6z" }),
  "ShortcutOutlined"
);
const ShowChartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z" }),
  "ShowChartOutlined"
);
const ShowerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 17c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3-4v2H5v-2c0-3.53 2.61-6.43 6-6.92V3h2v2.08c3.39.49 6 3.39 6 6.92zm-2 0c0-2.76-2.24-5-5-5s-5 2.24-5 5h10zm-9 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" }),
  "ShowerOutlined"
);
const ShuffleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" }),
  "ShuffleOutlined"
);
const ShuffleOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM5.41 4l5.18 5.17-1.41 1.42L4 5.42 5.41 4zM20 20h-6v-2h2.61l-3.2-3.2 1.42-1.42 3.13 3.13.04.04V14h2v6zm0-10h-2V7.42L5.41 20 4 18.59 16.58 6H14V4h6v6z" }),
  "ShuffleOnOutlined"
);
const ShutterSpeedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 1H9v2h6V1zm4.03 6.39 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-.32-5H6.35c.57 1.62 1.82 2.92 3.41 3.56l-.11-.06 2.03-3.5zm5.97-4c-.57-1.6-1.78-2.89-3.34-3.54L12.26 11h5.39zm-7.04 7.83c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9-2.85 4.92zM7.55 8.99C6.59 10.05 6 11.46 6 13c0 .34.04.67.09 1h4.72L7.55 8.99zm8.79 8.14C17.37 16.06 18 14.6 18 13c0-.34-.04-.67-.09-1h-4.34l2.77 5.13zm-3.01-9.98C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56 2.72-4.7z" }),
  "ShutterSpeedOutlined"
);
const SickIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.32 10.56 8.38 9.5 7.32 8.44l1.06-1.06L10.5 9.5l-2.12 2.12-1.06-1.06zM4.5 9c.03 0 .05.01.08.01C5.77 6.07 8.64 4 12 4c2.19 0 4.16.88 5.61 2.3.15-.6.45-1.29.81-1.96C16.68 2.88 14.44 2 11.99 2c-4.88 0-8.94 3.51-9.81 8.14C2.74 9.44 3.59 9 4.5 9zM21 10.5c-.42 0-.82-.09-1.19-.22.12.55.19 1.13.19 1.72 0 4.42-3.58 8-8 8-3.36 0-6.23-2.07-7.42-5.01-.03 0-.05.01-.08.01-.52 0-1.04-.14-1.5-.4-.32-.18-.59-.42-.82-.7.89 4.61 4.93 8.1 9.8 8.1C17.52 22 22 17.52 22 12c0-.55-.06-1.09-.14-1.62-.28.07-.56.12-.86.12zM21 3s-2 2.9-2 4 .9 2 2 2 2-.9 2-2-2-4-2-4zm-5.38 4.38L13.5 9.5l2.12 2.12 1.06-1.06-1.06-1.06 1.06-1.06-1.06-1.06zM8.56 17c.69-1.19 1.97-2 3.44-2s2.75.81 3.44 2h1.68c-.8-2.05-2.79-3.5-5.12-3.5-.87 0-1.7.2-2.43.57L5.99 12c0-.52-.26-1.02-.74-1.29-.72-.41-1.63-.17-2.05.55-.41.72-.17 1.63.55 2.05.48.28 1.05.25 1.49 0l2.97 1.72c-.57.53-1.03 1.21-1.33 1.97h1.68z" }),
  "SickOutlined"
);
const SignalCellular0BarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 22h20V2L2 22zm18-2H6.83L20 6.83V20z" }),
  "SignalCellular0BarOutlined"
);
const SignalCellular1BarIcon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("path", { fillOpacity: ".3", d: "M2 22h20V2L2 22z" }),
    /* @__PURE__ */ jsx("path", { d: "M12 12L2 22h10V12z" })
  ] }),
  "SignalCellular1BarOutlined"
);
const SignalCellular2BarIcon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("path", { fillOpacity: ".3", d: "M2 22h20V2L2 22z" }),
    /* @__PURE__ */ jsx("path", { d: "M14 10L2 22h12V10z" })
  ] }),
  "SignalCellular2BarOutlined"
);
const SignalCellular3BarIcon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("path", { fillOpacity: ".3", d: "M2 22h20V2L2 22z" }),
    /* @__PURE__ */ jsx("path", { d: "M17 7L2 22h15V7z" })
  ] }),
  "SignalCellular3BarOutlined"
);
const SignalCellular4BarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 22h20V2L2 22z" }),
  "SignalCellular4BarOutlined"
);
const SignalCellularAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z" }),
  "SignalCellularAltOutlined"
);
const SignalCellularConnectedNoInternet0BarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zm-2-2v2H2L22 2v6h-2V6.83L6.83 20H18z" }),
  "SignalCellularConnectedNoInternet0BarOutlined"
);
const SignalCellularConnectedNoInternet1BarIcon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("path", { fillOpacity: ".3", d: "M22 8V2L2 22h16V8h4z" }),
    /* @__PURE__ */ jsx("path", { d: "M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z" })
  ] }),
  "SignalCellularConnectedNoInternet1BarOutlined"
);
const SignalCellularConnectedNoInternet2BarIcon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("path", { fillOpacity: ".3", d: "M22 8V2L2 22h16V8h4z" }),
    /* @__PURE__ */ jsx("path", { d: "M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z" })
  ] }),
  "SignalCellularConnectedNoInternet2BarOutlined"
);
const SignalCellularConnectedNoInternet3BarIcon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("path", { fillOpacity: ".3", d: "M22 8V2L2 22h16V8h4z" }),
    /* @__PURE__ */ jsx("path", { d: "M18 22V6L2 22h16zm2-12v8h2v-8h-2zm0 12h2v-2h-2v2z" })
  ] }),
  "SignalCellularConnectedNoInternet3BarOutlined"
);
const SignalCellularConnectedNoInternet4BarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z" }),
  "SignalCellularConnectedNoInternet4BarOutlined"
);
const SignalCellularNoSimIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.83 5H17v9.11l2 2V5c0-1.1-.9-2-2-2h-7L7.94 5.06l1.42 1.42L10.83 5zm10.43 16.21L3.79 3.74 2.38 5.15 5 7.77V19c0 1.11.9 2 2 2h11.23l1.62 1.62 1.41-1.41zM7 19V9.79L16.23 19H7z" }),
  "SignalCellularNoSimOutlined"
);
const SignalCellularNodataIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 13h-9v9H2L22 2v11zm-1 2.41L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z" }),
  "SignalCellularNodataOutlined"
);
const SignalCellularNullIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6.83V20H6.83L20 6.83M22 2 2 22h20V2z" }),
  "SignalCellularNullOutlined"
);
const SignalCellularOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m21 1-8.31 8.31 8.31 8.3zM4.91 4.36 3.5 5.77l6.36 6.37L1 21h17.73l2 2 1.41-1.41z" }),
  "SignalCellularOffOutlined"
);
const SignalWifi0BarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zM2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17l-9.08-9.1z" }),
  "SignalWifi0BarOutlined"
);
const SignalWifi1BarIcon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z" })
  ] }),
  "SignalWifi1BarOutlined"
);
const SignalWifi1BarLockIcon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M15.5 14.5c0-.23.04-.46.07-.68-.92-.43-2.14-.82-3.57-.82-3 0-5.1 1.7-5.3 1.9l5.3 6.6 3.5-4.36V14.5zM23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z" })
  ] }),
  "SignalWifi1BarLockOutlined"
);
const SignalWifi2BarIcon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5 23.64 7z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M4.79 12.52L12 21.5l7.21-8.99C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z" })
  ] }),
  "SignalWifi2BarOutlined"
);
const SignalWifi2BarLockIcon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M15.5 14.5c0-1.34.51-2.53 1.34-3.42C15.62 10.51 13.98 10 12 10c-4.1 0-6.8 2.2-7.2 2.5l7.2 9 3.5-4.38V14.5zM23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z" })
  ] }),
  "SignalWifi2BarLockOutlined"
);
const SignalWifi3BarIcon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5 23.64 7z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M3.53 10.95L12 21.5l8.47-10.55C20.04 10.62 16.81 8 12 8s-8.04 2.62-8.47 2.95z" })
  ] }),
  "SignalWifi3BarOutlined"
);
const SignalWifi3BarLockIcon = createSvgIcon(
  /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        fillOpacity: ".3",
        d: "M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.19 1.35-3.99 3.27-4.68C17.29 8.98 14.94 8 12 8c-4.81 0-8.04 2.62-8.47 2.95L12 21.5l3.5-4.36V14.5z" })
  ] }),
  "SignalWifi3BarLockOutlined"
);
const SignalWifi4BarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.01 21.49 23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" }),
  "SignalWifi4BarOutlined"
);
const SignalWifi4BarLockIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M21.98 11 24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l6.35 6.36L12 21l3.05-3.05V15c0-.45.09-.88.23-1.29.54-1.57 2.01-2.71 3.77-2.71h2.93z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M22 16v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z" }, "1")],
  "SignalWifi4BarLockOutlined"
);
const SignalWifiBadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21v-9h8.99L24 8.98zM19.59 14l-2.09 2.09-.3-.3L15.41 14 14 15.41l1.79 1.79.3.3L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41 19.59 14z" }),
  "SignalWifiBadOutlined"
);
const SignalWifiConnectedNoInternet4Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21v-9h8.99L24 8.98zM19.59 14l-2.09 2.09-.3-.3L15.41 14 14 15.41l1.79 1.79.3.3L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41 19.59 14z" }),
  "SignalWifiConnectedNoInternet4Outlined"
);
const SignalWifiOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M23.64 7c-.45-.34-4.93-4-11.64-4-1.32 0-2.55.14-3.69.38L18.43 13.5 23.64 7zM3.41 1.31 2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z" }),
  "SignalWifiOffOutlined"
);
const SignalWifiStatusbar4BarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4z" }),
  "SignalWifiStatusbar4BarOutlined"
);
const SignalWifiStatusbarConnectedNoInternet4Icon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 4C7.31 4 3.07 5.9 0 8.98L12 21l5-5.01V8h5.92C19.97 5.51 16.16 4 12 4zm7 14h2v2h-2z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 10h2v6h-2z" }, "1")],
  "SignalWifiStatusbarConnectedNoInternet4Outlined"
);
const SignalWifiStatusbarNullIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zM2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17l-9.08-9.1z" }),
  "SignalWifiStatusbarNullOutlined"
);
const SignpostIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7v-2zM6 6h11.17l1 1-1 1H6V6zm12 10H6.83l-1-1 1-1H18v2z" }),
  "SignpostOutlined"
);
const SimCardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v16H6V8.83L10.83 4H18zM7 17h2v2H7zm8 0h2v2h-2zm-8-6h2v4H7zm4 4h2v4h-2zm0-4h2v2h-2zm4 0h2v4h-2z" }),
  "SimCardOutlined"
);
const SimCardAlertIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M11 15h2v2h-2zm0-7h2v5h-2z" }, "1")],
  "SimCardAlertOutlined"
);
const SimCardDownloadIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v16H6V8.83L10.83 4H18z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m16 13-4 4-4-4 1.41-1.41L11 13.17V9.02L13 9v4.17l1.59-1.59L16 13z" }, "1")],
  "SimCardDownloadOutlined"
);
const SingleBedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-5zm-4-2h-3V7h3v3zM8 7h3v3H8V7zm-2 5h12v3H6v-3z" }),
  "SingleBedOutlined"
);
const SipIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm7 3h2v6h-2V9zm3 0h4c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2.5v2H14V9zm3.5 1.5h-2v1h2v-1zm-11 .75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5v-1.5h3.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h4v1.5H6.5v.75z" }),
  "SipOutlined"
);
const SixKIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M14.5 12.75 16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5zM7.5 15H10c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H8v-1h3V9H7.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-2.5h1.5V14H8v-1.5z" }, "1")],
  "SixKOutlined"
);
const SixKPlusIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M12.5 12.75 14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5zM7 15h2c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H7.5v-1H10V9H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-2.5h1V14h-1v-1.5z" }, "1")],
  "SixKPlusOutlined"
);
const SixMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M11 11.5h2.5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-2V7h3V5.5H11c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-2.5H13v1.5h-1.5V9z" }, "2")],
  "SixMpOutlined"
);
const SixteenMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M13 11.5h2.5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-2V7h3V5.5H13c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-2.5H15v1.5h-1.5V9zm-5 2.5H10v-6H7V7h1.5z" }, "2")],
  "SixteenMpOutlined"
);
const SixtyFpsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 8v8h-4V8h4m0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3zm-9 3V5H5C3.34 5 2 6.34 2 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3v-3c0-1.66-1.34-3-3-3H5V8h5zm-2 5v3H5v-3h3z" }),
  "SixtyFpsOutlined"
);
const SixtyFpsSelectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 6v6h-3V6h3zm0-2h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 2V4H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H6V6h5zm-2 4v2H6v-2h3zM5 22H3v-5h2v5zm4 0H7v-5h2v5zm4 0h-2v-5h2v5zm8 0h-6v-5h6v5z" }),
  "SixtyFpsSelectOutlined"
);
const SkateboardingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM7.25 22.5c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm8.5 0c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm3.49-3.5c-.24 0-.45.11-.59.3-.55.73-1.42 1.2-2.4 1.2H16v-6l-4.32-2.67 1.8-2.89C14.63 10.78 16.68 12 19 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C14.16 5.64 13.61 5 12.7 5H7L4.5 9l1.7 1.06L8.1 7h2.35l-2.4 3.84c-.31.5-.39 1.11-.21 1.67l1.34 4.15-3.12 3.76c-.7-.16-1.3-.57-1.71-1.12-.14-.19-.36-.3-.6-.3-.44 0-.75.36-.75.75 0 .15.05.31.15.45.82 1.1 2.13 1.8 3.6 1.8h9.5c1.47 0 2.78-.7 3.6-1.8.1-.14.15-.3.15-.45 0-.39-.32-.75-.76-.75zM14 20.5H8.6l2.9-3.5-1-3.3 3.5 2.2v4.6z" }),
  "SkateboardingOutlined"
);
const SkipNextIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m6 18 8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z" }),
  "SkipNextOutlined"
);
const SkipPreviousIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 6h2v12H6zm3.5 6 8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z" }),
  "SkipPreviousOutlined"
);
const SleddingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm8.8 15.74c-.68 2.1-2.94 3.25-5.04 2.57L1 17.36l.46-1.43 3.93 1.28.46-1.43-3.92-1.28.46-1.43L4 13.6V9.5l5.47-2.35c.39-.17.84-.21 1.28-.07.95.31 1.46 1.32 1.16 2.27l-1.05 3.24 2.14-.34c.89-.15 1.76.32 2.14 1.14l2.08 4.51 1.93.63-.46 1.43-3.32-1.08-.47 1.42 3.32 1.08c1.31.43 2.72-.29 3.15-1.61.43-1.31-.29-2.72-1.61-3.15l.46-1.43c2.11.69 3.27 2.95 2.58 5.05zM6 14.25l1.01.33c-.22-.42-.28-.92-.12-1.4L7.92 10 6 10.82v3.43zm7.94 4.16-6.66-2.16-.46 1.43 6.66 2.16.46-1.43zm.69-1.36-1.18-2.56-3.97.89 5.15 1.67z" }),
  "SleddingOutlined"
);
const SlideshowIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }),
  "SlideshowOutlined"
);
const SlowMotionVideoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.05 9.79 10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1 4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z" }),
  "SlowMotionVideoOutlined"
);
const SmartButtonIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-7.5 10 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09L14.5 19zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62L17 14zm-2.5 5 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09L14.5 19zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62L17 14z" }),
  "SmartButtonOutlined"
);
const SmartScreenIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12.5 11.25H14v1.5h-1.5zm2.5 0h1.5v1.5H15zm-5 0h1.5v1.5H10zm-2.5 0H9v1.5H7.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM4 17H3V7h1v10zm14 0H6V7h12v10zm3 0h-1V7h1v10z" }, "1")],
  "SmartScreenOutlined"
);
const SmartToyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm7.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM8 15h8v2H8v-2z" }),
  "SmartToyOutlined"
);
const SmokeFreeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.5 13H22v3h-1.5zM18 13h1.5v3H18zm-1 0h-2.34L17 15.34zm-2.5-4.35h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35zm4.35-3.92c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.76c0-2.22-1.28-4.14-3.15-5.03zM3.41 4.59 2 6l7 7H2v3h10l7 7 1.41-1.41z" }),
  "SmokeFreeOutlined"
);
const SmokingRoomsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 16h1.5v3H18zM2 16h15v3H2zm14.03-5.8H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16zM20.5 16H22v3h-1.5zm-1.65-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03z" }),
  "SmokingRoomsOutlined"
);
const SmsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z" }),
  "SmsOutlined"
);
const SmsFailedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z" }),
  "SmsFailedOutlined"
);
const SnippetFolderIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-2.5-5.88v3.38h-3v-5h1.38l1.62 1.62zM13 9v8h6v-5.5L16.5 9H13z" }),
  "SnippetFolderOutlined"
);
const SnoozeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 11h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2zm7.056-7.654 1.282-1.535 4.607 3.85-1.28 1.54zM3.336 7.19l-1.28-1.536L6.662 1.81l1.28 1.536zM12 6c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7m0-2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" }),
  "SnoozeOutlined"
);
const SnowboardingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7.4 17.09c-.23-.05-.46.02-.64.17-.69.6-1.64.88-2.6.67L17 20.69l-1-6.19-3.32-2.67 1.8-2.89C15.63 10.78 17.68 12 20 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C15.16 5.64 14.61 5 13.7 5H8L5.5 9l1.7 1.06L9.1 7h2.35l-2.51 3.99c-.28.45-.37 1-.25 1.52L9.5 16 6 18.35l-.47-.1c-.96-.2-1.71-.85-2.1-1.67-.1-.21-.28-.37-.51-.42-.43-.09-.82.2-.9.58-.04.14-.02.31.05.46.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.44.31 2.86-.11 3.9-1.01.13-.11.21-.26.24-.41.07-.38-.16-.8-.59-.89zM8.73 18.93l3.02-2.03-.44-3.32 2.84 2.02.75 4.64-6.17-1.31z" }),
  "SnowboardingOutlined"
);
const SnowmobileIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 17c0 .55-.45 1-1 1h-.17l-2.2-2.2C20.58 15.37 22 14.4 22 13c0-1-8-8-8-8h-3v2h2.25l.8.72L11 10 2 9l-2 4 4.54 1.36-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3h-2zM8 18H2l5.25-2.83L10 16c0 1.1-.89 2-2 2zm9-4h-6.7l-7.45-2.23.31-.62 8.44.85 3.93-2.94s3.77 3.44 4.27 4.14c0 0-1.1.8-2.8.8z" }),
  "SnowmobileOutlined"
);
const SnowshoeingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.5 3.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM6.32 19.03l-1.14-1.47L4 18.5l2.38 3.04c.51.65 1.16 1.15 1.88 1.41.28.1.53.04.72-.11.3-.23.42-.7.12-1.07-.08-.1-.2-.17-.31-.22-.43-.18-.82-.45-1.14-.83l-.08-.1L11 18.2l.89-3.22 2.11 2v4.52h-2V23h3.87c.82 0 1.61-.21 2.26-.61.26-.16.37-.39.37-.64 0-.38-.3-.75-.77-.75-.13 0-.26.04-.37.1-.4.23-.87.37-1.36.4v-6.02l-2.11-2 .6-3C15.79 11.98 17.8 13 20 13v-2c-1.9 0-3.51-1.02-4.31-2.42l-1-1.58c-.4-.6-1-1-1.7-1-.75 0-1.41.34-5.99 2.28V13h2V9.58l1.79-.7L9.2 17l-2.88 2.03z" }),
  "SnowshoeingOutlined"
);
const SoapIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75m0-1.5C13.01 4.5 12 5.51 12 6.75S13.01 9 14.25 9s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25zm5.75 1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5M20 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.5-3c-.83 0-1.5.67-1.5 1.5S15.67 4 16.5 4 18 3.33 18 2.5 17.33 1 16.5 1zm4.25 15c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h6.75c.69 0 1.25-.56 1.25-1.25 0-.67-.53-1.2-1.18-1.24L8.87 10l1.48-2.6c.09-.17.14-.34.14-.54 0-.26-.09-.5-.26-.7L9.12 5l-7.18 6.8c-.6.56-.94 1.35-.94 2.17V20c0 1.66 1.34 3 3 3h13.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h7.75c.69 0 1.25-.56 1.25-1.25S20.44 17 19.75 17H12v-1h8.75zM10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3v9z" }),
  "SoapOutlined"
);
const SocialDistanceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58C7.93 8.21 6.99 8 6 8s-1.93.21-2.78.58C2.48 8.9 2 9.62 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85zM18 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58C19.93 8.21 18.99 8 18 8c-.99 0-1.93.21-2.78.58-.74.32-1.22 1.04-1.22 1.85V11h8v-.57c0-.81-.48-1.53-1.22-1.85zm-2.77 4.43-1.41 1.41L18.17 16H5.83l1.58-1.59L6 13l-4 4 3.99 3.99 1.41-1.41L5.83 18h12.34l-1.58 1.58L18 20.99 22 17l-3.99-3.99z" }),
  "SocialDistanceOutlined"
);
const SortByAlphaIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.94 4.66h-4.72l2.36-2.36 2.36 2.36zm-4.69 14.71h4.66l-2.33 2.33-2.33-2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37 1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z" }),
  "SortByAlphaOutlined"
);
const SoupKitchenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.4 7c-.34.55-.4.97-.4 1.38C6 9.15 7 11 7 12c0 .95-.4 1.5-.4 1.5H5.1s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38h1.5zm5 0c-.34.55-.4.97-.4 1.38 0 .77 1 2.62 1 3.62 0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38h-1.5zM8.15 7c-.34.55-.4.97-.4 1.38 0 .77 1 2.63 1 3.62 0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38h-1.5zM18.6 2c-1.54 0-2.81 1.16-2.98 2.65L14.53 15H4.01c-.6 0-1.09.53-1 1.13C3.53 19.46 6.39 22 9.75 22c3.48 0 6.34-2.73 6.71-6.23L17.61 4.9c.05-.51.47-.9.99-.9.55 0 1 .45 1 1 0 .3-.1 1.25-.1 1.25l1.97.25s.13-1.06.13-1.5c0-1.65-1.35-3-3-3zM9.75 20c-1.94 0-3.67-1.23-4.43-3h8.79c-.72 1.78-2.42 3-4.36 3z" }),
  "SoupKitchenOutlined"
);
const SourceIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-2-6H6v-2h12v2zm-4 4H6v-2h8v2z" }),
  "SourceOutlined"
);
const SouthIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7 7-7z" }),
  "SouthOutlined"
);
const SouthAmericaIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.95.7-3.74 1.87-5.13L9 10v1c0 1.1.9 2 2 2v5.59c0 .27.11.52.29.71l.71.7c-4.42 0-8-3.58-8-8zm9 7.94V18l3.75-5.62c.16-.25.25-.54.25-.83V10.5c0-.55-.45-1-1-1h-1.5l-1.4-1.75c-.38-.47-.95-.75-1.56-.75H8V5.07C9.18 4.39 10.54 4 12 4c4.41 0 8 3.59 8 8 0 4.07-3.06 7.44-7 7.94z" }),
  "SouthAmericaOutlined"
);
const SouthEastIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z" }),
  "SouthEastOutlined"
);
const SouthWestIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z" }),
  "SouthWestOutlined"
);
const SpaIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-3.44-4.44c.63 1.03 1.07 2.18 1.3 3.38-.47.3-.91.63-1.34.98-.42-.34-.87-.67-1.33-.97.25-1.2.71-2.35 1.37-3.39zM12 15.45c-.82-1.25-1.86-2.34-3.06-3.2-.13-.09-.27-.16-.4-.26.13.09.27.17.39.25C6.98 10.83 4.59 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45zm1.32 4.15c-.44.15-.88.27-1.33.37-.44-.09-.87-.21-1.28-.36-3.29-1.18-5.7-3.99-6.45-7.35 1.1.26 2.15.71 3.12 1.33l-.02.01c.13.09.26.18.39.25l.07.04c.99.72 1.84 1.61 2.51 2.65L12 19.1l1.67-2.55c.69-1.05 1.55-1.95 2.53-2.66l.07-.05c.09-.05.18-.11.27-.17l-.01-.02c.98-.65 2.07-1.13 3.21-1.4-.75 3.37-3.15 6.18-6.42 7.35zm-4.33-7.32c-.02-.01-.04-.03-.05-.04 0 0 .01 0 .01.01.01.01.02.02.04.03z" }),
  "SpaOutlined"
);
const SpaceBarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 9v4H6V9H4v6h16V9h-2z" }),
  "SpaceBarOutlined"
);
const SpeakerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 20V4h10v16H7zm5-11c1.1 0 2-.9 2-2s-.9-2-2-2c-1.11 0-2 .9-2 2s.89 2 2 2zm0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }),
  "SpeakerOutlined"
);
const SpeakerGroupIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM18 17l-8-.01V3h8v14zm-4-9c1.1 0 2-.89 2-2s-.9-2-2-2-2 .89-2 2 .9 2 2 2zm0 8c1.93 0 3.5-1.57 3.5-3.5S15.93 9 14 9s-3.5 1.57-3.5 3.5S12.07 16 14 16zm0-5c.83 0 1.5.67 1.5 1.5S14.83 14 14 14s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM6 5H4v16c0 1.1.89 2 2 2h10v-2H6V5z" }),
  "SpeakerGroupOutlined"
);
const SpeakerNotesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zM6 12h2v2H6zm0-3h2v2H6zm0-3h2v2H6zm4 6h5v2h-5zm0-3h8v2h-8zm0-3h8v2h-8z" }),
  "SpeakerNotesOutlined"
);
const SpeakerNotesOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4v12h-1.34l1.91 1.91C21.39 17.66 22 16.9 22 16V4c0-1.1-.9-2-2-2H4.66l2 2H20zM6 12h2v2H6zm12-3h-6.34l2 2H18zm0-3h-8v1.34l.66.66H18zM1.41 1.59 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73 1.41-1.41L1.41 1.59zM5.17 16 4 17.17V7l2 2v2h2l5 5H5.17z" }),
  "SpeakerNotesOffOutlined"
);
const SpeakerPhoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 7.07 8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07zM12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41C17.76 2.23 15.02 1 12 1zm2.86 9.01L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13zM15 20H9v-8h6v8z" }),
  "SpeakerPhoneOutlined"
);
const SpeedIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z" }, "1")],
  "SpeedOutlined"
);
const SpellcheckIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z" }),
  "SpellcheckOutlined"
);
const SplitscreenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 4v5H6V4h12m0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 13v5H6v-5h12m0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2z" }),
  "SplitscreenOutlined"
);
const SpokeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7s1.79 4 4 4 4-1.79 4-4zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-5 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10-6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }),
  "SpokeOutlined"
);
const SportsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M11.23 6c-1.66 0-3.22.66-4.36 1.73C6.54 6.73 5.61 6 4.5 6 3.12 6 2 7.12 2 8.5S3.12 11 4.5 11c.21 0 .41-.03.61-.08-.05.25-.09.51-.1.78-.18 3.68 2.95 6.68 6.68 6.27 2.55-.28 4.68-2.26 5.19-4.77.15-.71.15-1.4.06-2.06-.09-.6.38-1.13.99-1.13H22V6H11.23zM4.5 9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm6.5 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "11", cy: "12", r: "2" }, "1")],
  "SportsOutlined"
);
const SportsBarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 19H8v-6.63c1.26-.34 2.11-1.27 2.77-1.99C11.6 9.47 12.08 9 13 9h2v10zM10 2.02c-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V21h11v-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-1.56c.35-.59.56-1.27.56-2 0-2.21-1.79-4-4-4-.34 0-.66.05-.98.13-.82-.68-1.86-1.11-3.02-1.11zM7 10.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5zM17 17v-6h2v6h-2z" }),
  "SportsBarOutlined"
);
const SportsBaseballIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM5.61 16.78C4.6 15.45 4 13.8 4 12s.6-3.45 1.61-4.78C7.06 8.31 8 10.05 8 12s-.94 3.69-2.39 4.78zM12 20c-1.89 0-3.63-.66-5-1.76 1.83-1.47 3-3.71 3-6.24S8.83 7.23 7 5.76C8.37 4.66 10.11 4 12 4s3.63.66 5 1.76c-1.83 1.47-3 3.71-3 6.24s1.17 4.77 3 6.24c-1.37 1.1-3.11 1.76-5 1.76zm6.39-3.22C16.94 15.69 16 13.95 16 12s.94-3.69 2.39-4.78C19.4 8.55 20 10.2 20 12s-.6 3.45-1.61 4.78z" }),
  "SportsBaseballOutlined"
);
const SportsBasketballIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM5.23 7.75C6.1 8.62 6.7 9.74 6.91 11H4.07c.15-1.18.56-2.28 1.16-3.25zM4.07 13h2.84c-.21 1.26-.81 2.38-1.68 3.25-.6-.97-1.01-2.07-1.16-3.25zM11 19.93c-1.73-.22-3.29-1-4.49-2.14 1.3-1.24 2.19-2.91 2.42-4.79H11v6.93zM11 11H8.93C8.69 9.12 7.81 7.44 6.5 6.2 7.71 5.06 9.27 4.29 11 4.07V11zm8.93 0h-2.84c.21-1.26.81-2.38 1.68-3.25.6.97 1.01 2.07 1.16 3.25zM13 4.07c1.73.22 3.29.99 4.5 2.13-1.31 1.24-2.19 2.92-2.43 4.8H13V4.07zm0 15.86V13h2.07c.24 1.88 1.12 3.55 2.42 4.79-1.2 1.14-2.76 1.92-4.49 2.14zm5.77-3.68c-.87-.86-1.46-1.99-1.68-3.25h2.84c-.15 1.18-.56 2.28-1.16 3.25z" }),
  "SportsBasketballOutlined"
);
const SportsCricketIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m15.04 12.79-8.5-8.5C6.35 4.1 6.09 4 5.83 4s-.51.1-.7.29L2.29 7.13c-.39.39-.39 1.03 0 1.42l8.5 8.5c.2.2.45.29.71.29.26 0 .51-.1.71-.29l2.83-2.83c.39-.4.39-1.04 0-1.43zm-3.54 2.13L4.41 7.83l1.42-1.42 7.09 7.09-1.42 1.42zm2.8412 2.8362 1.4142-1.4142 4.2426 4.2426-1.4142 1.4142zM18.5 2C16.57 2 15 3.57 15 5.5S16.57 9 18.5 9 22 7.43 22 5.5 20.43 2 18.5 2zm0 5c-.83 0-1.5-.67-1.5-1.5S17.67 4 18.5 4s1.5.67 1.5 1.5S19.33 7 18.5 7z" }),
  "SportsCricketOutlined"
);
const SportsEsportsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m21.58 16.09-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zm-2.1.72c-.08.09-.21.19-.42.19-.15 0-.29-.06-.39-.16L15.83 14H8.17l-2.84 2.84c-.1.1-.24.16-.39.16-.21 0-.34-.1-.42-.19-.08-.09-.16-.23-.13-.44l1.09-7.66C5.63 7.74 6.48 7 7.47 7h9.06c.99 0 1.84.74 1.98 1.72l1.09 7.66c.03.2-.05.34-.12.43z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M9 8H8v2H6v1h2v2h1v-2h2v-1H9z" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "17", cy: "12", r: "1" }, "2"), /* @__PURE__ */ jsx("circle", { cx: "15", cy: "9", r: "1" }, "3")],
  "SportsEsportsOutlined"
);
const SportsFootballIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20.31 3.69c-.32-.33-1.94-.69-4.05-.69-3.03 0-7.09.75-9.8 3.46-4.59 4.59-3.56 13.06-2.77 13.85.32.33 1.94.69 4.05.69 3.03 0 7.09-.75 9.8-3.46 4.59-4.59 3.56-13.06 2.77-13.85zM7.74 19c-1.14 0-2.02-.12-2.53-.23-.18-.79-.3-2.21-.17-3.83l4.01 4.01c-.52.04-.97.05-1.31.05zm8.39-2.87c-1.33 1.33-3.06 2.05-4.66 2.44l-6.04-6.04c.42-1.68 1.16-3.37 2.45-4.65 1.32-1.32 3.05-2.04 4.64-2.43l6.05 6.05c-.42 1.67-1.17 3.35-2.44 4.63zm2.83-7.04-4.03-4.03c.52-.05.98-.06 1.33-.06 1.14 0 2.02.12 2.53.23.18.79.3 2.22.17 3.86z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M8.4996 14.1002 14.1 8.4999l1.4 1.4-5.6002 5.6004z" }, "1")],
  "SportsFootballOutlined"
);
const SportsGolfIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7zm0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "10", cy: "8", r: "1" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "14", cy: "8", r: "1" }, "2"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "6", r: "1" }, "3"), /* @__PURE__ */ jsx("path", { d: "M7 19h2c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h2v-2H7v2z" }, "4")],
  "SportsGolfOutlined"
);
const SportsHandballIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M14.27 6c-.55.95-.22 2.18.73 2.73.95.55 2.18.22 2.73-.73.55-.95.22-2.18-.73-2.73-.95-.55-2.18-.22-2.73.73z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M15.84 10.41s-1.63-.94-2.6-1.5c-2.38-1.38-3.2-4.44-1.82-6.82l-1.73-1C8.1 3.83 8.6 7.21 10.66 9.4l-5.15 8.92 1.73 1 1.5-2.6 1.73 1-3 5.2 1.73 1 6.29-10.89c1.14 1.55 1.33 3.69.31 5.46l1.73 1c1.6-2.75 1.28-6.58-1.69-9.08z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M12.75 3.8c.72.41 1.63.17 2.05-.55.41-.72.17-1.63-.55-2.05-.72-.41-1.63-.17-2.05.55-.41.72-.17 1.64.55 2.05z" }, "2")],
  "SportsHandballOutlined"
);
const SportsHockeyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 17v3h2v-4H3c-.55 0-1 .45-1 1zm7-1H5v4l4.69-.01c.38 0 .72-.21.89-.55l.87-1.9-1.59-3.48L9 16zm12.71.29c-.18-.18-.43-.29-.71-.29h-1v4h2v-3c0-.28-.11-.53-.29-.71zm-8.11-3.45L17.65 4H14.3l-1.76 3.97-.49 1.1-.05.14L9.7 4H6.35l4.05 8.84 1.52 3.32.08.18 1.42 3.1c.17.34.51.55.89.55L19 20v-4h-4l-1.4-3.16z" }),
  "SportsHockeyOutlined"
);
const SportsKabaddiIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "16.5", cy: "2.38", r: "2" }, "0"), /* @__PURE__ */ jsx("path", { d: "M24 11.88v-4.7l-5.05-2.14c-.97-.41-2.09-.06-2.65.84l-1 1.6c-.67 1.18-1.91 2.06-3.41 2.32l.06.06c.69.69 1.52 1.07 2.46 1.17.8-.42 1.52-.98 2.09-1.64l.6 3-1.16 1.1-.94.89v7.5h2v-6l2.1-2 1.8 8H23l-2.18-11-.62-3.1 1.8.7v3.4h2zM10.29 8.09c.22.15.47.24.72.29.13.02.25.04.38.04s.26-.01.38-.04c.13-.02.25-.06.37-.11.24-.1.47-.24.66-.44.49-.49.67-1.17.55-1.8-.07-.37-.25-.74-.55-1.03-.19-.19-.42-.34-.66-.44-.12-.05-.24-.09-.37-.11s-.25-.04-.38-.04c-.12 0-.23.01-.35.03-.14.02-.28.06-.41.11-.23.11-.46.26-.65.45-.3.29-.48.66-.55 1.03-.12.63.06 1.31.55 1.8.09.1.2.18.31.26z" }, "1"), /* @__PURE__ */ jsx("path", { d: "m11.24 10.56-2-2c-.1-.1-.2-.18-.31-.26-.22-.14-.47-.24-.72-.28-.13-.03-.25-.04-.38-.04-.51 0-1.02.2-1.41.59l-3.34 3.34c-.41.41-.62.98-.58 1.54 0 .18.04.37.11.55l1.07 2.95-3.63 3.63L1.46 22l4.24-4.24v-2.22L7 16.75v5.13h2v-6l-2.12-2.12 2.36-2.36.71.71c1.29 1.26 2.97 2.04 5.03 2.04l-.14-2.07c-1.5-.02-2.7-.62-3.6-1.52z" }, "2")],
  "SportsKabaddiOutlined"
);
const SportsMartialArtsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m19.8 2-8.2 6.7-1.21-1.04 3.6-2.08L9.41 1 8 2.41l2.74 2.74L5 8.46l-1.19 4.29L6.27 17 8 16l-2.03-3.52.35-1.3L9.5 13l.5 9h2l.5-10L21 3.4z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "5", cy: "5", r: "2" }, "1")],
  "SportsMartialArtsOutlined"
);
const SportsMmaIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7 20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-3H7v3zM18 7c-.55 0-1 .45-1 1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v5.8c0 .13.01.26.04.39l.8 4c.09.47.5.8.98.8H17c.55 0 1.09-.44 1.2-.98l.77-3.83c.02-.12.03-.25.03-.38V8c0-.55-.45-1-1-1zm-1 3.6c0 .13-.64 3.4-.64 3.4H7.64S7 10.74 7 10.6V5h8v5h2v.6z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M8 7h6v3H8z" }, "1")],
  "SportsMmaOutlined"
);
const SportsMotorsportsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.96 11.22C21.57 7.01 17.76 4 13.56 4c-.19 0-.38.01-.57.02C2 4.74 2 17.2 2 17.2v.8c0 1.1.9 2 2 2h10c4.67 0 8.41-4.01 7.96-8.78zm-16.7.34c.57-1.29 1.28-2.35 2.14-3.19l3.62 1.53c.6.25.98.83.98 1.48 0 .89-.72 1.61-1.61 1.61H4.72c.15-.46.32-.94.54-1.43zm13.18 4.48C17.3 17.29 15.68 18 14 18H4v-.8c0-.02.01-.92.24-2.2h6.15c1.99 0 3.61-1.62 3.61-3.61 0-1.45-.87-2.76-2.2-3.32L9.3 7.01c1.1-.57 2.37-.9 3.82-.99.15-.02.3-.02.44-.02 3.31 0 6.13 2.37 6.41 5.41.16 1.72-.38 3.36-1.53 4.63z" }),
  "SportsMotorsportsOutlined"
);
const SportsRugbyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.49 3.51c-.56-.56-2.15-.97-4.16-.97-3.08 0-7.15.96-9.98 3.79-4.69 4.7-4.25 12.74-2.84 14.16.56.56 2.15.97 4.16.97 3.08 0 7.15-.96 9.98-3.79 4.69-4.7 4.25-12.74 2.84-14.16zM5.71 18.29c.63-1.89 2.16-4.99 4.87-7.7 2.68-2.68 5.78-4.23 7.7-4.88-.63 1.89-2.16 4.99-4.88 7.7-2.66 2.68-5.76 4.23-7.69 4.88zM7.76 7.76c2.64-2.64 6.34-3.12 8.03-3.19-2.05.94-4.46 2.46-6.61 4.61-2.16 2.16-3.67 4.58-4.61 6.63.09-2.48.87-5.74 3.19-8.05zm8.48 8.48c-2.64 2.64-6.34 3.12-8.03 3.19 2.05-.94 4.46-2.46 6.61-4.61 2.16-2.16 3.67-4.58 4.62-6.63-.1 2.48-.88 5.74-3.2 8.05z" }),
  "SportsRugbyOutlined"
);
const SportsScoreIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 6H9V4h2v2zm4-2h-2v2h2V4zM9 14h2v-2H9v2zm10-4V8h-2v2h2zm0 4v-2h-2v2h2zm-6 0h2v-2h-2v2zm6-10h-2v2h2V4zm-6 4V6h-2v2h2zm-6 2V8h2V6H7V4H5v16h2v-8h2v-2H7zm8 2h2v-2h-2v2zm-4-2v2h2v-2h-2zM9 8v2h2V8H9zm4 2h2V8h-2v2zm2-4v2h2V6h-2z" }),
  "SportsScoreOutlined"
);
const SportsSoccerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 3.3 1.35-.95c1.82.56 3.37 1.76 4.38 3.34l-.39 1.34-1.35.46L13 6.7V5.3zm-3.35-.95L11 5.3v1.4L7.01 9.49l-1.35-.46-.39-1.34c1.01-1.57 2.56-2.77 4.38-3.34zM7.08 17.11l-1.14.1C4.73 15.81 4 13.99 4 12c0-.12.01-.23.02-.35l1-.73 1.38.48 1.46 4.34-.78 1.37zm7.42 2.48c-.79.26-1.63.41-2.5.41s-1.71-.15-2.5-.41l-.69-1.49.64-1.1h5.11l.64 1.11-.7 1.48zM14.27 15H9.73l-1.35-4.02L12 8.44l3.63 2.54L14.27 15zm3.79 2.21-1.14-.1-.79-1.37 1.46-4.34 1.39-.47 1 .73c.01.11.02.22.02.34 0 1.99-.73 3.81-1.94 5.21z" }),
  "SportsSoccerOutlined"
);
const SportsTennisIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.52 2.49C17.18.15 12.9.62 9.97 3.55c-1.6 1.6-2.52 3.87-2.54 5.46-.02 1.58.26 3.89-1.35 5.5l-4.24 4.24 1.42 1.42 4.24-4.24c1.61-1.61 3.92-1.33 5.5-1.35s3.86-.94 5.46-2.54c2.92-2.93 3.4-7.21 1.06-9.55zm-9.2 9.19c-1.53-1.53-1.05-4.61 1.06-6.72s5.18-2.59 6.72-1.06c1.53 1.53 1.05 4.61-1.06 6.72s-5.18 2.59-6.72 1.06zM18 17c.53 0 1.04.21 1.41.59.78.78.78 2.05 0 2.83-.37.37-.88.58-1.41.58s-1.04-.21-1.41-.59c-.78-.78-.78-2.05 0-2.83.37-.37.88-.58 1.41-.58m0-2c-1.02 0-2.05.39-2.83 1.17-1.56 1.56-1.56 4.09 0 5.66.78.78 1.81 1.17 2.83 1.17s2.05-.39 2.83-1.17c1.56-1.56 1.56-4.09 0-5.66C20.05 15.39 19.02 15 18 15z" }),
  "SportsTennisOutlined"
);
const SportsVolleyballIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 2.07c3.07.38 5.57 2.52 6.54 5.36L13 5.65V4.07zM8 5.08c1.18-.69 3.33-1.06 3-1.02v7.35l-3 1.73V5.08zM4.63 15.1c-.4-.96-.63-2-.63-3.1 0-2.02.76-3.86 2-5.27v7.58l-1.37.79zm1.01 1.73L12 13.15l3 1.73-6.98 4.03c-.93-.53-1.74-1.23-2.38-2.08zM12 20c-.54 0-1.07-.06-1.58-.16l6.58-3.8 1.36.78C16.9 18.75 14.6 20 12 20zm1-8.58V7.96l7 4.05c0 1.1-.23 2.14-.63 3.09L13 11.42z" }),
  "SportsVolleyballOutlined"
);
const SquareIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 3v18h18V3H3zm16 16H5V5h14v14z" }),
  "SquareOutlined"
);
const SquareFootIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17.66 17.66-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L9.7 9.7l-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L4 4v14c0 1.1.9 2 2 2h14l-2.34-2.34zM7 17v-5.76L12.76 17H7z" }),
  "SquareFootOutlined"
);
const SsidChartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 5.47 12 12 7.62 7.62 3 11V8.52L7.83 5l4.38 4.38L21 3v2.47zM21 15h-4.7l-4.17 3.34L6 12.41l-3 2.13V17l2.8-2 6.2 6 5-4h4v-2z" }),
  "SsidChartOutlined"
);
const StackedBarChartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 10h3v10H6V10zm0-5h3v4H6V5zm10 11h3v4h-3v-4zm0-3h3v2h-3v-2zm-5 0h3v7h-3v-7zm0-4h3v3h-3V9z" }),
  "StackedBarChartOutlined"
);
const StackedLineChartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m2 19.99 7.5-7.51 4 4 7.09-7.97L22 9.92l-8.5 9.56-4-4-6 6.01-1.5-1.5zm1.5-4.5 6-6.01 4 4L22 3.92l-1.41-1.41-7.09 7.97-4-4L2 13.99l1.5 1.5z" }),
  "StackedLineChartOutlined"
);
const StadiumIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 5 3 7V3l4 2zm11-2v4l4-2-4-2zm-7-1v4l4-2-4-2zm2 16h-2v4c-5.05-.15-9-1.44-9-3v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.56-3.95 2.85-9 3v-4zm-8-7.96c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04zm15 1.76c-1.82.73-4.73 1.2-8 1.2s-6.18-.47-8-1.2v6.78c.61.41 2.36 1.01 5 1.28V16h6v3.86c2.64-.27 4.39-.87 5-1.28V11.8z" }),
  "StadiumOutlined"
);
const StairsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 3h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18V6z" }),
  "StairsOutlined"
);
const StarBorderIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" }),
  "StarBorderOutlined"
);
const StarBorderPurple500Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" }),
  "StarBorderPurple500Outlined"
);
const StarHalfIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" }),
  "StarHalfOutlined"
);
const StarPurple500Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" }),
  "StarPurple500Outlined"
);
const StarRateIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 8.89.94 3.11h2.82l-2.27 1.62.93 3.01L12 14.79l-2.42 1.84.93-3.01L8.24 12h2.82L12 8.89M12 2l-2.42 8H2l6.17 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10h-7.58L12 2z" }),
  "StarRateOutlined"
);
const StarsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm7.48 7.16-5.01-.43-2-4.71c3.21.19 5.91 2.27 7.01 5.14zm-5.07 6.26L12 13.98l-2.39 1.44.63-2.72-2.11-1.83 2.78-.24L12 8.06l1.09 2.56 2.78.24-2.11 1.83.64 2.73zm-2.86-11.4-2 4.72-5.02.43c1.1-2.88 3.8-4.97 7.02-5.15zM4 12c0-.64.08-1.26.23-1.86l3.79 3.28-1.11 4.75C5.13 16.7 4 14.48 4 12zm3.84 6.82L12 16.31l4.16 2.5c-1.22.75-2.64 1.19-4.17 1.19-1.52 0-2.94-.44-4.15-1.18zm9.25-.65-1.11-4.75 3.79-3.28c.14.59.23 1.22.23 1.86 0 2.48-1.14 4.7-2.91 6.17z" }),
  "StarsOutlined"
);
const StartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.59 7.41 18.17 11H6v2h12.17l-3.59 3.59L16 18l6-6-6-6-1.41 1.41zM2 6v12h2V6H2z" }),
  "StartOutlined"
);
const StayCurrentLandscapeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1.01 7 1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z" }),
  "StayCurrentLandscapeOutlined"
);
const StayCurrentPortraitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" }),
  "StayCurrentPortraitOutlined"
);
const StayPrimaryLandscapeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1.01 7 1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z" }),
  "StayPrimaryLandscapeOutlined"
);
const StayPrimaryPortraitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" }),
  "StayPrimaryPortraitOutlined"
);
const StickyNote2Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 5v9h-5v5H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2zm-7 11H7v-2h5v2zm5-4H7V8h10v2z" }),
  "StickyNote2Outlined"
);
const StopIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 8v8H8V8h8m2-2H6v12h12V6z" }),
  "StopOutlined"
);
const StopCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4-4H8V8h8v8z" }),
  "StopCircleOutlined"
);
const StopScreenShareIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m21.79 18 2 2H24v-2h-2.21zM1.11 2.98l1.55 1.56c-.41.37-.66.89-.66 1.48V16c0 1.1.9 2 2.01 2H0v2h18.13l2.71 2.71 1.41-1.41L2.52 1.57 1.11 2.98zM4 6.02h.13l4.95 4.93C7.94 12.07 7.31 13.52 7 15c.96-1.29 2.13-2.08 3.67-2.46l3.46 3.48H4v-10zm16 0v10.19l1.3 1.3c.42-.37.7-.89.7-1.49v-10c0-1.11-.9-2-2-2H7.8l2 2H20zm-7.07 3.13 2.79 2.78 1.28-1.2L13 7v2.13l-.07.02z" }),
  "StopScreenShareOutlined"
);
const StoreIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18.36 9 .6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z" }),
  "StoreOutlined"
);
const StoreMallDirectoryIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18.36 9 .6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z" }),
  "StoreMallDirectoryOutlined"
);
const StorefrontIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m21.9 8.89-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89zm-2.99-3.9 1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31V5zM8.49 9.52 9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41-.25-.29-.37-.68-.33-1.07zm-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19H5z" }),
  "StorefrontOutlined"
);
const StormIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.93 8C16.72 4.18 11.82 2.87 8 5.07c-1.41.82-2.48 2-3.16 3.37-.13-2.2.22-4.4 1.02-6.44H3.74C2.2 6.49 2.52 11.58 5.07 16c1.1 1.91 2.88 3.19 4.86 3.72 1.98.53 4.16.31 6.07-.79 1.41-.82 2.48-2 3.16-3.37.13 2.2-.21 4.4-1.01 6.44h2.11c1.53-4.49 1.22-9.58-1.33-14zM15 17.2c-2.87 1.65-6.54.67-8.2-2.2-.11-.2-.21-.4-.3-.6-1.2-2.76-.17-6.06 2.5-7.6 2.86-1.65 6.54-.67 8.2 2.2.11.2.21.4.3.6 1.2 2.76.17 6.06-2.5 7.6zM12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" }),
  "StormOutlined"
);
const StraightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 6.83 9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V21h-2z" }),
  "StraightOutlined"
);
const StraightenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z" }),
  "StraightenOutlined"
);
const StreamIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "20", cy: "12", r: "2" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "4", cy: "12", r: "2" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "20", r: "2" }, "2"), /* @__PURE__ */ jsx("path", { d: "m13.943 8.6191 4.4044-4.392 1.4122 1.4162-4.4043 4.392zM8.32 9.68l.31.32 1.42-1.41-4.02-4.04h-.01l-.31-.32-1.42 1.41 4.02 4.05zm7.09 4.26L14 15.35l3.99 4.01.35.35 1.42-1.41-3.99-4.01zm-6.82.01-4.03 4.01-.32.33 1.41 1.41 4.03-4.02.33-.32z" }, "3"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "4", r: "2" }, "4")],
  "StreamOutlined"
);
const StreetviewIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "18", cy: "6", r: "5" }, "1"), /* @__PURE__ */ jsx("path", { d: "M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z" }, "2")],
  "StreetviewOutlined"
);
const StrikethroughSIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43s.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13s-.53.21-.72.36c-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51s.35.36.43.57c.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75s-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58s.37.85.65 1.21c.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21V12z" }),
  "StrikethroughSOutlined"
);
const StrollerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM6 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9-9.34L9.6 15H15V8.66M18.65 3C20.52 3 22 4.56 22 6.48V7h-2v-.52C20 5.66 19.42 5 18.65 5c-.68 0-1.07.59-1.65 1.27V15c0 1.1-.9 2-2 2H7.43c-.85 0-1.31-1-.76-1.65l8.8-10.32C16.11 4.27 16.99 3 18.65 3zM10 5c-.65 0-1.29.09-1.91.27l1.4 1.4 1.37-1.61C10.58 5.02 10.29 5 10 5m0-2c1.56 0 3.03.4 4.3 1.1L9.6 9.61 4.72 4.72C6.21 3.64 8.03 3 10 3z" }),
  "StrollerOutlined"
);
const StyleIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "m2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zm-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95-7.35 3.05z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "11", cy: "9", r: "1" }, "1"), /* @__PURE__ */ jsx("path", { d: "M5.88 19.75c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z" }, "2")],
  "StyleOutlined"
);
const SubdirectoryArrowLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m11 9 1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" }),
  "SubdirectoryArrowLeftOutlined"
);
const SubdirectoryArrowRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" }),
  "SubdirectoryArrowRightOutlined"
);
const SubjectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" }),
  "SubjectOutlined"
);
const SubscriptIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 18h-2v1h3v1h-4v-2c0-.55.45-1 1-1h2v-1h-3v-1h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM5.88 18h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 4h-2.68l-3.07 4.99h-.12L8.85 4H6.19l4.32 6.73L5.88 18z" }),
  "SubscriptOutlined"
);
const SubscriptionsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8zm-10-7.27v6.53L16 16z" }),
  "SubscriptionsOutlined"
);
const SubtitlesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z" }),
  "SubtitlesOutlined"
);
const SubtitlesOffIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 4H6.83l2 2H20v11.17l1.76 1.76c.15-.28.24-.59.24-.93V6c0-1.1-.9-2-2-2z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M18 10h-5.17l2 2H18zM1.04 3.87l1.2 1.2C2.09 5.35 2 5.66 2 6v12c0 1.1.9 2 2 2h13.17l2.96 2.96 1.41-1.41L2.45 2.45 1.04 3.87zM4 6.83 7.17 10H6v2h2v-1.17L11.17 14H6v2h7.17l2 2H4V6.83z" }, "1")],
  "SubtitlesOffOutlined"
);
const SubwayIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.8 2.8C16 2.09 13.86 2 12 2s-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zM9.17 20l1.5-1.5h2.66l1.5 1.5H9.17zm-2.16-6V9h10v5h-10zm9.49 2c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-8-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM20 20h-3.5v-.38l-1.15-1.16c1.49-.17 2.65-1.42 2.65-2.96V9c0-2.63-3-3-6-3s-6 .37-6 3v6.5c0 1.54 1.16 2.79 2.65 2.96L7.5 19.62V20H4V8.86c0-2 1.01-3.45 2.93-4.2C8.41 4.08 10.32 4 12 4s3.59.08 5.07.66c1.92.75 2.93 2.2 2.93 4.2V20z" }),
  "SubwayOutlined"
);
const SummarizeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9l-6-6zM5 19V5h9v5h5v9H5zM9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm0 4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm0 4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z" }),
  "SummarizeOutlined"
);
const SuperscriptIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 7h-2v1h3v1h-4V7c0-.55.45-1 1-1h2V5h-3V4h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM5.88 20h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 6h-2.68l-3.07 4.99h-.12L8.85 6H6.19l4.32 6.73L5.88 20z" }),
  "SuperscriptOutlined"
);
const SupervisedUserCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.5 10c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6.5 2c1.11 0 2-.89 2-2 0-1.11-.89-2-2-2-1.11 0-2.01.89-2 2 0 1.11.89 2 2 2zM11.99 2.01c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM5.84 17.12c.68-.54 2.27-1.11 3.66-1.11.07 0 .15.01.23.01.24-.64.67-1.29 1.3-1.86-.56-.1-1.09-.16-1.53-.16-1.3 0-3.39.45-4.73 1.43-.5-1.04-.78-2.2-.78-3.43 0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.2-.27 2.34-.75 3.37-1-.59-2.36-.87-3.24-.87-1.52 0-4.5.81-4.5 2.7v2.78c-2.27-.13-4.29-1.21-5.66-2.86z" }),
  "SupervisedUserCircleOutlined"
);
const SupervisorAccountIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm.05 10H4.77c.99-.5 2.7-1 4.23-1 .11 0 .23.01.34.01.34-.73.93-1.33 1.64-1.81-.73-.13-1.42-.2-1.98-.2-2.34 0-7 1.17-7 3.5V19h7v-1.5c0-.17.02-.34.05-.5zm7.45-2.5c-1.84 0-5.5 1.01-5.5 3V19h11v-1.5c0-1.99-3.66-3-5.5-3zm1.21-1.82c.76-.43 1.29-1.24 1.29-2.18C19 9.12 17.88 8 16.5 8S14 9.12 14 10.5c0 .94.53 1.75 1.29 2.18.36.2.77.32 1.21.32s.85-.12 1.21-.32z" }),
  "SupervisorAccountOutlined"
);
const SupportIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.46 7.12-2.78 1.15c-.51-1.36-1.58-2.44-2.95-2.94l1.15-2.78c2.1.8 3.77 2.47 4.58 4.57zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM9.13 4.54l1.17 2.78c-1.38.5-2.47 1.59-2.98 2.97L4.54 9.13c.81-2.11 2.48-3.78 4.59-4.59zM4.54 14.87l2.78-1.15c.51 1.38 1.59 2.46 2.97 2.96l-1.17 2.78c-2.1-.81-3.77-2.48-4.58-4.59zm10.34 4.59-1.15-2.78c1.37-.51 2.45-1.59 2.95-2.97l2.78 1.17c-.81 2.1-2.48 3.77-4.58 4.58z" }),
  "SupportOutlined"
);
const SupportAgentIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "9", cy: "13", r: "1" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "15", cy: "13", r: "1" }, "2"), /* @__PURE__ */ jsx("path", { d: "M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47z" }, "3")],
  "SupportAgentOutlined"
);
const SurfingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 23c-1.03 0-2.06-.25-3-.75-1.89 1-4.11 1-6 0-1.89 1-4.11 1-6 0-.95.5-1.97.75-3 .75H2v-2h1c1.04 0 2.08-.35 3-1 1.83 1.3 4.17 1.3 6 0 1.83 1.3 4.17 1.3 6 0 .91.65 1.96 1 3 1h1v2h-1zM17 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-2.57 6.98L12.18 10 16 13v3.84c.53.38 1.03.78 1.49 1.17-.68.58-1.55.99-2.49.99-1.2 0-2.27-.66-3-1.5-.73.84-1.8 1.5-3 1.5-.33 0-.65-.05-.96-.14C5.19 16.9 3 14.72 3 13.28 3 12.25 4.01 12 4.85 12c.98 0 2.28.31 3.7.83l-.53-3.1c-.11-.67.18-1.38.78-1.79l2.15-1.45-2-.37-2.82 1.93L5 6.4 8.5 4l5.55 1.03c.45.09.93.37 1.22.89l.88 1.55C17.01 8.98 18.64 10 20.5 10v2c-2.59 0-4.86-1.42-6.07-3.52zM10.3 11.1l.44 2.65c.92.42 2.48 1.27 3.26 1.75V14l-3.7-2.9z" }),
  "SurfingOutlined"
);
const SurroundSoundIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M8.29 15.71C7.27 14.69 6.75 13.35 6.75 12s.52-2.69 1.53-3.72L7.05 7.05C5.68 8.41 5 10.21 5 12s.68 3.59 2.06 4.94l1.23-1.23zM12 15.5c1.93 0 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5 8.5 10.07 8.5 12s1.57 3.5 3.5 3.5zm0-5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm3.72 5.22 1.23 1.23C18.32 15.59 19 13.79 19 12s-.68-3.59-2.06-4.94l-1.23 1.23c1.02 1.02 1.54 2.36 1.54 3.71s-.52 2.69-1.53 3.72z" }, "1")],
  "SurroundSoundOutlined"
);
const SwapCallsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18 4-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z" }),
  "SwapCallsOutlined"
);
const SwapHorizIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" }),
  "SwapHorizOutlined"
);
const SwapHorizontalCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-13.5V9h-4v2h4v2.5l3.5-3.5zm-6 4L5.5 14 9 17.5V15h4v-2H9z" }),
  "SwapHorizontalCircleOutlined"
);
const SwapVertIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3 5 6.99h3V14h2V6.99h3L9 3z" }),
  "SwapVertOutlined"
);
const SwapVerticalCircleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM6.5 9 10 5.5 13.5 9H11v4H9V9zm11 6L14 18.5 10.5 15H13v-4h2v4z" }),
  "SwapVerticalCircleOutlined"
);
const SwipeIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20.5 2v2.02C18.18 2.13 15.22 1 12 1S5.82 2.13 3.5 4.02V2H2v5h5V5.5H4.09c2.11-1.86 4.88-3 7.91-3s5.79 1.14 7.91 3H17V7h5V2h-1.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.63c0-1.32-.96-2.5-2.27-2.62C10.25 4.88 9 6.05 9 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12zM18 15.56 17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56z" }, "1")],
  "SwipeOutlined"
);
const SwipeDownIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m20.22 10-4.15.01c-.16-.01-.31.02-.45.08l-.59.26-1.83-4.1c-.56-1.26-2.04-1.83-3.3-1.27s-1.83 2.04-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21L8 19.19l6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51zm1.27 7.34L15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66.25-.11.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01 1.36 5.34zM3.8 12.18c-.2-.86-.3-1.76-.3-2.68 0-2.84.99-5.45 2.63-7.5L7.2 3.07C5.82 4.85 5 7.08 5 9.5c0 .88.11 1.74.32 2.56l1.62-1.62L8 11.5 4.5 15 1 11.5l1.06-1.06 1.74 1.74z" }),
  "SwipeDownOutlined"
);
const SwipeDownAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 13.9c2.28-.46 4-2.48 4-4.9 0-2.76-2.24-5-5-5S7 6.24 7 9c0 2.42 1.72 4.44 4 4.9v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17V13.9zM15 9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" }),
  "SwipeDownAltOutlined"
);
const SwipeLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.5C14 6.12 12.88 5 11.5 5S9 6.12 9 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12zM17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56 17.08 21zM4.09 5.5H7V7H2V2h1.5v2.02C5.82 2.13 8.78 1 12 1c5.49 0 9.27 3.12 10 6h-1.57c-.76-1.98-3.69-4.5-8.43-4.5-3.03 0-5.79 1.14-7.91 3z" }),
  "SwipeLeftOutlined"
);
const SwipeLeftAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10.1 13c.46 2.28 2.48 4 4.9 4 2.76 0 5-2.24 5-5s-2.24-5-5-5c-2.42 0-4.44 1.72-4.9 4H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13h4.27zm4.9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" }),
  "SwipeLeftAltOutlined"
);
const SwipeRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.5C14 6.12 12.88 5 11.5 5S9 6.12 9 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12zM17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56 17.08 21zM12 2.5C7.26 2.5 4.33 5.02 3.57 7H2c.73-2.88 4.51-6 10-6 3.22 0 6.18 1.13 8.5 3.02V2H22v5h-5V5.5h2.91c-2.12-1.86-4.88-3-7.91-3z" }),
  "SwipeRightOutlined"
);
const SwipeRightAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13.9 11c-.46-2.28-2.48-4-4.9-4-2.76 0-5 2.24-5 5s2.24 5 5 5c2.42 0 4.44-1.72 4.9-4h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11H13.9zM9 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" }),
  "SwipeRightAltOutlined"
);
const SwipeUpIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m20.22 10-4.15.01c-.16-.01-.31.02-.45.08l-.59.26-1.83-4.1c-.56-1.26-2.04-1.83-3.3-1.27s-1.83 2.04-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21L8 19.19l6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51zm1.27 7.34L15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66.25-.11.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01 1.36 5.34zM2.06 5.56 1 4.5 4.5 1 8 4.5 6.94 5.56 5.32 3.94C5.11 4.76 5 5.62 5 6.5c0 2.42.82 4.65 2.2 6.43L6.13 14C4.49 11.95 3.5 9.34 3.5 6.5c0-.92.1-1.82.3-2.68L2.06 5.56z" }),
  "SwipeUpOutlined"
);
const SwipeUpAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.42-1.72-4.44-4-4.9V5.83zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" }),
  "SwipeUpAltOutlined"
);
const SwipeVerticalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1 2h5v5H4.5V4.09c-1.86 2.11-3 4.88-3 7.91s1.14 5.79 3 7.91V17H6v5H1v-1.5h2.02C1.13 18.18 0 15.22 0 12s1.13-6.18 3.02-8.5H1V2zm19.22 8-4.15.01c-.16-.01-.31.02-.45.08l-.59.26-1.83-4.1c-.56-1.26-2.04-1.83-3.3-1.27s-1.83 2.04-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21L8 19.19l6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51zm1.27 7.34L15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66.25-.11.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01 1.36 5.34z" }),
  "SwipeVerticalOutlined"
);
const SwitchAccessShortcutIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11l-.94-2.06zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94L8 21zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11l-.63 1.37zM12 12c0-3.09 1.38-5.94 3.44-8H12V2h7v7h-2V5.28c-1.8 1.74-3 4.2-3 6.72 0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10z" }),
  "SwitchAccessShortcutOutlined"
);
const SwitchAccessShortcutAddIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11l-.94-2.06zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94L8 21zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11l-.63 1.37zM12 12c0-3.09 1.38-5.94 3.44-8H12V2h7v7h-2V5.28c-1.8 1.74-3 4.2-3 6.72 0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10zm12 2h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z" }),
  "SwitchAccessShortcutAddOutlined"
);
const SwitchAccountIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6-5H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9.31 14c.95-.63 2.09-1 3.31-1s2.36.37 3.31 1h-6.62zm9.31-.27C18.53 14.06 16.4 13 14 13s-4.53 1.06-6 2.73V4h12v11.73z" }),
  "SwitchAccountOutlined"
);
const SwitchCameraIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.88 4h4.24l1.83 2H20v12H4V6h4.05" }, "0"), /* @__PURE__ */ jsx("path", { d: "M15 11H9V8.5L5.5 12 9 15.5V13h6v2.5l3.5-3.5L15 8.5z" }, "1")],
  "SwitchCameraOutlined"
);
const SwitchLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8.5 8.62v6.76L5.12 12 8.5 8.62M10 5l-7 7 7 7V5zm4 0v14l7-7-7-7z" }),
  "SwitchLeftOutlined"
);
const SwitchRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.5 15.38V8.62L18.88 12l-3.38 3.38M14 19l7-7-7-7v14zm-4 0V5l-7 7 7 7z" }),
  "SwitchRightOutlined"
);
const SwitchVideoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 13h4v2l3-3-3-3v2H8V9l-3 3 3 3zm10-3.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13l-4 4zM16 17H4V7h12v10z" }),
  "SwitchVideoOutlined"
);
const SynagogueIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 4c-1.66 0-3 1.34-3 3v.29L12 3 7 7.29V7c0-1.66-1.34-3-3-3S1 5.34 1 7v14h10v-5c0-.55.45-1 1-1s1 .45 1 1v5h10V7c0-1.66-1.34-3-3-3zm0 2c.55 0 1 .45 1 1v1h-2V7c0-.55.45-1 1-1zM4 6c.55 0 1 .45 1 1v1H3V7c0-.55.45-1 1-1zM3 19v-9h2v9H3zm14 0h-2v-3c0-1.65-1.35-3-3-3s-3 1.35-3 3v3H7V9.92l5-4.29 5 4.29V19zm2 0v-9h2v9h-2z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "1.5" }, "1")],
  "SynagogueOutlined"
);
const SyncAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.41 13.41 6 12l-4 4 4 4 1.41-1.41L5.83 17H21v-2H5.83zm9.18-2.82L18 12l4-4-4-4-1.41 1.41L18.17 7H3v2h15.17z" }),
  "SyncAltOutlined"
);
const SyncDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 6.35V4.26c-.66.17-1.29.43-1.88.75l1.5 1.5c.13-.05.25-.11.38-.16zM20 12c0-2.21-.91-4.2-2.36-5.64L20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 .85-.19 1.65-.51 2.38l1.5 1.5C19.63 14.74 20 13.41 20 12zM4.27 4 2.86 5.41l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.24-.76.34v2.09c.8-.21 1.55-.54 2.23-.96l2.58 2.58 1.41-1.41L4.27 4z" }),
  "SyncDisabledOutlined"
);
const SyncLockIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73C5.06 16.54 4 14.4 4 12c0-3.73 2.55-6.85 6-7.74zM20 4h-6v6h2V7.56c1.22 1.1 2 2.67 2 4.44h2c0-2.4-1.06-4.54-2.73-6H20V4zm0 13v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z" }),
  "SyncLockOutlined"
);
const SyncProblemIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z" }),
  "SyncProblemOutlined"
);
const SystemSecurityUpdateIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zM7 4V3h10v1H7zm9 8-4 4-4-4 1.41-1.41L11 12.17V8h2v4.17l1.59-1.59L16 12z" }),
  "SystemSecurityUpdateOutlined"
);
const SystemSecurityUpdateGoodIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1zm-1 6.05-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15 16 10.05z" }),
  "SystemSecurityUpdateGoodOutlined"
);
const SystemSecurityUpdateWarningIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M11 15h2v2h-2zm0-8h2v6h-2z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1z" }, "1")],
  "SystemSecurityUpdateWarningOutlined"
);
const SystemUpdateIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z" }),
  "SystemUpdateOutlined"
);
const SystemUpdateAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m12 16 4-4h-3V3h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V4.99h6V3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 13 4-4h-3V3h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V4.99h6V3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }),
  "SystemUpdateAltOutlined"
);
const TabIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z" }),
  "TabOutlined"
);
const TabUnselectedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z" }),
  "TabUnselectedOutlined"
);
const TableBarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H9.35c-.82 0-1.55.5-1.86 1.26L6 20h2l1.2-3h5.6l1.2 3h2l-1.5-3.74c-.3-.76-1.04-1.26-1.85-1.26H13v-4.02c5.05-.17 9-1.67 9-3.48zM12 6c4.05 0 6.74.86 7.72 1.5C18.74 8.14 16.05 9 12 9s-6.74-.86-7.72-1.5C5.26 6.86 7.95 6 12 6z" }),
  "TableBarOutlined"
);
const TableChartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h15zm-5 14h-5v-9h5v9zM5 10h3v9H5v-9zm12 9v-9h3v9h-3z" }),
  "TableChartOutlined"
);
const TableRestaurantIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m21.96 9.73-1.43-5c-.12-.43-.51-.73-.96-.73H4.43c-.45 0-.84.3-.96.73l-1.43 5c-.18.63.3 1.27.96 1.27h2.2L4 20h2l.67-5h10.67l.66 5h2l-1.2-9H21c.66 0 1.14-.64.96-1.27zM6.93 13l.27-2h9.6l.27 2H6.93zm-2.6-4 .86-3h13.63l.86 3H4.33z" }),
  "TableRestaurantOutlined"
);
const TableRowsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h14zm0 5v4H5v-4h14zM5 19v-3h14v3H5z" }),
  "TableRowsOutlined"
);
const TableViewIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 7H9c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 2v2H9V9h10zm-6 6v-2h2v2h-2zm2 2v2h-2v-2h2zm-4-2H9v-2h2v2zm6-2h2v2h-2v-2zm-8 4h2v2H9v-2zm8 2v-2h2v2h-2zM6 17H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v1h-2V5H5v10h1v2z" }),
  "TableViewOutlined"
);
const TabletAndroidIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z" }),
  "TabletAndroidOutlined"
);
const TabletMacIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z" }),
  "TabletMacOutlined"
);
const TagIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z" }),
  "TagOutlined"
);
const TagFacesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" }),
  "TagFacesOutlined"
);
const TakeoutDiningIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m7.79 18-.51-7h9.46l-.51 7H7.79zM9.83 5h4.33l2.8 2.73L16.87 9H7.12l-.09-1.27L9.83 5zM22 7.46l-1.41-1.41L19 7.63l.03-.56L14.98 3H9.02L4.97 7.07l.03.5-1.59-1.56L2 7.44l3.23 3.11.7 9.45h12.14l.7-9.44L22 7.46z" }),
  "TakeoutDiningOutlined"
);
const TapAndPlayIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0 4v3h3c0-1.66-1.34-3-3-3zm0-8v2c4.97 0 9 4.03 9 9h2c0-6.08-4.92-11-11-11zM17 1.01 7 1c-1.1 0-2 .9-2 2v7.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H17c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z" }),
  "TapAndPlayOutlined"
);
const TapasIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 10V1h-8v9c0 1.86 1.28 3.41 3 3.86V21h-2v2h6v-2h-2v-7.14c1.72-.45 3-2 3-3.86zm-2-7v3h-4V3h4zm-4 7V8h4v2c0 1.1-.9 2-2 2s-2-.9-2-2zm-6-1H8V8h2c1.38 0 2.5-1.12 2.5-2.5S11.38 3 10 3H8V1H6v2H4C2.62 3 1.5 4.12 1.5 5.5S2.62 8 4 8h2v1H4c-1.38 0-2.5 1.12-2.5 2.5S2.62 14 4 14h2v9h2v-9h2c1.38 0 2.5-1.12 2.5-2.5S11.38 9 10 9zM4 6c-.28 0-.5-.22-.5-.5S3.72 5 4 5h6c.28 0 .5.22.5.5s-.22.5-.5.5H4zm6 6H4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5z" }),
  "TapasOutlined"
);
const TaskIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-9.18-6.95L7.4 14.46 10.94 18l5.66-5.66-1.41-1.41-4.24 4.24-2.13-2.12z" }),
  "TaskOutlined"
);
const TaxiAlertIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "6.5", cy: "15.5", r: "1.5" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "15.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("path", { d: "M18 13v5H4v-5h14c-1.91 0-3.63-.76-4.89-2h-8.3l1.04-3h5.44C11.1 7.37 11 6.7 11 6s.1-1.37.29-2H8v2H5.5c-.66 0-1.21.42-1.42 1.01L2 13v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-.09-.27c-.61.17-1.25.27-1.91.27z" }, "2"), /* @__PURE__ */ jsx("path", { d: "M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 8h-1V8h1v1zm0-2h-1V3h1v4z" }, "3")],
  "TaxiAlertOutlined"
);
const TempleBuddhistIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 9.02c0 1.09-.89 1.98-1.98 1.98H18V8.86c1.72-.44 3-1.99 3-3.84V5l-2 .02C19 6.11 18.11 7 17.02 7h-.52L12 1 7.5 7h-.52C5.89 7 5 6.11 5 5.02H3c0 1.86 1.28 3.4 3 3.84V11H4.98C3.89 11 3 10.11 3 9.02H1c0 1.86 1.28 3.4 3 3.84V22h7v-4c0-.55.45-1 1-1s1 .45 1 1v4h7v-9.14c1.72-.44 3-1.99 3-3.84V9l-2 .02zm-9-4.69L14 7h-4l2-2.67zM8 9h8v2H8V9zm10 11h-3v-2c0-1.65-1.35-3-3-3s-3 1.35-3 3v2H6v-7h12v7z" }),
  "TempleBuddhistOutlined"
);
const TempleHinduIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 11v2h-2L15 3V1h-2v2h-2.03V1h-2v2.12L6 13H4v-2H2v11h9v-5h2v5h9V11h-2zm-4.69 0H8.69l.6-2h5.42l.6 2zm-1.2-4H9.89l.6-2h3.02l.6 2zM20 20h-5v-5H9v5H4v-5h3.49l.6-2h7.82l.6 2H20v5z" }),
  "TempleHinduOutlined"
);
const TenMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M13 11.5h2.5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-4.5H15v3h-1.5V7zm-6 7h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm1-2.5H10v-6H7V7h1.5zm5 7H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1")],
  "TenMpOutlined"
);
const TerminalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4-4 4z" }),
  "TerminalOutlined"
);
const TerrainIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14 6-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z" }),
  "TerrainOutlined"
);
const TextDecreaseIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5L.99 19zm4.42-5.61L7.44 7.6h.12l2.03 5.79H5.41zM23 11v2h-8v-2h8z" }),
  "TextDecreaseOutlined"
);
const TextFieldsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" }),
  "TextFieldsOutlined"
);
const TextFormatIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98 13.87 11h-3.74L12 5.98z" }),
  "TextFormatOutlined"
);
const TextIncreaseIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5L.99 19zm4.42-5.61L7.44 7.6h.12l2.03 5.79H5.41zM20 11h3v2h-3v3h-2v-3h-3v-2h3V8h2v3z" }),
  "TextIncreaseOutlined"
);
const TextRotateUpIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18 4-3 3h2v13h2V7h2l-3-3zm-6.2 11.5v-5l2.2-.9V7.5L3 12.25v1.5l11 4.75v-2.1l-2.2-.9zM4.98 13 10 11.13v3.74L4.98 13z" }),
  "TextRotateUpOutlined"
);
const TextRotateVerticalIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.75 5h-1.5L9.5 16h2.1l.9-2.2h5l.9 2.2h2.1L15.75 5zm-2.62 7L15 6.98 16.87 12h-3.74zM6 20l3-3H7V4H5v13H3l3 3z" }),
  "TextRotateVerticalOutlined"
);
const TextRotationAngledownIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 21v-4.24l-1.41 1.41-9.2-9.19-1.41 1.41 9.19 9.19L10.76 21H15zM11.25 8.48l3.54 3.54-.92 2.19 1.48 1.48 4.42-11.14-1.06-1.05L7.57 7.92 9.06 9.4l2.19-.92zm6.59-3.05-2.23 4.87-2.64-2.64 4.87-2.23z" }),
  "TextRotationAngledownOutlined"
);
const TextRotationAngleupIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m16.76 9 1.41 1.41-9.19 9.19 1.41 1.41 9.19-9.19L21 13.24V9h-4.24zm-8.28 3.75 3.54-3.54 2.19.92 1.48-1.48L4.56 4.23 3.5 5.29l4.42 11.14 1.48-1.48-.92-2.2zm-.82-1.72L5.43 6.16l4.87 2.23-2.64 2.64z" }),
  "TextRotationAngleupOutlined"
);
const TextRotationDownIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m6 20 3-3H7V4H5v13H3l3 3zm6.2-11.5v5l-2.2.9v2.1l11-4.75v-1.5L10 5.5v2.1l2.2.9zm6.82 2.5L14 12.87V9.13L19.02 11z" }),
  "TextRotationDownOutlined"
);
const TextRotationNoneIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m21 18-3-3v2H5v2h13v2l3-3zM9.5 11.8h5l.9 2.2h2.1L12.75 3h-1.5L6.5 14h2.1l.9-2.2zM12 4.98 13.87 10h-3.74L12 4.98z" }),
  "TextRotationNoneOutlined"
);
const TextSnippetIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.17 5 19 9.83V19H5V5h9.17m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zM7 15h10v2H7v-2zm0-4h10v2H7v-2zm0-4h7v2H7V7z" }),
  "TextSnippetOutlined"
);
const TextsmsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" }),
  "TextsmsOutlined"
);
const TextureIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.51 3.08 3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3 3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z" }),
  "TextureOutlined"
);
const TheaterComedyIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "19", cy: "6.5", r: "1" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "15", cy: "6.5", r: "1" }, "1"), /* @__PURE__ */ jsx("path", { d: "M16.99 9c-1.38 0-2.5.84-2.5 1.88h5c0-1.04-1.12-1.88-2.5-1.88zM1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1v7zm2-5h8v5c0 2.21-1.79 4-4 4s-4-1.79-4-4v-5z" }, "2"), /* @__PURE__ */ jsx("path", { d: "M11 2v5.5h2V4h8v5c0 2.21-1.79 4-4 4-.95 0-1.81-.35-2.5-.9v2.35c.76.35 1.61.55 2.5.55 3.31 0 6-2.69 6-6V2H11z" }, "3"), /* @__PURE__ */ jsx("circle", { cx: "5", cy: "13.5", r: "1" }, "4"), /* @__PURE__ */ jsx("circle", { cx: "9", cy: "13.5", r: "1" }, "5"), /* @__PURE__ */ jsx("path", { d: "M7 17.88c1.38 0 2.5-.84 2.5-1.88h-5c0 1.04 1.12 1.88 2.5 1.88z" }, "6")],
  "TheaterComedyOutlined"
);
const TheatersIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm6 10h-4V5h4v14zm4-2h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" }),
  "TheatersOutlined"
);
const ThermostatIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z" }),
  "ThermostatOutlined"
);
const ThermostatAutoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 12V6c0-1.66-1.34-3-3-3S5 4.34 5 6v6c-1.21.91-2 2.37-2 4 0 1.12.38 2.14 1 2.97V19h.02c.91 1.21 2.35 2 3.98 2s3.06-.79 3.98-2H12v-.03c.62-.83 1-1.85 1-2.97 0-1.63-.79-3.09-2-4zm-6 4c0-.94.45-1.84 1.2-2.4L7 13V6c0-.55.45-1 1-1s1 .45 1 1v7l.8.6c.75.57 1.2 1.46 1.2 2.4H5zM18.62 4h-1.61l-3.38 9h1.56l.81-2.3h3.63l.8 2.3H22l-3.38-9zm-2.15 5.39 1.31-3.72h.08l1.31 3.72h-2.7z" }),
  "ThermostatAutoOutlined"
);
const ThirteenMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M8.5 11.5H10v-6H7V7h1.5zm8-1v-4c0-.55-.45-1-1-1H12V7h3v1h-2v1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1zm-9 3.5h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1")],
  "ThirteenMpOutlined"
);
const ThirtyFpsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 5v3h6v2.5H3v3h5V16H2v3h6c1.66 0 3-1.34 3-3v-1.9c0-1.16-.94-2.1-2.1-2.1 1.16 0 2.1-.94 2.1-2.1V8c0-1.66-1.34-3-3-3H2zm17 3v8h-4V8h4m0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3z" }),
  "ThirtyFpsOutlined"
);
const ThirtyFpsSelectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 4v2h5v2H5v2h4v2H4v2h5c1.1 0 2-.9 2-2v-1.5c0-.83-.17-1.5-1-1.5.83 0 1-.67 1-1.5V6c0-1.1-.9-2-2-2H4zm14 0c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3zm0 2h-3v6h3V6zM5 22H3v-5h2v5zm4 0H7v-5h2v5zm4 0h-2v-5h2v5zm8 0h-6v-5h6v5z" }),
  "ThirtyFpsSelectOutlined"
);
const ThreeDRotationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.53 21.48C4.26 19.94 1.92 16.76 1.56 13H.06c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72.2-.61.2-.97c0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46s.07-.32.07-.48c0-.36-.06-.68-.18-.96s-.29-.51-.51-.69c-.2-.19-.47-.33-.77-.43C9.11 8.05 8.77 8 8.4 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34.23-.17.38-.22.3-.08.48-.08c.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49s-.14.27-.25.37c-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09h-.77v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4s.1.35.1.57c0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.44-.18-.93-.27-1.47-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27s.84-.43 1.16-.76c.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57s-.42-.87-.74-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12.01 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.45 4.84 18.3 0 12.01 0z" }),
  "ThreeDRotationOutlined"
);
const ThreeGMobiledataIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 7v2h5v2H4v2h4v2H3v2h5c1.1 0 2-.9 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9c0-1.1-.9-2-2-2H3zm18 4v4c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2h-7v6h5v-2h-2.5v-2H21z" }),
  "ThreeGMobiledataOutlined"
);
const ThreeKIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M11 14v-4c0-.55-.45-1-1-1H6.5v1.5h3v1h-2v1h2v1h-3V15H10c.55 0 1-.45 1-1zm3.5-1.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z" }, "1")],
  "ThreeKOutlined"
);
const ThreeKPlusIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M10 14v-4c0-.55-.45-1-1-1H5.5v1.5h3v1h-2v1h2v1h-3V15H9c.55 0 1-.45 1-1zm2.5-1.25L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z" }, "1")],
  "ThreeKPlusOutlined"
);
const ThreeMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6-1.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zm3 3H15V14h1.5v1.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M14.5 10.5v-4c0-.55-.45-1-1-1H10V7h3v1h-2v1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1z" }, "2")],
  "ThreeMpOutlined"
);
const ThreePIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4.01c-1.1 0-2 .9-2 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-8-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.99 0-1.93.21-2.78.58C8.48 11.9 8 12.62 8 13.43V14h8v-.57z" }),
  "ThreePOutlined"
);
const ThreeSixtyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77V20l4-4-4-4v2.73c-3.15-.56-5-1.9-5-2.73 0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58 0-2.76-4.48-5-10-5z" }),
  "ThreeSixtyOutlined"
);
const ThumbDownIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4z" }),
  "ThumbDownOutlined"
);
const ThumbDownAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm0 12-4.34 4.34L11.77 14H3v-2l3-7h9v10zm4-12h4v12h-4z" }),
  "ThumbDownAltOutlined"
);
const ThumbDownOffAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4V3z" }),
  "ThumbDownOffAltOutlined"
);
const ThumbUpIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" }),
  "ThumbUpOutlined"
);
const ThumbUpAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z" }),
  "ThumbUpAltOutlined"
);
const ThumbUpOffAltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1V9z" }),
  "ThumbUpOffAltOutlined"
);
const ThumbsUpDownIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm-2 1.13L7.92 12H2V6.21l1.93-1.93L3.36 7H10v.13zM22.5 10h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5zm-.5 7.79-1.93 1.93.57-2.72H14v-.13L16.08 12H22v5.79z" }),
  "ThumbsUpDownOutlined"
);
const TimeToLeaveIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 6h10.29l1.04 3H5.81l1.04-3zM19 16H5v-4.66l.12-.34h13.77l.11.34V16z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "13.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "16.5", cy: "13.5", r: "1.5" }, "2")],
  "TimeToLeaveOutlined"
);
const TimelapseIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.24 7.75c-1.17-1.17-2.7-1.76-4.24-1.76v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 1.99c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }),
  "TimelapseOutlined"
);
const TimelineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z" }),
  "TimelineOutlined"
);
const TimerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" }),
  "TimerOutlined"
);
const Timer10Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M-.01 7.72V9.4l3-1V18h2V6h-.25L-.01 7.72zm23.78 6.65c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25s-.23-.19-.28-.3c-.05-.11-.08-.24-.08-.39 0-.14.03-.28.09-.41s.15-.25.27-.34c.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11s.35.17.48.29.22.26.29.42c.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09s-.39-.63-.69-.88c-.3-.25-.66-.44-1.09-.59-.43-.15-.92-.22-1.46-.22-.51 0-.98.07-1.39.21s-.77.33-1.06.57c-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.69.23.96c.15.28.36.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77s-.66.29-1.17.29c-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05s.39.65.7.93c.31.27.69.49 1.15.66s.98.25 1.58.25c.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02zm-9.96-7.32c-.34-.4-.75-.7-1.23-.88-.47-.18-1.01-.27-1.59-.27s-1.11.09-1.59.27c-.48.18-.89.47-1.23.88-.34.41-.6.93-.79 1.59-.18.65-.28 1.45-.28 2.39v1.92c0 .94.09 1.74.28 2.39.19.66.45 1.19.8 1.6.34.41.75.71 1.23.89s1.01.28 1.59.28c.59 0 1.12-.09 1.59-.28.48-.18.88-.48 1.22-.89s.6-.94.78-1.6c.18-.65.28-1.45.28-2.39v-1.92c0-.94-.09-1.74-.28-2.39-.18-.66-.44-1.19-.78-1.59zm-.92 6.17c0 .6-.04 1.11-.12 1.53s-.2.76-.36 1.02c-.16.26-.36.45-.59.57-.23.12-.51.18-.82.18-.3 0-.58-.06-.82-.18s-.44-.31-.6-.57c-.16-.26-.29-.6-.38-1.02s-.13-.93-.13-1.53v-2.5c0-.6.04-1.11.13-1.52s.21-.74.38-1c.16-.25.36-.43.6-.55.24-.11.51-.17.81-.17.31 0 .58.06.81.17.24.11.44.29.6.55.16.25.29.58.37.99s.13.92.13 1.52v2.51h-.01z" }),
  "Timer10Outlined"
);
const Timer10SelectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M13 8v8h-3V8h3m0-3h-3C8.34 5 7 6.34 7 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3zM1 8h2v11h3V5H1v3zm17.5 3c-.83 0-1.5.68-1.5 1.5v2c0 .82.67 1.5 1.5 1.5H21v1h-4v2h4.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H19v-1h4v-2h-4.5z" }),
  "Timer10SelectOutlined"
);
const Timer3Icon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.61 12.97c-.16-.24-.36-.46-.62-.65-.25-.19-.56-.35-.93-.48.3-.14.57-.3.8-.5.23-.2.42-.41.57-.64.15-.23.27-.46.34-.71.08-.24.11-.49.11-.73 0-.55-.09-1.04-.28-1.46-.18-.42-.44-.77-.78-1.06-.33-.28-.73-.5-1.2-.64-.45-.13-.97-.2-1.53-.2-.55 0-1.06.08-1.52.24-.47.17-.87.4-1.2.69-.33.29-.6.63-.78 1.03-.2.39-.29.83-.29 1.29h1.98c0-.26.05-.49.14-.69.09-.2.22-.38.38-.52.17-.14.36-.25.58-.33s.46-.12.73-.12c.61 0 1.06.16 1.36.47.3.31.44.75.44 1.32 0 .27-.04.52-.12.74-.08.22-.21.41-.38.57s-.38.28-.63.37-.55.13-.89.13H6.72v1.57H7.9c.34 0 .64.04.91.11.27.08.5.19.69.35.19.16.34.36.44.61.1.24.16.54.16.87 0 .62-.18 1.09-.53 1.42-.35.33-.84.49-1.45.49-.29 0-.56-.04-.8-.13-.24-.08-.44-.2-.61-.36s-.3-.34-.39-.56c-.09-.22-.14-.46-.14-.72H4.19c0 .55.11 1.03.32 1.45.21.42.5.77.86 1.05s.77.49 1.24.63.96.21 1.48.21c.57 0 1.09-.08 1.58-.23s.91-.38 1.26-.68c.36-.3.64-.66.84-1.1.2-.43.3-.93.3-1.48 0-.29-.04-.58-.11-.86-.08-.25-.19-.51-.35-.76zm9.26 1.4c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25s-.23-.19-.28-.3c-.05-.11-.08-.24-.08-.39s.03-.28.09-.41.15-.25.27-.34c.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11s.35.17.48.29.22.26.29.42c.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09s-.39-.63-.69-.88c-.3-.25-.66-.44-1.09-.59-.43-.15-.92-.22-1.46-.22-.51 0-.98.07-1.39.21s-.77.33-1.06.57c-.29.24-.51.52-.67.84s-.23.65-.23 1.01.08.68.23.96.37.52.64.73c.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77s-.66.29-1.17.29c-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05s.39.65.7.93c.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02z" }),
  "Timer3Outlined"
);
const Timer3SelectIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 11v2h-4v1h2.5c.83 0 1.5.68 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H15v-2h4v-1h-2.5c-.82 0-1.5-.68-1.5-1.5v-2c0-.82.68-1.5 1.5-1.5H21zM4 5v3h6v2.5H4v3h6V16H4v3h6c1.66 0 3-1.34 3-3v-1.9c0-1.16-.94-2.1-2.1-2.1 1.16 0 2.1-.94 2.1-2.1V8c0-1.66-1.34-3-3-3H4z" }),
  "Timer3SelectOutlined"
);
const TimerOffIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M9 1h6v2H9zm3 5c3.87 0 7 3.13 7 7 0 .94-.19 1.83-.52 2.65l1.5 1.5C20.63 15.91 21 14.5 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-1.5 0-2.91.37-4.15 1.02l1.5 1.5C10.17 6.19 11.06 6 12 6z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m11 8.17 2 2V8h-2zM2.81 2.81 1.39 4.22l3.4 3.4C3.67 9.12 3 10.98 3 13c0 4.97 4.02 9 9 9 2.02 0 3.88-.67 5.38-1.79l2.4 2.4 1.41-1.41L2.81 2.81zM12 20c-3.87 0-7-3.13-7-7 0-1.47.45-2.83 1.22-3.95l9.73 9.73C14.83 19.55 13.47 20 12 20z" }, "1")],
  "TimerOffOutlined"
);
const TimesOneMobiledataIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 7h4v10H6V9H4V7zm11.83 4.72L18.66 7h-2.33l-1.66 2.77L13 7h-2.33l2.83 4.72L10.33 17h2.33l2-3.34 2 3.34H19l-3.17-5.28z" }),
  "TimesOneMobiledataOutlined"
);
const TipsAndUpdatesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm-2-1h8v-2H5v2zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5zm-2 0C14.5 6.47 12.03 4 9 4S3.5 6.47 3.5 9.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5zm6.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6l-.63 1.37zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94L19 6z" }),
  "TipsAndUpdatesOutlined"
);
const TitleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 4v3h5.5v12h3V7H19V4H5z" }),
  "TitleOutlined"
);
const TocIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z" }),
  "TocOutlined"
);
const TodayIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM7 11h5v5H7z" }),
  "TodayOutlined"
);
const ToggleOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }),
  "ToggleOffOutlined"
);
const ToggleOnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }),
  "ToggleOnOutlined"
);
const TokenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m21 7-9-5-9 5v10l9 5 9-5V7zm-9-2.71 5.91 3.28-3.01 1.67C14.17 8.48 13.14 8 12 8s-2.17.48-2.9 1.24L6.09 7.57 12 4.29zm-1 14.87-6-3.33V9.26L8.13 11c-.09.31-.13.65-.13 1 0 1.86 1.27 3.43 3 3.87v3.29zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm3 7.16v-3.28c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L19 9.26v6.57l-6 3.33z" }),
  "TokenOutlined"
);
const TollIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z" }),
  "TollOutlined"
);
const TonalityIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z" }),
  "TonalityOutlined"
);
const TopicIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16.77c.68 0 1.23-.56 1.23-1.23V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-2-6H6v-2h12v2zm-4 4H6v-2h8v2z" }),
  "TopicOutlined"
);
const TouchAppIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18.19 12.44-3.24-1.62c1.29-1 2.12-2.56 2.12-4.32 0-3.03-2.47-5.5-5.5-5.5s-5.5 2.47-5.5 5.5c0 2.13 1.22 3.98 3 4.89v3.26c-2.15-.46-2.02-.44-2.26-.44-.53 0-1.03.21-1.41.59L4 16.22l5.09 5.09c.43.44 1.03.69 1.65.69h6.3c.98 0 1.81-.7 1.97-1.67l.8-4.71c.22-1.3-.43-2.58-1.62-3.18zm-.35 2.85-.8 4.71h-6.3c-.09 0-.17-.04-.24-.1l-3.68-3.68 4.25.89V6.5c0-.28.22-.5.5-.5s.5.22.5.5v6h1.76l3.46 1.73c.4.2.62.63.55 1.06zM8.07 6.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .95-.38 1.81-1 2.44V6.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v2.44c-.62-.63-1-1.49-1-2.44z" }),
  "TouchAppOutlined"
);
const TourIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 4H7V2H5v20h2v-8h14l-2-5 2-5zm-3.86 5.74.9 2.26H7V6h11.05l-.9 2.26-.3.74.29.74zM14 9c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" }),
  "TourOutlined"
);
const ToysIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.75 10.08 17.4 6.05C17 4.82 15.85 4 14.56 4H9.44C8.15 4 7 4.82 6.6 6.05L5.81 8.4 4.41 7l.29-.29c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0l-2 2c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l.3-.3 1.79 1.79C3.18 10.72 2 12.22 2 14c0 1.49.83 2.78 2.05 3.47C4.27 18.9 5.51 20 7 20c1.3 0 2.4-.84 2.82-2h4.37c.41 1.16 1.51 2 2.82 2 1.49 0 2.73-1.1 2.95-2.53C21.17 16.78 22 15.49 22 14c0-1.95-1.4-3.57-3.25-3.92zM13 6h1.56c.43 0 .81.27.95.68l1.1 3.32H13V6zm-4.51.68c.14-.41.52-.68.95-.68H11v4H7.41l-.02-.02 1.1-3.3zM7 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.49-2.68C18.95 14.53 18.03 14 17 14c-1.3 0-2.4.84-2.82 2H9.82C9.4 14.84 8.3 14 7 14c-1.03 0-1.95.53-2.49 1.32C4.2 14.97 4 14.51 4 14c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2 0 .51-.2.97-.51 1.32z" }),
  "ToysOutlined"
);
const TrackChangesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m19.07 4.93-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z" }),
  "TrackChangesOutlined"
);
const TrafficIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-5 9H9V5h6v14zm-3-1c.83 0 1.5-.67 1.5-1.5S12.83 15 12 15s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm0-4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM12 9c.83 0 1.5-.67 1.5-1.5S12.83 6 12 6s-1.5.67-1.5 1.5S11.17 9 12 9z" }),
  "TrafficOutlined"
);
const TrainIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "14.5", r: "1.5" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "15.5", cy: "14.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("path", { d: "M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2l2-2h4l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zm0 2c3.51 0 4.96.48 5.57 1H6.43c.61-.52 2.06-1 5.57-1zM6 7h5v3H6V7zm12 8.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V12h12v3.5zm0-5.5h-5V7h5v3z" }, "2")],
  "TrainOutlined"
);
const TramIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m13 5 .75-1.5H17V2H7v1.5h4.75L11 5c-3.13.09-6 .73-6 3.5V17c0 1.5 1.11 2.73 2.55 2.95L6 21.5v.5h2l2-2h4l2 2h2v-.5l-1.55-1.55h-.01.01C17.89 19.73 19 18.5 19 17V8.5c0-2.77-2.87-3.41-6-3.5zm-1.97 2h1.94c2.75.08 3.62.58 3.9 1H7.13c.28-.42 1.15-.92 3.9-1zm-.18 10.95H7.74C7.3 17.84 7 17.45 7 17v-1h3.89c-.24.27-.39.61-.39 1 0 .36.13.69.35.95zM17 17c0 .45-.3.84-.74.95h-3.11c.22-.26.35-.59.35-.95 0-.39-.15-.73-.39-1H17v1zm0-3H7v-4h10v4z" }),
  "TramOutlined"
);
const TransferWithinAStationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5h-5.51zm3.02 4.25H14v1.5h5.51V23L22 20.5 19.51 18v1.75zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9 3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75" }),
  "TransferWithinAStationOutlined"
);
const TransformIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z" }),
  "TransformOutlined"
);
const TransgenderIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 8c1.93 0 3.5 1.57 3.5 3.5S13.93 15 12 15s-3.5-1.57-3.5-3.5S10.07 8 12 8zm4.53.38 3.97-3.96V7h2V1h-6v2h2.58l-3.97 3.97C14.23 6.36 13.16 6 12 6s-2.23.36-3.11.97l-.65-.65 1.41-1.41-1.41-1.42L6.82 4.9 4.92 3H7.5V1h-6v6h2V4.42l1.91 1.9-1.42 1.42L5.4 9.15l1.41-1.41.65.65c-.6.88-.96 1.95-.96 3.11 0 2.7 1.94 4.94 4.5 5.41V19H9v2h2v2h2v-2h2v-2h-2v-2.09c2.56-.47 4.5-2.71 4.5-5.41 0-1.16-.36-2.23-.97-3.12z" }),
  "TransgenderOutlined"
);
const TransitEnterexitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z" }),
  "TransitEnterexitOutlined"
);
const TravelExploreIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.3 16.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2 1.4-1.4-3.2-3.2zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zM12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07c-.64-2.46-2.4-4.47-4.73-5.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8z" }),
  "TravelExploreOutlined"
);
const TripOriginIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" }),
  "TripOriginOutlined"
);
const TryIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m12 15 1.57-3.43L17 10l-3.43-1.57L12 5l-1.57 3.43L7 10l3.43 1.57z" }, "1")],
  "TryOutlined"
);
const TtyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 6h-2V4h2v2zm2 1h-2v2h2V7zm1 2h2V7h-2v2zm0-5h-2v2h2V4zm-4 3h-2v2h2V7zm4 3h-2v2h2v-2zm-3 0h-2v2h2v-2zm-3-6h-2v2h2V4zm7 11.82v4.15c0 .56-.47 1.03-1.03 1-2.89-.17-5.6-1.03-7.97-2.4A17.999 17.999 0 0 1 4.43 12C3.05 9.63 2.2 6.92 2.03 4.03 2 3.47 2.47 3 3.03 3h4.15c.48 0 .89.34.98.8l.74 3.68c.07.33-.04.67-.27.9L6.1 10.9c1.43 2.5 3.5 4.57 6 6l2.52-2.52c.24-.24.58-.34.9-.27l3.67.73c.47.09.81.5.81.98zM5.18 8.99l1.65-1.65L6.36 5H4.13c.17 1.37.53 2.71 1.05 3.99zM18 16.64l-2.34-.47-1.65 1.65c1.28.52 2.63.87 3.99 1.05v-2.23zM20 4v2h2V4h-2zm0 8h2v-2h-2v2zm-7-2h-2v2h2v-2z" }),
  "TtyOutlined"
);
const TungstenIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 19h2v3h-2zm-9-8h3v2H2zm17 0h3v2h-3zm-3.106 6.8014 1.4072-1.4071 2.1213 2.1213-1.4071 1.4071zm-11.3099.7071 2.1214-2.1213 1.4071 1.4072-2.1213 2.1213zM15 8.02V3H9v5.02c-1.21.92-2 2.35-2 3.98 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.06-2-3.98zM11 5h2v2.1c-.32-.06-.66-.1-1-.1s-.68.04-1 .1V5zm1 10c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" }),
  "TungstenOutlined"
);
const TurnLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m6.83 11 1.59 1.59L7 14l-4-4 4-4 1.41 1.41L6.83 9H15c1.1 0 2 .9 2 2v9h-2v-9H6.83z" }),
  "TurnLeftOutlined"
);
const TurnRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m17.17 11-1.59 1.59L17 14l4-4-4-4-1.41 1.41L17.17 9H9c-1.1 0-2 .9-2 2v9h2v-9h8.17z" }),
  "TurnRightOutlined"
);
const TurnSharpLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 6.83 4.41 8.41 3 7l4-4 4 4-1.41 1.41L8 6.83V13h8c1.1 0 2 .9 2 2v6h-2v-6H8c-1.1 0-2-.9-2-2V6.83z" }),
  "TurnSharpLeftOutlined"
);
const TurnSharpRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m18 6.83 1.59 1.59L21 7l-4-4-4 4 1.41 1.41L16 6.83V13H8c-1.1 0-2 .9-2 2v6h2v-6h8c1.1 0 2-.9 2-2V6.83z" }),
  "TurnSharpRightOutlined"
);
const TurnSlightLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-7.58c0-.53-.21-1.04-.59-1.41l-5-5h2.25z" }),
  "TurnSlightLeftOutlined"
);
const TurnSlightRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-7.58c0-.53.21-1.04.59-1.41l5-5h-2.25z" }),
  "TurnSlightRightOutlined"
);
const TurnedInIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" }),
  "TurnedInOutlined"
);
const TurnedInNotIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z" }),
  "TurnedInNotOutlined"
);
const TvIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" }),
  "TvOutlined"
);
const TvOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 7v10.88l1.85 1.85c.09-.23.15-.47.15-.73V7c0-1.11-.89-2-2-2h-7.58l3.29-3.3L16 1l-4 4-4-4-.7.7L10.58 5H8.12l2 2H21zm-.54 16 1.26-1.27-1.26 1.26zM2.41 2.13l-.14.14L1 3.54l1.53 1.53C1.65 5.28 1 6.06 1 7v12c0 1.1.9 2 2 2h15.46l1.99 1.99 1.26-1.26.15-.15L2.41 2.13zM3 19V7h1.46l12 12H3z" }),
  "TvOffOutlined"
);
const TwelveMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M8.5 11.5H10v-6H7V7h1.5zm8-1.5h-3V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H12V7h3v1h-2c-.55 0-1 .45-1 1v2.5h4.5V10z" }, "2")],
  "TwelveMpOutlined"
);
const TwentyFourMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm9.5-1.5h-3.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1zm-.5 3H15V14h1.5v1.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M11 10H8V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H6.5V7h3v1h-2c-.55 0-1 .45-1 1v2.5H11V10zm5 1.5h1.5V10h1V8.5h-1v-3H16v3h-1.5v-3H13V10h3z" }, "2")],
  "TwentyFourMpOutlined"
);
const TwentyOneMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M14.5 11.5H16v-6h-3V7h1.5zM12 10H9V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H7.5V7h3v1h-2c-.55 0-1 .45-1 1v2.5H12V10zm-4.5 4h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm7.5 3h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6H15V17zm0-3h1.5v1.5H15V14z" }, "1")],
  "TwentyOneMpOutlined"
);
const TwentyThreeMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6-1.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zm3 3H15V14h1.5v1.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M11 10H8V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H6.5V7h3v1h-2c-.55 0-1 .45-1 1v2.5H11V10zm6.5.5v-4c0-.55-.45-1-1-1H13V7h3v1h-2v1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1z" }, "2")],
  "TwentyThreeMpOutlined"
);
const TwentyTwoMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6-1.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zm3 3H15V14h1.5v1.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M11 10H8V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H6.5V7h3v1h-2c-.55 0-1 .45-1 1v2.5H11V10zm6.5 0h-3V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H13V7h3v1h-2c-.55 0-1 .45-1 1v2.5h4.5V10z" }, "2")],
  "TwentyTwoMpOutlined"
);
const TwentyZeroMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6-1.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zm3 3H15V14h1.5v1.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M14 11.5h2.5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H14c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-4.5H16v3h-1.5V7zM11 10H8V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H6.5V7h3v1h-2c-.55 0-1 .45-1 1v2.5H11V10z" }, "2")],
  "TwentyZeroMpOutlined"
);
const TwoKIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M11 13.5H8v-1h2c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1H6.5v1.5h3v1h-2c-.55 0-1 .45-1 1V15H11v-1.5zm3.5-.75L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z" }, "1")],
  "TwoKOutlined"
);
const TwoKPlusIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M10 13.5H7.5v-1H9c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1H6v1.5h2.5v1H7c-.55 0-1 .45-1 1V15h4v-1.5zm2.5-.75L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z" }, "1")],
  "TwoKPlusOutlined"
);
const TwoMpIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1"), /* @__PURE__ */ jsx("path", { d: "M14.5 10h-3V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H10V7h3v1h-2c-.55 0-1 .45-1 1v2.5h4.5V10z" }, "2")],
  "TwoMpOutlined"
);
const TwoWheelerIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4.17 11H4h.17m9.24-6H9v2h3.59l2 2H11l-4 2-2-2H0v2h4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4l2 2h3l3.49-6.1 1.01 1.01c-.91.73-1.5 1.84-1.5 3.09 0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4c-.18 0-.36.03-.53.05L17.41 9H20V6l-3.72 1.86L13.41 5zM20 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM4 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }),
  "TwoWheelerOutlined"
);
const UTurnLeftIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 9v12h-2V9c0-2.21-1.79-4-4-4S8 6.79 8 9v4.17l1.59-1.59L11 13l-4 4-4-4 1.41-1.41L6 13.17V9c0-3.31 2.69-6 6-6s6 2.69 6 6z" }),
  "UTurnLeftOutlined"
);
const UTurnRightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 9v12h2V9c0-2.21 1.79-4 4-4s4 1.79 4 4v4.17l-1.59-1.59L13 13l4 4 4-4-1.41-1.41L18 13.17V9c0-3.31-2.69-6-6-6S6 5.69 6 9z" }),
  "UTurnRightOutlined"
);
const UmbrellaIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14.5 6.92 13 5.77V3.4c0-.26.22-.48.5-.48s.5.21.5.48V4h2v-.6C16 2.07 14.88 1 13.5 1S11 2.07 11 3.4v2.37L9.5 6.92 6 6.07l5.05 15.25c.15.45.55.68.95.68s.8-.23.95-.69L18 6.07l-3.5.85zM13.28 8.5l.76.58.92-.23L13 14.8V8.29l.28.21zm-3.32.59.76-.58.28-.22v6.51L9.03 8.86l.93.23z" }),
  "UmbrellaOutlined"
);
const UnarchiveIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm3-5h2.55v3h2.9v-3H16l-4-4z" }),
  "UnarchiveOutlined"
);
const UnpublishedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M7.94 5.12 6.49 3.66C8.07 2.61 9.96 2 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46C19.59 14.86 20 13.48 20 12c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12zm9.72 4.41-1.41-1.41-2.65 2.65 1.41 1.41 2.65-2.65zm2.12 13.08-2.27-2.27C15.93 21.39 14.04 22 12 22 6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zm-3.72-3.73L12.18 15l-1.59 1.59-4.24-4.24 1.41-1.41 2.83 2.83.18-.18-5.65-5.65C4.41 9.14 4 10.52 4 12c0 4.41 3.59 8 8 8 1.48 0 2.86-.41 4.06-1.12z" }),
  "UnpublishedOutlined"
);
const UnsubscribeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.99 14.04V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10.05c.28 1.92 2.1 3.35 4.18 2.93 1.34-.27 2.43-1.37 2.7-2.71.25-1.24-.16-2.39-.94-3.18zm-2-9.04L12 8.5 5 5h13.99zm-3.64 10H5V7l7 3.5L19 7v6.05c-.16-.02-.33-.05-.5-.05-1.39 0-2.59.82-3.15 2zm5.15 2h-4v-1h4v1z" }),
  "UnsubscribeOutlined"
);
const UpcomingIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.6 10.81 16.19 9.4l3.56-3.55 1.41 1.41c-.11.03-3.56 3.55-3.56 3.55zM13 3h-2v5h2V3zm-6.6 7.81L7.81 9.4 4.26 5.84 2.84 7.26c.11.03 3.56 3.55 3.56 3.55zM20 14h-3.42c-.77 1.76-2.54 3-4.58 3s-3.81-1.24-4.58-3H4v5h16v-5m0-2c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h5c0 1.66 1.34 3 3 3s3-1.34 3-3h5z" }),
  "UpcomingOutlined"
);
const UpdateIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 8v5l4.25 2.52.77-1.28-3.52-2.09V8H11zm10 2V3l-2.64 2.64C16.74 4.01 14.49 3 12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9h-2c0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7c1.93 0 3.68.79 4.95 2.05L14 10h7z" }),
  "UpdateOutlined"
);
const UpdateDisabledIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.94 13c-.15 1.38-.62 2.67-1.33 3.79l-1.47-1.47c.38-.71.65-1.49.77-2.32h2.03zM8.67 5.84C9.66 5.31 10.8 5 12 5c2.37 0 4.47 1.19 5.74 3H15v2h6V4h-2v2.36C17.35 4.32 14.83 3 12 3c-1.76 0-3.4.51-4.78 1.39l1.45 1.45zM11 7v1.17l2 2V7h-2zm8.78 15.61-3-3C15.39 20.48 13.76 21 12 21c-4.97 0-9-4.03-9-9 0-1.76.51-3.4 1.39-4.78l-3-3L2.8 2.81l18.38 18.38-1.4 1.42zm-4.46-4.46L5.84 8.67C5.31 9.66 5 10.8 5 12c0 3.86 3.14 7 7 7 1.2 0 2.34-.31 3.32-.85z" }),
  "UpdateDisabledOutlined"
);
const UpgradeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 18v2H8v-2h8zM11 7.99V16h2V7.99h3L12 4 8 7.99h3z" }),
  "UpgradeOutlined"
);
const UploadIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 16h6v-6h4l-7-7-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z" }),
  "UploadOutlined"
);
const UsbIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2S4.8 7.79 4.8 9c0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95 0 1.22.99 2.2 2.2 2.2s2.2-.98 2.2-2.2c0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z" }),
  "UsbOutlined"
);
const UsbOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 8h4v4h-1v2c0 .34-.08.66-.23.94L16 13.17V12h-1V8zm-4 .17 2 2V6h2l-3-4-3 4h2v2.17zM13 16v2.28c.6.34 1 .98 1 1.72 0 1.1-.9 2-2 2s-2-.9-2-2c0-.74.4-1.37 1-1.72V16H8c-1.11 0-2-.89-2-2v-2.28c-.6-.34-1-.98-1-1.72 0-.59.26-1.13.68-1.49L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41-6.6-6.6H13zm-2-2v-.17l-2.51-2.51c-.14.16-.31.29-.49.4V14h3z" }),
  "UsbOffOutlined"
);
const VaccinesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11 5.5H8V4h.5c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1H6v1.5H3c-.55 0-1 .45-1 1s.45 1 1 1V15c0 1.1.9 2 2 2h1v4l2 1.5V17h1c1.1 0 2-.9 2-2V7.5c.55 0 1-.45 1-1s-.45-1-1-1zM9 9H7.25c-.41 0-.75.34-.75.75s.34.75.75.75H9V12H7.25c-.41 0-.75.34-.75.75s.34.75.75.75H9V15H5V7.5h4V9zm10.5 1.5V10c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1v.5c0 .5-1.5 1.16-1.5 3V20c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-6.5c0-1.84-1.5-2.5-1.5-3zm-3 0V10h1v.5c0 1.6 1.5 2 1.5 3v.5h-4v-.5c0-1 1.5-1.4 1.5-3zm2.5 5V17h-4v-1.5h4zM15 20v-1.5h4V20h-4z" }),
  "VaccinesOutlined"
);
const VerifiedIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M23 11.99 20.56 9.2l.34-3.69-3.61-.82L15.4 1.5 12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 11.99l2.44 2.79-.34 3.7 3.61.82 1.89 3.2 3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69 2.44-2.8zm-3.95 1.48-.56.65.08.85.18 1.95-1.9.43-.84.19-.44.74-.99 1.68-1.78-.77-.8-.34-.79.34-1.78.77-.99-1.67-.44-.74-.84-.19-1.9-.43.18-1.96.08-.85-.56-.65L3.67 12l1.29-1.48.56-.65-.09-.86-.18-1.94 1.9-.43.84-.19.44-.74.99-1.68 1.78.77.8.34.79-.34 1.78-.77.99 1.68.44.74.84.19 1.9.43-.18 1.95-.08.85.56.65 1.29 1.47-1.28 1.48z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m10.09 13.75-2.32-2.33-1.48 1.49 3.8 3.81 7.34-7.36-1.48-1.49z" }, "1")],
  "VerifiedOutlined"
);
const VerifiedUserIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" }),
  "VerifiedUserOutlined"
);
const VerticalAlignBottomIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" }),
  "VerticalAlignBottomOutlined"
);
const VerticalAlignCenterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z" }),
  "VerticalAlignCenterOutlined"
);
const VerticalAlignTopIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" }),
  "VerticalAlignTopOutlined"
);
const VerticalSplitIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm16 2v10h-4V7h4m2-2h-8v14h8V5z" }),
  "VerticalSplitOutlined"
);
const VibrationIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z" }),
  "VibrationOutlined"
);
const VideoCallIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM15 16H5V8h10v8zm-6-1h2v-2h2v-2h-2V9H9v2H7v2h2z" }),
  "VideoCallOutlined"
);
const VideoCameraBackIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11l-4 3.98zM16 18H4V6h12v12zm-4.38-6.5L9 15l-1.62-2.17L5 16h10l-3.38-4.5z" }),
  "VideoCameraBackOutlined"
);
const VideoCameraFrontIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11l-4 3.98zm-2-.79V18H4V6h12v3.69z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "10", cy: "10", r: "2" }, "1"), /* @__PURE__ */ jsx("path", { d: "M14 15.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.99 0-1.93.21-2.78.58C6.48 13.9 6 14.62 6 15.43V16h8v-.57z" }, "2")],
  "VideoCameraFrontOutlined"
);
const VideoFileIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm8-6 2-1.06v4.12L14 16v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1z" }),
  "VideoFileOutlined"
);
const VideoLabelIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z" }),
  "VideoLabelOutlined"
);
const VideoLibraryIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM12 5.5v9l6-4.5z" }),
  "VideoLibraryOutlined"
);
const VideoSettingsIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M3 6h18v5h2V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H3V6z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M15 12 9 8v8zm7.71 6.43c.03-.29.04-.58.01-.86l1.07-.85c.1-.08.12-.21.06-.32l-1.03-1.79c-.06-.11-.19-.15-.31-.11l-1.28.5c-.23-.17-.48-.31-.75-.42l-.2-1.36c-.02-.13-.12-.22-.25-.22h-2.07c-.12 0-.23.09-.25.21l-.2 1.36c-.26.11-.51.26-.74.42l-1.28-.5c-.12-.05-.25 0-.31.11l-1.03 1.79c-.06.11-.04.24.06.32l1.07.86c-.03.29-.04.58-.01.86l-1.07.85c-.1.08-.12.21-.06.32l1.03 1.79c.06.11.19.15.31.11l1.27-.5c.23.17.48.31.75.42l.2 1.36c.02.12.12.21.25.21h2.07c.12 0 .23-.09.25-.21l.2-1.36c.26-.11.51-.26.74-.42l1.28.5c.12.05.25 0 .31-.11l1.03-1.79c.06-.11.04-.24-.06-.32l-1.06-.85zM19 19.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" }, "1")],
  "VideoSettingsOutlined"
);
const VideoStableIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h2.95l-2.33 8.73L16.82 18H4zm11.62-2.39-8.55-2.29L8.38 8.4l8.56 2.29-1.32 4.92zM20 18h-2.95l2.34-8.73L7.18 6H20v12z" }),
  "VideoStableOutlined"
);
const VideocamIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z" }),
  "VideocamOutlined"
);
const VideocamOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m9.56 8-2-2-4.15-4.14L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.55-.18L19.73 21l1.41-1.41-8.86-8.86L9.56 8zM5 16V8h1.73l8 8H5zm10-8v2.61l6 6V6.5l-4 4V7c0-.55-.45-1-1-1h-5.61l2 2H15z" }),
  "VideocamOffOutlined"
);
const VideogameAssetIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "14.5", cy: "13.5", r: "1.5" }, "1"), /* @__PURE__ */ jsx("circle", { cx: "18.5", cy: "10.5", r: "1.5" }, "2")],
  "VideogameAssetOutlined"
);
const VideogameAssetOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.5 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-6.67-1H20v8h-1.17l1.87 1.87c.75-.29 1.3-1.02 1.3-1.87V8c0-1.1-.9-2-2-2H8.83l2 2zm8.95 14.61L15.17 18H4c-1.1 0-2-.9-2-2V8c0-.85.55-1.58 1.3-1.87L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM13.17 16l-3-3H9v2H7v-2H5v-2h2V9.83L5.17 8H4v8h9.17z" }),
  "VideogameAssetOffOutlined"
);
const ViewAgendaIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H5v-4h14v4zm0-16H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 6H5V5h14v4z" }),
  "ViewAgendaOutlined"
);
const ViewArrayIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15 7v10H9V7h6zm6-2h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z" }),
  "ViewArrayOutlined"
);
const ViewCarouselIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 7h4v10H2V7zm5 12h10V5H7v14zM9 7h6v10H9V7zm9 0h4v10h-4V7z" }),
  "ViewCarouselOutlined"
);
const ViewColumnIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5v14h18V5H3zm5.33 12H5V7h3.33v10zm5.34 0h-3.33V7h3.33v10zM19 17h-3.33V7H19v10z" }),
  "ViewColumnOutlined"
);
const ViewComfyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5v14h19V5H3zm17 4h-2.25V7H20v2zM9.25 11h2.25v2H9.25v-2zm-2 2H5v-2h2.25v2zm4.25-4H9.25V7h2.25v2zm2-2h2.25v2H13.5V7zm-2 8v2H9.25v-2h2.25zm2 0h2.25v2H13.5v-2zm0-2v-2h2.25v2H13.5zm4.25-2H20v2h-2.25v-2zM7.25 7v2H5V7h2.25zM5 15h2.25v2H5v-2zm12.75 2v-2H20v2h-2.25z" }),
  "ViewComfyOutlined"
);
const ViewComfyAltIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7 7h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" }, "1")],
  "ViewComfyAltOutlined"
);
const ViewCompactIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5v14h19V5H3zm2 2h15v4H5V7zm0 10v-4h4v4H5zm6 0v-4h9v4h-9z" }),
  "ViewCompactOutlined"
);
const ViewCompactAltIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M7.5 7.5h4v4h-4zm5 0h4v4h-4zm-5 5h4v4h-4zm5 0h4v4h-4z" }, "1")],
  "ViewCompactAltOutlined"
);
const ViewCozyIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7.25 7.25h4v4h-4zm5.5 0h4v4h-4zm-5.5 5.5h4v4h-4zm5.5 0h4v4h-4z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" }, "1")],
  "ViewCozyOutlined"
);
const ViewDayIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z" }),
  "ViewDayOutlined"
);
const ViewHeadlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" }),
  "ViewHeadlineOutlined"
);
const ViewInArIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 4c0-.55.45-1 1-1h2V1H4C2.34 1 1 2.34 1 4v2h2V4zm0 16v-2H1v2c0 1.66 1.34 3 3 3h2v-2H4c-.55 0-1-.45-1-1zM20 1h-2v2h2c.55 0 1 .45 1 1v2h2V4c0-1.66-1.34-3-3-3zm1 19c0 .55-.45 1-1 1h-2v2h2c1.66 0 3-1.34 3-3v-2h-2v2zm-2-5.13V9.13c0-.72-.38-1.38-1-1.73l-5-2.88c-.31-.18-.65-.27-1-.27s-.69.09-1 .27L6 7.39c-.62.36-1 1.02-1 1.74v5.74c0 .72.38 1.38 1 1.73l5 2.88c.31.18.65.27 1 .27s.69-.09 1-.27l5-2.88c.62-.35 1-1.01 1-1.73zm-8 2.3-4-2.3v-4.63l4 2.33v4.6zm1-6.33L8.04 8.53 12 6.25l3.96 2.28L12 10.84zm5 4.03-4 2.3v-4.6l4-2.33v4.63z" }),
  "ViewInArOutlined"
);
const ViewKanbanIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M7 7h2v10H7zm4 0h2v5h-2zm4 0h2v8h-2z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1")],
  "ViewKanbanOutlined"
);
const ViewQuiltIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 5v14h18V5H3zm5.33 12H5V7h3.33v10zm5.34 0h-3.33v-4h3.33v4zM19 17h-3.33v-4H19v4zm0-6h-8.67V7H19v4z" }),
  "ViewQuiltOutlined"
);
const ViewSidebarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2 4v16h20V4H2zm18 4.67h-2.5V6H20v2.67zm-2.5 2H20v2.67h-2.5v-2.67zM4 6h11.5v12H4V6zm13.5 12v-2.67H20V18h-2.5z" }),
  "ViewSidebarOutlined"
);
const ViewStreamIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 10H5v-4h14v4zM5 11V7h14v4H5z" }),
  "ViewStreamOutlined"
);
const ViewTimelineIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M6 15h6v2H6zm6-8h6v2h-6zm-3 4h6v2H9z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }, "1")],
  "ViewTimelineOutlined"
);
const ViewWeekIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z" }),
  "ViewWeekOutlined"
);
const VignetteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 5v14H3V5h18m0-2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 5c3.25 0 6 1.83 6 4s-2.75 4-6 4-6-1.83-6-4 2.75-4 6-4m0-2c-4.42 0-8 2.69-8 6s3.58 6 8 6 8-2.69 8-6-3.58-6-8-6z" }),
  "VignetteOutlined"
);
const VillaIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 10c-1.1 0-2 .9-2 2h-1V3L3 8v13h18v-9c0-1.1-.9-2-2-2zM5 9.37l9-3.46V12H9v7H5V9.37zM19 19h-3v-3h-2v3h-3v-5h8v5z" }),
  "VillaOutlined"
);
const VisibilityOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" }),
  "VisibilityOffOutlined"
);
const VoiceChatIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-6-5.4 3 2.4V7l-3 2.4V7H7v6h7z" }),
  "VoiceChatOutlined"
);
const VoiceOverOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m16.76 5.36-1.68 1.69c.8 1.13.83 2.58.09 3.74l1.7 1.7c1.9-2.02 1.87-4.98-.11-7.13zM20.07 2l-1.63 1.63c2.72 2.97 2.76 7.39.14 10.56l1.64 1.64c3.74-3.89 3.71-9.84-.15-13.83zM9.43 5.04l3.53 3.53c-.2-1.86-1.67-3.33-3.53-3.53zM4.41 2.86 3 4.27l2.62 2.62C5.23 7.5 5 8.22 5 9c0 2.21 1.79 4 4 4 .78 0 1.5-.23 2.11-.62l4.4 4.4C13.74 15.6 10.78 15 9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-.37-.11-.7-.29-1.02L19.73 21l1.41-1.41L4.41 2.86zM3 19c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H3zm6-8c-1.1 0-2-.9-2-2 0-.22.04-.42.11-.62l2.51 2.51c-.2.07-.4.11-.62.11z" }),
  "VoiceOverOffOutlined"
);
const VoicemailIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.5 6C15.46 6 13 8.46 13 11.5c0 1.33.47 2.55 1.26 3.5H9.74c.79-.95 1.26-2.17 1.26-3.5C11 8.46 8.54 6 5.5 6S0 8.46 0 11.5 2.46 17 5.5 17h13c3.04 0 5.5-2.46 5.5-5.5S21.54 6 18.5 6zm-13 9C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8 9 9.57 9 11.5 7.43 15 5.5 15zm13 0c-1.93 0-3.5-1.57-3.5-3.5S16.57 8 18.5 8 22 9.57 22 11.5 20.43 15 18.5 15z" }),
  "VoicemailOutlined"
);
const VolumeDownIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02 0-1.77-1.02-3.29-2.5-4.03zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z" }),
  "VolumeDownOutlined"
);
const VolumeMuteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z" }),
  "VolumeMuteOutlined"
);
const VolumeOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4.34 2.93 2.93 4.34 7.29 8.7 7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06c1.34-.3 2.57-.92 3.61-1.75l2.05 2.05 1.41-1.41L4.34 2.93zM10 15.17 7.83 13H5v-2h2.83l.88-.88L10 11.41v3.76zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8-1.88 1.88L12 7.76zm4.5 8c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z" }),
  "VolumeOffOutlined"
);
const VolumeUpIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z" }),
  "VolumeUpOutlined"
);
const VolunteerActivismIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 13c3.09-2.81 6-5.44 6-7.7C22 3.45 20.55 2 18.7 2c-1.04 0-2.05.49-2.7 1.25C15.34 2.49 14.34 2 13.3 2 11.45 2 10 3.45 10 5.3c0 2.26 2.91 4.89 6 7.7zm-2.7-9c.44 0 .89.21 1.18.55L16 6.34l1.52-1.79c.29-.34.74-.55 1.18-.55.74 0 1.3.56 1.3 1.3 0 1.12-2.04 3.17-4 4.99-1.96-1.82-4-3.88-4-4.99 0-.74.56-1.3 1.3-1.3zM19 16h-2c0-1.2-.75-2.28-1.87-2.7L8.97 11H1v11h6v-1.44l7 1.94 8-2.5v-1c0-1.66-1.34-3-3-3zM3 20v-7h2v7H3zm10.97.41L7 18.48V13h1.61l5.82 2.17c.34.13.57.46.57.83 0 0-1.99-.05-2.3-.15l-2.38-.79-.63 1.9 2.38.79c.51.17 1.04.26 1.58.26H19c.39 0 .74.23.9.56l-5.93 1.84z" }),
  "VolunteerActivismOutlined"
);
const VpnKeyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M22 19h-6v-4h-2.68c-1.14 2.42-3.6 4-6.32 4-3.86 0-7-3.14-7-7s3.14-7 7-7c2.72 0 5.17 1.58 6.32 4H24v6h-2v4zm-4-2h2v-4h2v-2H11.94l-.23-.67C11.01 8.34 9.11 7 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.11 0 4.01-1.34 4.71-3.33l.23-.67H18v4zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" }),
  "VpnKeyOutlined"
);
const VpnKeyOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2.81 2.81 1.39 4.22l2.59 2.59C2.2 7.85 1 9.79 1 12c0 3.31 2.69 6 6 6 2.22 0 4.15-1.21 5.19-3l7.59 7.61 1.41-1.41L2.81 2.81zM7 16c-2.21 0-4-1.79-4-4 0-1.67 1.02-3.1 2.47-3.7l1.71 1.71C7.12 10 7.06 10 7 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.06 0-.12-.01-.18l1.74 1.74C10.22 14.48 9.14 16 7 16zm10-1.83V13h-1.17L17 14.17zM13.83 11H21v2h-2v3l2 2v-3h2V9H11.83l2 2z" }),
  "VpnKeyOffOutlined"
);
const VpnLockIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18.92 12c.04.33.08.66.08 1 0 2.08-.8 3.97-2.1 5.39-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H7v-2h2c.55 0 1-.45 1-1V8h2c1.1 0 2-.9 2-2V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03zM10 20.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 16v1c0 1.1.9 2 2 2v1.93zM22 4v-.5C22 2.12 20.88 1 19.5 1S17 2.12 17 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V4z" }),
  "VpnLockOutlined"
);
const VrpanoIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M21.01 4C20.45 4 17.4 5.5 12 5.5c-5.31 0-8.49-1.49-9.01-1.49-.53 0-.99.44-.99 1.01V19c0 .57.46 1 .99 1 .57 0 3.55-1.5 9.01-1.5 5.42 0 8.44 1.5 9.01 1.5.53 0 .99-.43.99-1V5c0-.57-.46-1-.99-1zM20 17.63c-2.01-.59-4.62-1.13-8-1.13-3.39 0-5.99.54-8 1.13V6.38c2.58.73 5.32 1.12 8 1.12 3.38 0 5.99-.54 8-1.13v11.26z" }, "0"), /* @__PURE__ */ jsx("path", { d: "m9.17 10.99-3.69 4.42c2-.26 4.18-.41 6.52-.41 2.3 0 4.52.15 6.51.4L14 10l-2.83 3.39-2-2.4z" }, "1")],
  "VrpanoOutlined"
);
const WallpaperIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z" }),
  "WallpaperOutlined"
);
const WarehouseIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 8.35V19h-2v-8H6v8H4V8.35l8-3.2 8 3.2zM22 21V7L12 3 2 7v14h6v-8h8v8h6zm-11-2H9v2h2v-2zm2-3h-2v2h2v-2zm2 3h-2v2h2v-2z" }),
  "WarehouseOutlined"
);
const WarningAmberIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" }),
  "WarningAmberOutlined"
);
const WashIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.75 16c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h6.75c.69 0 1.25-.56 1.25-1.25 0-.67-.53-1.2-1.18-1.24L8.87 10l1.48-2.6c.09-.17.14-.34.14-.54 0-.26-.09-.5-.26-.7L9.12 5l-7.18 6.8c-.6.56-.94 1.35-.94 2.17V20c0 1.66 1.34 3 3 3h13.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h7.75c.69 0 1.25-.56 1.25-1.25S20.44 17 19.75 17H12v-1h8.75zM10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3v9zm3.5-12c.83 0 1.5-.67 1.5-1.5 0-.84-1.5-2.5-1.5-2.5S12 6.66 12 7.5c0 .83.67 1.5 1.5 1.5zm5-8S16 3.83 16 5.5C16 6.88 17.12 8 18.5 8S21 6.88 21 5.5C21 3.83 18.5 1 18.5 1zm0 5.5c-.55 0-1-.45-1-1 0-.4.43-1.22 1-2.05.57.83 1 1.65 1 2.05 0 .55-.45 1-1 1z" }),
  "WashOutlined"
);
const WatchIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m14.31 2 .41 2.48C13.87 4.17 12.96 4 12 4c-.95 0-1.87.17-2.71.47L9.7 2h4.61m.41 17.52L14.31 22H9.7l-.41-2.47c.84.3 1.76.47 2.71.47.96 0 1.87-.17 2.72-.48M16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12s-1.19-4.81-3.04-6.27L16 0zm-4 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" }),
  "WatchOutlined"
);
const WatchLaterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" }),
  "WatchLaterOutlined"
);
const WatchOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .64-.13 1.25-.35 1.82l1.5 1.5c.54-.99.85-2.12.85-3.32 0-2.22-1.03-4.19-2.64-5.47L15 2H9l-.96 3.21 2.14 2.14C10.75 7.13 11.36 7 12 7zm-1.51-3h3.02l.38 1.27c-.55-.16-1.97-.51-3.78 0L10.49 4zM2.81 2.81 1.39 4.22l4.46 4.46C5.31 9.67 5 10.8 5 12c0 2.22 1.03 4.19 2.64 5.47L9 22h6l.96-3.21 3.82 3.82 1.41-1.41L2.81 2.81zM13.51 20h-3.02l-.38-1.27c.55.15 1.97.51 3.78 0L13.51 20zM12 17c-2.76 0-5-2.24-5-5 0-.64.13-1.25.35-1.82l6.47 6.47c-.57.22-1.18.35-1.82.35z" }),
  "WatchOffOutlined"
);
const WaterIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21.98 14H22h-.02zM5.35 13c1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.4.98 3.31 1v-2c-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1zm13.32 2c-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.1 1-3.34 1-1.24 0-1.38-1-3.33-1-1.95 0-2.1 1-3.34 1v2c1.95 0 2.11-1 3.34-1 1.24 0 1.38 1 3.33 1 1.95 0 2.1-1 3.34-1 1.19 0 1.42 1 3.33 1 1.94 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1v-2c-1.24 0-1.38-1-3.33-1zM5.35 9c1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.4.98 3.31 1V8c-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1C3.38 7 3.24 8 2 8v2c1.9 0 2.17-1 3.35-1z" }),
  "WaterOutlined"
);
const WaterDamageIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 3 2 12h3v8h14v-8h3L12 3zM7 18v-7.81l5-4.5 5 4.5V18H7zm7-4c0 1.1-.9 2-2 2s-2-.9-2-2 2-4 2-4 2 2.9 2 4z" }),
  "WaterDamageOutlined"
);
const WaterfallChartIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 4h3v16h-3V4zM3 13h3v7H3v-7zm11-9h3v3h-3V4zm-4 1h3v4h-3V5zm-3 5h3v4H7v-4z" }),
  "WaterfallChartOutlined"
);
const WavesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58zM17 8.09c-1.35 0-2.2.43-2.95.8-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V9.49c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8z" }),
  "WavesOutlined"
);
const WbAutoIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m7 7-3.2 9h1.9l.7-2h3.2l.7 2h1.9L9 7H7zm-.15 5.65L8 9l1.15 3.65h-2.3zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76l-.01.01C12.76 5.18 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c2.96 0 5.55-1.61 6.93-4 .03-.06.05-.12.08-.18.05-.08.09-.17.14-.25l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-8.63 7.67C12.38 16.64 10.35 18 8 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6c0 .96-.23 1.86-.63 2.67z" }),
  "WbAutoOutlined"
);
const WbCloudyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5 1.52.11c1.56.11 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.95 6 12.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04 2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4z" }),
  "WbCloudyOutlined"
);
const WbIncandescentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m3.55 19.09 1.41 1.41 1.79-1.8-1.41-1.41zM11 20h2v3h-2zM1 11h3v2H1zm12-6.95v3.96l1 .58c1.24.72 2 2.04 2 3.46 0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.42.77-2.74 2-3.46l1-.58V4.05h2m2-2H9v4.81C7.21 7.9 6 9.83 6 12.05c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19V2.05zM20 11h3v2h-3zm-2.76 7.71 1.79 1.8 1.41-1.41-1.8-1.79z" }),
  "WbIncandescentOutlined"
);
const WbIridescentIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5 15h14V9H5v6zm2-4h10v2H7v-2zm4-10h2v3h-2zm9.46 4.01L19.04 3.6l-1.79 1.79 1.41 1.41zM11 20h2v3h-2zm6.24-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM4.96 3.595l1.788 1.79L5.34 6.79 3.553 5.003zM3.55 19.08l1.41 1.42 1.79-1.8-1.41-1.41z" }),
  "WbIridescentOutlined"
);
const WbShadeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 12v2.5l5.5 5.5H22l-8-8zm0 8h3l-3-3v3zM8 4l-6 6h2v10h8V10h2L8 4zm1 10H7v-4h2v4z" }),
  "WbShadeOutlined"
);
const WbSunnyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495 1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96 1.41 1.41 1.79-1.8-1.41-1.41z" }),
  "WbSunnyOutlined"
);
const WbTwilightIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m16.9542 8.6615 2.1205-2.122 1.4147 1.4137-2.1205 2.122zM2 18h20v2H2zm9-14h2v3h-2zM3.5426 7.9248l1.4142-1.4142L7.078 8.632l-1.4142 1.4142zM5 16h14c0-3.87-3.13-7-7-7s-7 3.13-7 7z" }),
  "WbTwilightOutlined"
);
const WcIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z" }),
  "WcOutlined"
);
const WebIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 9h10.5v3.5H4V9zm0 5.5h10.5V18H4v-3.5zM20 18h-3.5V9H20v9z" }),
  "WebOutlined"
);
const WebAssetIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z" }),
  "WebAssetOutlined"
);
const WebAssetOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6.83 4H20c1.11 0 2 .9 2 2v12c0 .34-.09.66-.23.94L20 17.17V8h-9.17l-4-4zm13.66 19.31L17.17 20H4c-1.11 0-2-.9-2-2V6c0-.34.08-.66.23-.94L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM15.17 18l-10-10H4v10h11.17z" }),
  "WebAssetOffOutlined"
);
const WebhookIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 15h5.88c.27-.31.67-.5 1.12-.5.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.44 0-.84-.19-1.12-.5H11.9c-.46 2.28-2.48 4-4.9 4-2.76 0-5-2.24-5-5 0-2.42 1.72-4.44 4-4.9v2.07c-1.16.41-2 1.53-2 2.83 0 1.65 1.35 3 3 3s3-1.35 3-3v-1zm2.5-11c1.65 0 3 1.35 3 3h2c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.43.6 2.71 1.55 3.62l-2.35 3.9c-.68.14-1.2.75-1.2 1.48 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.16-.02-.31-.07-.45l3.38-5.63C10.49 9.61 9.5 8.42 9.5 7c0-1.65 1.35-3 3-3zm4.5 9c-.64 0-1.23.2-1.72.54l-3.05-5.07C11.53 8.35 11 7.74 11 7c0-.83.67-1.5 1.5-1.5S14 6.17 14 7c0 .15-.02.29-.06.43l2.19 3.65c.28-.05.57-.08.87-.08 2.76 0 5 2.24 5 5s-2.24 5-5 5c-1.85 0-3.47-1.01-4.33-2.5h2.67c.48.32 1.05.5 1.66.5 1.65 0 3-1.35 3-3s-1.35-3-3-3z" }),
  "WebhookOutlined"
);
const WeekendIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M21 9V7c0-1.65-1.35-3-3-3H6C4.35 4 3 5.35 3 7v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3zM5 7c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H6v-2c0-.88-.39-1.67-1-2.22V7zm17 10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h16v-4c0-.55.45-1 1-1s1 .45 1 1v5z" }),
  "WeekendOutlined"
);
const WestIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z" }),
  "WestOutlined"
);
const WhatsappIcon$1 = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19.05 4.91C17.18 3.03 14.69 2 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42 1.56 1.56 2.41 3.63 2.41 5.83.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z" }),
  "WhatsappOutlined"
);
const WhatshotIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.57 13.16c-1.36.28-2.17 1.16-2.17 2.41 0 1.34 1.11 2.42 2.49 2.42 2.05 0 3.71-1.66 3.71-3.71 0-1.07-.15-2.12-.46-3.12-.79 1.07-2.2 1.72-3.57 2zM13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM12 20c-3.31 0-6-2.69-6-6 0-1.53.3-3.04.86-4.43 1.01 1.01 2.41 1.63 3.97 1.63 2.66 0 4.75-1.83 5.28-4.43C17.34 8.97 18 11.44 18 14c0 3.31-2.69 6-6 6z" }),
  "WhatshotOutlined"
);
const WheelchairPickupIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4.5 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm5.5 6.95V9c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6h2v7h3.5v-.11c-1.24-1.26-2-2.99-2-4.89 0-2.58 1.41-4.84 3.5-6.05zM16.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3c0-1.11.61-2.06 1.5-2.58v-2.16c-2.02.64-3.5 2.51-3.5 4.74 0 2.76 2.24 5 5 5s5-2.24 5-5h-2zm3.04-3H15V8h-2v8h5.46l2.47 3.71 1.66-1.11-3.05-4.6z" }),
  "WheelchairPickupOutlined"
);
const WhereToVoteIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 1C7.59 1 4 4.59 4 9c0 5.57 6.96 13.34 7.26 13.67l.74.82.74-.82C13.04 22.34 20 14.57 20 9c0-4.41-3.59-8-8-8zm0 19.47C9.82 17.86 6 12.54 6 9c0-3.31 2.69-6 6-6s6 2.69 6 6c0 3.83-4.25 9.36-6 11.47zm-1.53-9.3L8.71 9.4l-1.42 1.42L10.47 14l6.01-6.01-1.41-1.42z" }),
  "WhereToVoteOutlined"
);
const WidgetsIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m16.66 4.52 2.83 2.83-2.83 2.83-2.83-2.83 2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z" }),
  "WidgetsOutlined"
);
const WifiIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m1 9 2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8 3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" }),
  "WifiOutlined"
);
const WifiCallingIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M20 15.51c-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1zM5.03 5h1.5c.07.89.22 1.76.46 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zM19 18.97c-1.32-.09-2.59-.35-3.8-.75l1.19-1.19c.85.24 1.72.39 2.6.45v1.49z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M22 4.95C21.79 4.78 19.67 3 16.5 3c-3.18 0-5.29 1.78-5.5 1.95L16.5 12 22 4.95z" }, "1")],
  "WifiCallingOutlined"
);
const WifiCalling3Icon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M16.49 4.5c1.79 0 3.42.73 4.59 1.91l1.06-1.06C20.7 3.9 18.7 3 16.49 3c-2.21 0-4.21.9-5.66 2.34l1.06 1.06c1.19-1.17 2.81-1.9 4.6-1.9z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M16.49 6c-1.38 0-2.63.56-3.54 1.46l1.06 1.06c.63-.63 1.51-1.03 2.47-1.03s1.84.39 2.47 1.03l1.06-1.06C19.12 6.56 17.87 6 16.49 6zm0 3c-.55 0-1.05.22-1.41.59L16.49 11l1.41-1.41c-.36-.37-.86-.59-1.41-.59z" }, "1"), /* @__PURE__ */ jsx("path", { d: "m20.2 14.87-3.67-.73c-.5-.1-.83.2-.9.27l-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c.23-.24.33-.57.27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.43.55.03 1.03-.43 1.03-1v-4.15c0-.48-.34-.89-.8-.98zM5.1 5h2.23l.47 2.35L6.17 9c-.54-1.3-.9-2.63-1.07-4zM19 18.9c-1.37-.18-2.7-.53-4-1.07l1.65-1.63 2.35.47v2.23z" }, "2")],
  "WifiCalling3Outlined"
);
const WifiChannelIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M16 3c-2.51 0-3.77 5.61-4.4 10.57C10.79 10.66 9.61 8 8 8 4.43 8 3 21 3 21h2.01c.61-5.27 2-9.82 2.99-10.87.98 1.05 2.38 5.61 2.99 10.87H13c.5-2.53 2-6 3-6s2.5 3.53 3 6h2s-.5-18-5-18zm0 10c-.99 0-1.82.62-2.5 1.5.57-4.77 1.54-8.62 2.5-9.44.97.81 1.91 4.67 2.49 9.43C17.81 13.62 16.98 13 16 13z" }),
  "WifiChannelOutlined"
);
const WifiFindIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M12 6c4.14 0 7.88 1.68 10.59 4.39L24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21l1.41-1.42L2.93 9.08C5.45 7.16 8.59 6 12 6z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M21 14c0-2.24-1.76-4-4-4s-4 1.76-4 4 1.76 4 4 4c.75 0 1.44-.21 2.03-.56L21.59 20 23 18.59l-2.56-2.56c.35-.59.56-1.28.56-2.03zm-4 2c-1.12 0-2-.88-2-2s.88-2 2-2 2 .88 2 2-.88 2-2 2z" }, "1")],
  "WifiFindOutlined"
);
const WifiLockIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M21.98 11 24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l6.35 6.36L12 21l3.05-3.05V15c0-.45.09-.88.23-1.29.54-1.57 2.01-2.71 3.77-2.71h2.93z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M22 16v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z" }, "1")],
  "WifiLockOutlined"
);
const WifiOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m21 11 2-2c-3.73-3.73-8.87-5.15-13.7-4.31l2.58 2.58c3.3-.02 6.61 1.22 9.12 3.73zm-2 2c-1.08-1.08-2.36-1.85-3.72-2.33l3.02 3.02.7-.69zM9 17l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zM3.41 1.64 2 3.05 5.05 6.1C3.59 6.83 2.22 7.79 1 9l2 2c1.23-1.23 2.65-2.16 4.17-2.78l2.24 2.24C7.79 10.89 6.27 11.74 5 13l2 2c1.35-1.35 3.11-2.04 4.89-2.06l7.08 7.08 1.41-1.41L3.41 1.64z" }),
  "WifiOffOutlined"
);
const WifiPasswordIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m24 8.98-2.12 2.13C19.35 8.57 15.85 7 12 7s-7.35 1.57-9.88 4.11L0 8.98C3.07 5.9 7.31 4 12 4s8.93 1.9 12 4.98zM4.24 13.22l2.12 2.12C7.8 13.9 9.8 13 12 13c2.2 0 4.2.9 5.64 2.35l2.12-2.12C17.78 11.23 15.03 10 12 10c-3.03 0-5.78 1.23-7.76 3.22zM24 20v3c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1v-1c0-1.1.9-2 2-2s2 .9 2 2v1c.55 0 1 .45 1 1zm-2-2c0-.55-.45-1-1-1s-1 .45-1 1v1h2v-1zm-10-2c-1.38 0-2.63.56-3.53 1.46L12 21l3.53-3.54c-.9-.9-2.15-1.46-3.53-1.46z" }),
  "WifiPasswordOutlined"
);
const WifiProtectedSetupIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M16.71 5.29 19 3h-8v8l2.3-2.3c1.97 1.46 3.25 3.78 3.25 6.42 0 1.31-.32 2.54-.88 3.63 2.33-1.52 3.88-4.14 3.88-7.13 0-2.52-1.11-4.77-2.84-6.33z" }, "0"), /* @__PURE__ */ jsx("path", { d: "M7.46 8.88c0-1.31.32-2.54.88-3.63C6 6.77 4.46 9.39 4.46 12.38c0 2.52 1.1 4.77 2.84 6.33L5 21h8v-8l-2.3 2.3c-1.96-1.46-3.24-3.78-3.24-6.42z" }, "1")],
  "WifiProtectedSetupOutlined"
);
const WifiTetheringIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z" }),
  "WifiTetheringOutlined"
);
const WifiTetheringErrorIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 7c-3.31 0-6 2.69-6 6 0 1.66.68 3.15 1.76 4.24l1.42-1.42C8.45 15.1 8 14.11 8 13c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.11-.45 2.1-1.18 2.82l1.42 1.42C17.32 16.15 18 14.66 18 13c0-3.31-2.69-6-6-6zm0-4C6.48 3 2 7.48 2 13c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42C4.9 17.21 4 15.21 4 13c0-4.42 3.58-8 8-8 2.53 0 4.78 1.17 6.24 3h2.42C18.93 5.01 15.7 3 12 3zm0 8c-1.1 0-2 .9-2 2 0 .55.23 1.05.59 1.41.36.36.86.59 1.41.59s1.05-.23 1.41-.59c.36-.36.59-.86.59-1.41 0-1.1-.9-2-2-2zm8-1h2v6h-2v-6zm0 8h2v2h-2v-2z" }),
  "WifiTetheringErrorOutlined"
);
const WifiTetheringErrorRoundedIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 7c-3.31 0-6 2.69-6 6 0 1.66.68 3.15 1.76 4.24l1.42-1.42C8.45 15.1 8 14.11 8 13c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.11-.45 2.1-1.18 2.82l1.42 1.42C17.32 16.15 18 14.66 18 13c0-3.31-2.69-6-6-6zm0-4C6.48 3 2 7.48 2 13c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42C4.9 17.21 4 15.21 4 13c0-4.42 3.58-8 8-8 2.53 0 4.78 1.17 6.24 3h2.42C18.93 5.01 15.7 3 12 3zm0 8c-1.1 0-2 .9-2 2 0 .55.23 1.05.59 1.41.36.36.86.59 1.41.59s1.05-.23 1.41-.59c.36-.36.59-.86.59-1.41 0-1.1-.9-2-2-2zm8-1h2v6h-2v-6zm0 8h2v2h-2v-2z" }),
  "WifiTetheringErrorRoundedOutlined"
);
const WifiTetheringOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M2.81 2.81 1.39 4.22l2.69 2.69C2.78 8.6 2 10.71 2 13c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42C4.9 17.21 4 15.21 4 13c0-1.75.57-3.35 1.51-4.66l1.43 1.43C6.35 10.7 6 11.81 6 13c0 1.66.68 3.15 1.76 4.24l1.42-1.42C8.45 15.1 8 14.11 8 13c0-.63.15-1.23.41-1.76l1.61 1.61c0 .05-.02.1-.02.15 0 .55.23 1.05.59 1.41.36.36.86.59 1.41.59.05 0 .1-.01.16-.02l7.62 7.62 1.41-1.41L2.81 2.81zM17.7 14.87c.19-.59.3-1.22.3-1.87 0-3.31-2.69-6-6-6-.65 0-1.28.1-1.87.3l1.71 1.71C11.89 9 11.95 9 12 9c2.21 0 4 1.79 4 4 0 .05 0 .11-.01.16l1.71 1.71zM12 5c4.42 0 8 3.58 8 8 0 1.22-.27 2.37-.77 3.4l1.49 1.49C21.53 16.45 22 14.78 22 13c0-5.52-4.48-10-10-10-1.78 0-3.44.46-4.89 1.28l1.48 1.48C9.63 5.27 10.78 5 12 5z" }),
  "WifiTetheringOffOutlined"
);
const WindowIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 9h-7V4h7v7zm-9-7v7H4V4h7zm-7 9h7v7H4v-7zm9 7v-7h7v7h-7z" }),
  "WindowOutlined"
);
const WineBarIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3H6zm6 10c-1.86 0-3.41-1.28-3.86-3h7.72c-.45 1.72-2 3-3.86 3zm4-5H8V5h8v3z" }),
  "WineBarOutlined"
);
const WomanIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M13.94 8.31C13.62 7.52 12.85 7 12 7s-1.62.52-1.94 1.31L7 16h3v6h4v-6h3l-3.06-7.69z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "4", r: "2" }, "1")],
  "WomanOutlined"
);
const WorkIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" }),
  "WorkOutlined"
);
const WorkOffIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M10 4h4v2h-3.6l2 2H20v7.6l2 2V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-.99 0-1.8.7-1.96 1.64L10 5.6V4zM3.4 1.84 1.99 3.25 4.74 6H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h15.74l2 2 1.41-1.41L3.4 1.84zM4 19V8h2.74l11 11H4z" }),
  "WorkOffOutlined"
);
const WorkOutlineIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" }),
  "WorkOutlineOutlined"
);
const WorkspacePremiumIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9.68 13.69 12 11.93l2.31 1.76-.88-2.85L15.75 9h-2.84L12 6.19 11.09 9H8.25l2.31 1.84-.88 2.85zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2 6 2v-7.72c1.24-1.41 2-3.25 2-5.28zm-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 15-4 1.02v-3.1c1.18.68 2.54 1.08 4 1.08s2.82-.4 4-1.08v3.1L12 19z" }),
  "WorkspacePremiumOutlined"
);
const WorkspacesIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M6 15c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm6-8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm6 12c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" }),
  "WorkspacesOutlined"
);
const WrapTextIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z" }),
  "WrapTextOutlined"
);
const WrongLocationIcon = createSvgIcon(
  [/* @__PURE__ */ jsx("path", { d: "M18 11v.2c0 2.34-1.95 5.44-6 9.14-4.05-3.7-6-6.79-6-9.14C6 7.57 8.65 5 12 5c.34 0 .68.03 1 .08V3.06c-.33-.04-.66-.06-1-.06-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8V11h-2z" }, "0"), /* @__PURE__ */ jsx("circle", { cx: "12", cy: "11", r: "2" }, "1"), /* @__PURE__ */ jsx("path", { d: "m22.54 2.88-1.42-1.42L19 3.59l-2.12-2.13-1.42 1.42L17.59 5l-2.13 2.12 1.42 1.42L19 6.41l2.12 2.13 1.42-1.42L20.41 5z" }, "2")],
  "WrongLocationOutlined"
);
const WysiwygIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V7h14v12zm-2-7H7v-2h10v2zm-4 4H7v-2h6v2z" }),
  "WysiwygOutlined"
);
const YardIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M18 13c-3.31 0-6 2.69-6 6 3.31 0 6-2.69 6-6zM6 13c0 3.31 2.69 6 6 6 0-3.31-2.69-6-6-6zm2-1.97c0 .86.7 1.56 1.56 1.56.33 0 .63-.1.89-.28l-.01.12c0 .86.7 1.56 1.56 1.56s1.56-.7 1.56-1.56l-.01-.12c.25.17.56.28.89.28.86 0 1.56-.7 1.56-1.56 0-.62-.37-1.16-.89-1.41.52-.24.89-.78.89-1.4 0-.86-.7-1.56-1.56-1.56-.33 0-.63.1-.89.28l.01-.12c0-.86-.7-1.56-1.56-1.56s-1.56.7-1.56 1.56l.01.12c-.25-.18-.56-.28-.89-.28-.86 0-1.56.7-1.56 1.56 0 .62.37 1.16.89 1.41-.52.24-.89.78-.89 1.4zm4-2.97c.86 0 1.56.7 1.56 1.56s-.7 1.56-1.56 1.56-1.56-.7-1.56-1.56.7-1.56 1.56-1.56zM20 4v16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" }),
  "YardOutlined"
);
const YoutubeSearchedForIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z" }),
  "YoutubeSearchedForOutlined"
);
const ZoomInIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z" }),
  "ZoomInOutlined"
);
const ZoomInMapIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M9 9V3H7v2.59L3.91 2.5 2.5 3.91 5.59 7H3v2h6zm12 0V7h-2.59l3.09-3.09-1.41-1.41L17 5.59V3h-2v6h6zM3 15v2h2.59L2.5 20.09l1.41 1.41L7 18.41V21h2v-6H3zm12 0v6h2v-2.59l3.09 3.09 1.41-1.41L18.41 17H21v-2h-6z" }),
  "ZoomInMapOutlined"
);
const ZoomOutIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" }),
  "ZoomOutOutlined"
);
const ZoomOutMapIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "m15 3 2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z" }),
  "ZoomOutMapOutlined"
);
const Icons = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbcIcon,
  AcUnitIcon,
  AccessAlarmIcon,
  AccessAlarmsIcon,
  AccessTimeFilledIcon,
  AccessTimeIcon,
  AccessibilityIcon,
  AccessibilityNewIcon,
  AccessibleForwardIcon,
  AccessibleIcon,
  AccountBalanceIcon,
  AccountBalanceWalletIcon,
  AccountBoxIcon,
  AccountCircleIcon,
  AccountTreeIcon,
  AdUnitsIcon,
  AdbIcon,
  AddAPhotoIcon,
  AddAlarmIcon,
  AddAlertIcon,
  AddBoxIcon,
  AddBusinessIcon,
  AddCardIcon,
  AddCircleIcon,
  AddCircleOutlineIcon,
  AddCommentIcon,
  AddIcCallIcon,
  AddIcon,
  AddLinkIcon,
  AddLocationAltIcon,
  AddLocationIcon,
  AddModeratorIcon,
  AddPhotoAlternateIcon,
  AddReactionIcon,
  AddRoadIcon,
  AddShoppingCartIcon,
  AddTaskIcon,
  AddToDriveIcon,
  AddToHomeScreenIcon,
  AddToPhotosIcon,
  AddToQueueIcon,
  AddchartIcon,
  AdfScannerIcon,
  AdjustIcon,
  AdminPanelSettingsIcon,
  AgricultureIcon,
  AirIcon,
  AirlineSeatFlatAngledIcon,
  AirlineSeatFlatIcon,
  AirlineSeatIndividualSuiteIcon,
  AirlineSeatLegroomExtraIcon,
  AirlineSeatLegroomNormalIcon,
  AirlineSeatLegroomReducedIcon,
  AirlineSeatReclineExtraIcon,
  AirlineSeatReclineNormalIcon,
  AirlineStopsIcon,
  AirlinesIcon,
  AirplaneTicketIcon,
  AirplanemodeActiveIcon,
  AirplanemodeInactiveIcon,
  AirplayIcon,
  AirportShuttleIcon,
  AlarmAddIcon,
  AlarmIcon,
  AlarmOffIcon,
  AlarmOnIcon,
  AlbumIcon,
  AlignHorizontalCenterIcon,
  AlignHorizontalLeftIcon,
  AlignHorizontalRightIcon,
  AlignVerticalBottomIcon,
  AlignVerticalCenterIcon,
  AlignVerticalTopIcon,
  AllInboxIcon,
  AllInclusiveIcon,
  AllOutIcon,
  AltRouteIcon,
  AlternateEmailIcon,
  AnalyticsIcon,
  AnchorIcon,
  AndroidIcon,
  AnimationIcon,
  AnnouncementIcon,
  AodIcon,
  ApartmentIcon,
  ApiIcon,
  AppBlockingIcon,
  AppRegistrationIcon,
  AppSettingsAltIcon,
  AppShortcutIcon,
  ApprovalIcon,
  AppsIcon,
  AppsOutageIcon,
  ArchitectureIcon,
  ArchiveIcon,
  ArrowBackIcon,
  ArrowBackIosIcon,
  ArrowBackIosNewIcon,
  ArrowCircleDownIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowCircleUpIcon,
  ArrowDownwardIcon,
  ArrowDropDownCircleIcon,
  ArrowDropDownIcon,
  ArrowDropUpIcon,
  ArrowForwardIcon,
  ArrowForwardIosIcon,
  ArrowLeftIcon,
  ArrowRightAltIcon,
  ArrowRightIcon,
  ArrowUpwardIcon,
  ArtTrackIcon,
  ArticleIcon,
  AspectRatioIcon,
  AssessmentIcon,
  AssignmentIcon,
  AssignmentIndIcon,
  AssignmentLateIcon,
  AssignmentReturnIcon,
  AssignmentReturnedIcon,
  AssignmentTurnedInIcon,
  AssistantDirectionIcon,
  AssistantIcon,
  AssistantPhotoIcon,
  AssuredWorkloadIcon,
  AtmIcon,
  AttachEmailIcon,
  AttachFileIcon,
  AttachMoneyIcon,
  AttachmentIcon,
  AttractionsIcon,
  AttributionIcon,
  AudioFileIcon,
  AudiotrackIcon,
  AutoAwesomeIcon,
  AutoAwesomeMosaicIcon,
  AutoAwesomeMotionIcon,
  AutoDeleteIcon,
  AutoFixHighIcon,
  AutoFixNormalIcon,
  AutoFixOffIcon,
  AutoGraphIcon,
  AutoStoriesIcon,
  AutofpsSelectIcon,
  AutorenewIcon,
  AvTimerIcon,
  BabyChangingStationIcon,
  BackpackIcon,
  BackspaceIcon,
  BackupIcon,
  BackupTableIcon,
  BadgeIcon,
  BakeryDiningIcon,
  BalanceIcon,
  BalconyIcon,
  BallotIcon,
  BarChartIcon,
  BatchPredictionIcon,
  BathroomIcon,
  BathtubIcon,
  Battery20Icon,
  Battery30Icon,
  Battery50Icon,
  Battery60Icon,
  Battery80Icon,
  Battery90Icon,
  BatteryAlertIcon,
  BatteryCharging20Icon,
  BatteryCharging30Icon,
  BatteryCharging50Icon,
  BatteryCharging60Icon,
  BatteryCharging80Icon,
  BatteryCharging90Icon,
  BatteryChargingFullIcon,
  BatteryFullIcon,
  BatterySaverIcon,
  BatteryStdIcon,
  BatteryUnknownIcon,
  BeachAccessIcon,
  BedIcon,
  BedroomBabyIcon,
  BedroomChildIcon,
  BedroomParentIcon,
  BedtimeIcon,
  BedtimeOffIcon,
  BeenhereIcon,
  BentoIcon,
  BikeScooterIcon,
  BiotechIcon,
  BlenderIcon,
  BlockIcon,
  BloodtypeIcon,
  BluetoothAudioIcon,
  BluetoothConnectedIcon,
  BluetoothDisabledIcon,
  BluetoothDriveIcon,
  BluetoothIcon,
  BluetoothSearchingIcon,
  BlurCircularIcon,
  BlurLinearIcon,
  BlurOffIcon,
  BlurOnIcon,
  BoltIcon,
  BookIcon,
  BookOnlineIcon,
  BookmarkAddIcon,
  BookmarkAddedIcon,
  BookmarkBorderIcon,
  BookmarkIcon,
  BookmarkRemoveIcon,
  BookmarksIcon,
  BorderAllIcon,
  BorderBottomIcon,
  BorderClearIcon,
  BorderColorIcon,
  BorderHorizontalIcon,
  BorderInnerIcon,
  BorderLeftIcon,
  BorderOuterIcon,
  BorderRightIcon,
  BorderStyleIcon,
  BorderTopIcon,
  BorderVerticalIcon,
  BoyIcon,
  BrandingWatermarkIcon,
  BreakfastDiningIcon,
  Brightness1Icon,
  Brightness2Icon,
  Brightness3Icon,
  Brightness4Icon,
  Brightness5Icon,
  Brightness6Icon,
  Brightness7Icon,
  BrightnessAutoIcon,
  BrightnessHighIcon,
  BrightnessLowIcon,
  BrightnessMediumIcon,
  BrokenImageIcon,
  BrowserNotSupportedIcon,
  BrowserUpdatedIcon,
  BrunchDiningIcon,
  BrushIcon,
  BubbleChartIcon,
  BugReportIcon,
  BuildCircleIcon,
  BuildIcon,
  BungalowIcon,
  BurstModeIcon,
  BusAlertIcon,
  BusinessCenterIcon,
  BusinessIcon,
  CabinIcon,
  CableIcon,
  CachedIcon,
  CakeIcon,
  CalculateIcon,
  CalendarTodayIcon,
  CalendarViewDayIcon,
  CalendarViewMonthIcon,
  CalendarViewWeekIcon,
  CallEndIcon,
  CallIcon,
  CallMadeIcon,
  CallMergeIcon,
  CallMissedIcon,
  CallMissedOutgoingIcon,
  CallReceivedIcon,
  CallSplitIcon,
  CallToActionIcon,
  CameraAltIcon,
  CameraEnhanceIcon,
  CameraFrontIcon,
  CameraIcon,
  CameraIndoorIcon,
  CameraOutdoorIcon,
  CameraRearIcon,
  CameraRollIcon,
  CameraswitchIcon,
  CampaignIcon,
  CancelIcon,
  CancelPresentationIcon,
  CancelScheduleSendIcon,
  CandlestickChartIcon,
  CarRentalIcon,
  CarRepairIcon,
  CardGiftcardIcon,
  CardMembershipIcon,
  CardTravelIcon,
  CarpenterIcon,
  CasesIcon,
  CasinoIcon,
  CastConnectedIcon,
  CastForEducationIcon,
  CastIcon,
  CastleIcon,
  CatchingPokemonIcon,
  CategoryIcon,
  CelebrationIcon,
  CellTowerIcon,
  CellWifiIcon,
  CenterFocusStrongIcon,
  CenterFocusWeakIcon,
  ChairAltIcon,
  ChairIcon,
  ChaletIcon,
  ChangeCircleIcon,
  ChangeHistoryIcon,
  ChargingStationIcon,
  ChatBubbleIcon,
  ChatBubbleOutlineIcon,
  ChatIcon,
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
  CheckCircleIcon,
  CheckCircleOutlineIcon,
  CheckIcon,
  CheckroomIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChildCareIcon,
  ChildFriendlyIcon,
  ChromeReaderModeIcon,
  ChurchIcon,
  CircleIcon,
  CircleNotificationsIcon,
  ClassIcon,
  CleanHandsIcon,
  CleaningServicesIcon,
  ClearAllIcon,
  ClearIcon,
  CloseFullscreenIcon,
  CloseIcon,
  ClosedCaptionDisabledIcon,
  ClosedCaptionIcon,
  ClosedCaptionOffIcon,
  CloudCircleIcon,
  CloudDoneIcon,
  CloudDownloadIcon,
  CloudIcon,
  CloudOffIcon,
  CloudQueueIcon,
  CloudSyncIcon,
  CloudUploadIcon,
  Co2Icon,
  CoPresentIcon,
  CodeIcon,
  CodeOffIcon,
  CoffeeIcon,
  CoffeeMakerIcon,
  CollectionsBookmarkIcon,
  CollectionsIcon,
  ColorLensIcon,
  ColorizeIcon,
  CommentBankIcon,
  CommentIcon,
  CommentsDisabledIcon,
  CommitIcon,
  CommuteIcon,
  CompareArrowsIcon,
  CompareIcon,
  CompassCalibrationIcon,
  CompressIcon,
  ComputerIcon,
  ConfirmationNumberIcon,
  ConnectWithoutContactIcon,
  ConnectedTvIcon,
  ConnectingAirportsIcon,
  ConstructionIcon,
  ContactMailIcon,
  ContactPageIcon,
  ContactPhoneIcon,
  ContactSupportIcon,
  ContactlessIcon,
  ContactsIcon,
  ContentCopyIcon,
  ContentCutIcon,
  ContentPasteGoIcon,
  ContentPasteIcon,
  ContentPasteOffIcon,
  ContentPasteSearchIcon,
  ContrastIcon,
  ControlCameraIcon,
  ControlPointDuplicateIcon,
  ControlPointIcon,
  CookieIcon,
  CopyAllIcon,
  CopyrightIcon,
  CoronavirusIcon,
  CorporateFareIcon,
  CottageIcon,
  CountertopsIcon,
  CreateIcon,
  CreateNewFolderIcon,
  CreditCardIcon,
  CreditCardOffIcon,
  CreditScoreIcon,
  CribIcon,
  Crop169Icon,
  Crop32Icon,
  Crop54Icon,
  Crop75Icon,
  CropDinIcon,
  CropFreeIcon,
  CropIcon,
  CropLandscapeIcon,
  CropOriginalIcon,
  CropPortraitIcon,
  CropRotateIcon,
  CropSquareIcon,
  CssIcon,
  CurrencyExchangeIcon,
  CurrencyFrancIcon,
  CurrencyLiraIcon,
  CurrencyPoundIcon,
  CurrencyRubleIcon,
  CurrencyRupeeIcon,
  CurrencyYenIcon,
  CurrencyYuanIcon,
  DangerousIcon,
  DarkModeIcon,
  DashboardCustomizeIcon,
  DashboardIcon,
  DataArrayIcon,
  DataObjectIcon,
  DataSaverOffIcon,
  DataSaverOnIcon,
  DataThresholdingIcon,
  DataUsageIcon,
  DateRangeIcon,
  DeblurIcon,
  DeckIcon,
  DehazeIcon,
  DeleteForeverIcon,
  DeleteIcon,
  DeleteOutlineIcon,
  DeleteSweepIcon,
  DeliveryDiningIcon,
  DensityLargeIcon,
  DensityMediumIcon,
  DensitySmallIcon,
  DepartureBoardIcon,
  DescriptionIcon,
  DeselectIcon,
  DesignServicesIcon,
  DesktopAccessDisabledIcon,
  DesktopMacIcon,
  DesktopWindowsIcon,
  DetailsIcon,
  DeveloperBoardIcon,
  DeveloperBoardOffIcon,
  DeveloperModeIcon,
  DeviceHubIcon,
  DeviceThermostatIcon,
  DeviceUnknownIcon,
  DevicesIcon,
  DevicesOtherIcon,
  DialerSipIcon,
  DialpadIcon,
  DiamondIcon,
  DifferenceIcon,
  DiningIcon,
  DinnerDiningIcon,
  DirectionsBikeIcon,
  DirectionsBoatFilledIcon,
  DirectionsBoatIcon,
  DirectionsBusFilledIcon,
  DirectionsBusIcon,
  DirectionsCarFilledIcon,
  DirectionsCarIcon,
  DirectionsIcon,
  DirectionsOffIcon,
  DirectionsRailwayFilledIcon,
  DirectionsRailwayIcon,
  DirectionsRunIcon,
  DirectionsSubwayFilledIcon,
  DirectionsSubwayIcon,
  DirectionsTransitFilledIcon,
  DirectionsTransitIcon,
  DirectionsWalkIcon,
  DirtyLensIcon,
  DisabledByDefaultIcon,
  DiscFullIcon,
  DisplaySettingsIcon,
  DnsIcon,
  DoDisturbAltIcon,
  DoDisturbIcon,
  DoDisturbOffIcon,
  DoDisturbOnIcon,
  DoNotDisturbAltIcon,
  DoNotDisturbIcon,
  DoNotDisturbOffIcon,
  DoNotDisturbOnIcon,
  DoNotDisturbOnTotalSilenceIcon,
  DoNotStepIcon,
  DoNotTouchIcon,
  DockIcon,
  DocumentScannerIcon,
  DomainAddIcon,
  DomainDisabledIcon,
  DomainIcon,
  DomainVerificationIcon,
  DoneAllIcon,
  DoneIcon,
  DoneOutlineIcon,
  DonutLargeIcon,
  DonutSmallIcon,
  DoorBackIcon,
  DoorFrontIcon,
  DoorSlidingIcon,
  DoorbellIcon,
  DoubleArrowIcon,
  DownhillSkiingIcon,
  DownloadDoneIcon,
  DownloadForOfflineIcon,
  DownloadIcon,
  DownloadingIcon,
  DraftsIcon,
  DragHandleIcon,
  DragIndicatorIcon,
  DriveEtaIcon,
  DriveFileMoveIcon,
  DriveFileRenameOutlineIcon,
  DriveFolderUploadIcon,
  DryCleaningIcon,
  DryIcon,
  DuoIcon,
  DvrIcon,
  DynamicFeedIcon,
  DynamicFormIcon,
  EMobiledataIcon,
  EarbudsBatteryIcon,
  EarbudsIcon,
  EastIcon,
  EdgesensorHighIcon,
  EdgesensorLowIcon,
  EditAttributesIcon,
  EditIcon,
  EditLocationAltIcon,
  EditLocationIcon,
  EditNotificationsIcon,
  EditOffIcon,
  EditRoadIcon,
  EggAltIcon,
  EggIcon,
  EightKIcon,
  EightKPlusIcon,
  EightMpIcon,
  EighteenMpIcon,
  EightteenMpIcon,
  EjectIcon,
  ElderlyIcon,
  ElderlyWomanIcon,
  ElectricBikeIcon,
  ElectricCarIcon,
  ElectricMopedIcon,
  ElectricRickshawIcon,
  ElectricScooterIcon,
  ElectricalServicesIcon,
  ElevatorIcon,
  ElevenMpIcon,
  EmailIcon,
  EmojiEmotionsIcon,
  EmojiEventsIcon,
  EmojiFlagsIcon,
  EmojiFoodBeverageIcon,
  EmojiNatureIcon,
  EmojiObjectsIcon,
  EmojiPeopleIcon,
  EmojiSymbolsIcon,
  EmojiTransportationIcon,
  EngineeringIcon,
  EnhancedEncryptionIcon,
  EqualizerIcon,
  ErrorIcon,
  ErrorOutlineIcon,
  EscalatorIcon,
  EscalatorWarningIcon,
  EuroIcon,
  EuroSymbolIcon,
  EvStationIcon,
  EventAvailableIcon,
  EventBusyIcon,
  EventIcon,
  EventNoteIcon,
  EventRepeatIcon,
  EventSeatIcon,
  ExitToAppIcon,
  ExpandCircleDownIcon,
  ExpandIcon,
  ExpandLessIcon,
  ExpandMoreIcon,
  ExplicitIcon,
  ExploreIcon,
  ExploreOffIcon,
  ExposureIcon,
  ExtensionIcon,
  ExtensionOffIcon,
  FaceIcon,
  FaceRetouchingNaturalIcon,
  FaceRetouchingOffIcon,
  FacebookIcon,
  FactCheckIcon,
  FactoryIcon,
  FamilyRestroomIcon,
  FastForwardIcon,
  FastRewindIcon,
  FastfoodIcon,
  FavoriteBorderIcon,
  FavoriteIcon,
  FaxIcon,
  FeaturedPlayListIcon,
  FeaturedVideoIcon,
  FeedIcon,
  FeedbackIcon,
  FemaleIcon,
  FenceIcon,
  FestivalIcon,
  FiberDvrIcon,
  FiberManualRecordIcon,
  FiberNewIcon,
  FiberPinIcon,
  FiberSmartRecordIcon,
  FifteenMpIcon,
  FileCopyIcon,
  FileDownloadDoneIcon,
  FileDownloadIcon,
  FileDownloadOffIcon,
  FileOpenIcon,
  FilePresentIcon,
  FileUploadIcon,
  Filter1Icon,
  Filter2Icon,
  Filter3Icon,
  Filter4Icon,
  Filter5Icon,
  Filter6Icon,
  Filter7Icon,
  Filter8Icon,
  Filter9Icon,
  Filter9PlusIcon,
  FilterAltIcon,
  FilterAltOffIcon,
  FilterBAndWIcon,
  FilterCenterFocusIcon,
  FilterDramaIcon,
  FilterFramesIcon,
  FilterHdrIcon,
  FilterIcon,
  FilterListIcon,
  FilterListOffIcon,
  FilterNoneIcon,
  FilterTiltShiftIcon,
  FilterVintageIcon,
  FindInPageIcon,
  FindReplaceIcon,
  FingerprintIcon,
  FireExtinguisherIcon,
  FireplaceIcon,
  FirstPageIcon,
  FitScreenIcon,
  FitbitIcon,
  FitnessCenterIcon,
  FiveGIcon,
  FiveKIcon,
  FiveKPlusIcon,
  FiveMpIcon,
  FivteenMpIcon,
  FlagCircleIcon,
  FlagIcon,
  FlakyIcon,
  FlareIcon,
  FlashAutoIcon,
  FlashOffIcon,
  FlashOnIcon,
  FlashlightOffIcon,
  FlashlightOnIcon,
  FlatwareIcon,
  FlightClassIcon,
  FlightIcon,
  FlightLandIcon,
  FlightTakeoffIcon,
  FlipCameraAndroidIcon,
  FlipCameraIosIcon,
  FlipIcon,
  FlipToBackIcon,
  FlipToFrontIcon,
  FlourescentIcon,
  FlutterDashIcon,
  FmdBadIcon,
  FmdGoodIcon,
  FolderDeleteIcon,
  FolderIcon,
  FolderOffIcon,
  FolderOpenIcon,
  FolderSharedIcon,
  FolderSpecialIcon,
  FolderZipIcon,
  FollowTheSignsIcon,
  FontDownloadIcon,
  FontDownloadOffIcon,
  FoodBankIcon,
  ForestIcon,
  ForkLeftIcon,
  ForkRightIcon,
  FormatAlignCenterIcon,
  FormatAlignJustifyIcon,
  FormatAlignLeftIcon,
  FormatAlignRightIcon,
  FormatBoldIcon,
  FormatClearIcon,
  FormatColorFillIcon,
  FormatColorResetIcon,
  FormatColorTextIcon,
  FormatIndentDecreaseIcon,
  FormatIndentIncreaseIcon,
  FormatItalicIcon,
  FormatLineSpacingIcon,
  FormatListBulletedIcon,
  FormatListNumberedIcon,
  FormatListNumberedRtlIcon,
  FormatOverlineIcon,
  FormatPaintIcon,
  FormatQuoteIcon,
  FormatShapesIcon,
  FormatSizeIcon,
  FormatStrikethroughIcon,
  FormatTextdirectionLToRIcon,
  FormatTextdirectionRToLIcon,
  FormatUnderlinedIcon,
  FortIcon,
  ForumIcon,
  Forward10Icon,
  Forward30Icon,
  Forward5Icon,
  ForwardIcon,
  ForwardToInboxIcon,
  FoundationIcon,
  FourGMobiledataIcon,
  FourGPlusMobiledataIcon,
  FourKIcon,
  FourKPlusIcon,
  FourMpIcon,
  FourteenMpIcon,
  FreeBreakfastIcon,
  FullscreenExitIcon,
  FullscreenIcon,
  FunctionsIcon,
  GMobiledataIcon,
  GTranslateIcon,
  GamepadIcon,
  GamesIcon,
  GarageIcon,
  GavelIcon,
  GestureIcon,
  GetAppIcon,
  GifBoxIcon,
  GifIcon,
  GirlIcon,
  GiteIcon,
  GolfCourseIcon,
  GppBadIcon,
  GppGoodIcon,
  GppMaybeIcon,
  GpsFixedIcon,
  GpsNotFixedIcon,
  GpsOffIcon,
  GradeIcon,
  GradientIcon,
  GradingIcon,
  GrainIcon,
  GraphicEqIcon,
  GrassIcon,
  Grid3x3Icon,
  Grid4x4Icon,
  GridGoldenratioIcon,
  GridOffIcon,
  GridOnIcon,
  GridViewIcon,
  GroupAddIcon,
  GroupIcon,
  GroupRemoveIcon,
  GroupWorkIcon,
  GroupsIcon,
  HMobiledataIcon,
  HPlusMobiledataIcon,
  HailIcon,
  HandymanIcon,
  HardwareIcon,
  HdIcon,
  HdrAutoIcon,
  HdrAutoSelectIcon,
  HdrEnhancedSelectIcon,
  HdrOffIcon,
  HdrOffSelectIcon,
  HdrOnIcon,
  HdrOnSelectIcon,
  HdrPlusIcon,
  HdrStrongIcon,
  HdrWeakIcon,
  HeadphonesBatteryIcon,
  HeadphonesIcon,
  HeadsetIcon,
  HeadsetMicIcon,
  HeadsetOffIcon,
  HealingIcon,
  HealthAndSafetyIcon,
  HearingDisabledIcon,
  HearingIcon,
  HeartBrokenIcon,
  HeightIcon,
  HelpCenterIcon,
  HelpIcon,
  HelpOutlineIcon,
  HevcIcon,
  HexagonIcon,
  HideImageIcon,
  HideSourceIcon,
  HighQualityIcon,
  HighlightAltIcon,
  HighlightIcon,
  HighlightOffIcon,
  HikingIcon,
  HistoryEduIcon,
  HistoryIcon,
  HistoryToggleOffIcon,
  HiveIcon,
  HlsIcon,
  HlsOffIcon,
  HolidayVillageIcon,
  HomeIcon,
  HomeMaxIcon,
  HomeMiniIcon,
  HomeRepairServiceIcon,
  HomeWorkIcon,
  HorizontalRuleIcon,
  HorizontalSplitIcon,
  HotTubIcon,
  HotelIcon,
  HourglassBottomIcon,
  HourglassDisabledIcon,
  HourglassEmptyIcon,
  HourglassFullIcon,
  HourglassTopIcon,
  HouseIcon,
  HouseSidingIcon,
  HouseboatIcon,
  HowToRegIcon,
  HowToVoteIcon,
  HtmlIcon,
  HttpIcon,
  HttpsIcon,
  HubIcon,
  HvacIcon,
  IceSkatingIcon,
  IcecreamIcon,
  ImageAspectRatioIcon,
  ImageIcon,
  ImageNotSupportedIcon,
  ImageSearchIcon,
  ImagesearchRollerIcon,
  ImportContactsIcon,
  ImportExportIcon,
  ImportantDevicesIcon,
  InboxIcon,
  IndeterminateCheckBoxIcon,
  InfoIcon,
  InputIcon,
  InsertChartIcon,
  InsertCommentIcon,
  InsertDriveFileIcon,
  InsertEmoticonIcon,
  InsertInvitationIcon,
  InsertLinkIcon,
  InsertPageBreakIcon,
  InsertPhotoIcon,
  InsightsIcon,
  InstallDesktopIcon,
  InstallMobileIcon,
  IntegrationInstructionsIcon,
  InterestsIcon,
  InterpreterModeIcon,
  Inventory2Icon,
  InventoryIcon,
  InvertColorsIcon,
  InvertColorsOffIcon,
  IosShareIcon,
  IronIcon,
  IsoIcon,
  JavascriptIcon,
  JoinFullIcon,
  JoinInnerIcon,
  JoinLeftIcon,
  JoinRightIcon,
  KayakingIcon,
  KebabDiningIcon,
  KeyIcon,
  KeyOffIcon,
  KeyboardAltIcon,
  KeyboardArrowDownIcon,
  KeyboardArrowLeftIcon,
  KeyboardArrowRightIcon,
  KeyboardArrowUpIcon,
  KeyboardBackspaceIcon,
  KeyboardCapslockIcon,
  KeyboardCommandKeyIcon,
  KeyboardControlKeyIcon,
  KeyboardDoubleArrowDownIcon,
  KeyboardDoubleArrowLeftIcon,
  KeyboardDoubleArrowRightIcon,
  KeyboardDoubleArrowUpIcon,
  KeyboardHideIcon,
  KeyboardIcon,
  KeyboardOptionKeyIcon,
  KeyboardReturnIcon,
  KeyboardTabIcon,
  KeyboardVoiceIcon,
  KingBedIcon,
  KitchenIcon,
  KitesurfingIcon,
  LabelIcon,
  LabelImportantIcon,
  LabelOffIcon,
  LanIcon,
  LandscapeIcon,
  LanguageIcon,
  LaptopChromebookIcon,
  LaptopIcon,
  LaptopMacIcon,
  LaptopWindowsIcon,
  LastPageIcon,
  LaunchIcon,
  LayersClearIcon,
  LayersIcon,
  LeaderboardIcon,
  LeakAddIcon,
  LeakRemoveIcon,
  LegendToggleIcon,
  LensBlurIcon,
  LensIcon,
  LibraryAddCheckIcon,
  LibraryAddIcon,
  LibraryBooksIcon,
  LibraryMusicIcon,
  LightIcon,
  LightModeIcon,
  LightbulbIcon,
  LineAxisIcon,
  LineStyleIcon,
  LineWeightIcon,
  LinearScaleIcon,
  LinkIcon,
  LinkOffIcon,
  LinkedCameraIcon,
  LiquorIcon,
  ListAltIcon,
  ListIcon,
  LiveHelpIcon,
  LiveTvIcon,
  LivingIcon,
  LocalActivityIcon,
  LocalAirportIcon,
  LocalAtmIcon,
  LocalBarIcon,
  LocalCafeIcon,
  LocalCarWashIcon,
  LocalConvenienceStoreIcon,
  LocalDiningIcon,
  LocalDrinkIcon,
  LocalFireDepartmentIcon,
  LocalFloristIcon,
  LocalGasStationIcon,
  LocalGroceryStoreIcon,
  LocalHospitalIcon,
  LocalHotelIcon,
  LocalLaundryServiceIcon,
  LocalLibraryIcon,
  LocalMallIcon,
  LocalMoviesIcon,
  LocalOfferIcon,
  LocalParkingIcon,
  LocalPharmacyIcon,
  LocalPhoneIcon,
  LocalPizzaIcon,
  LocalPlayIcon,
  LocalPoliceIcon,
  LocalPostOfficeIcon,
  LocalPrintshopIcon,
  LocalSeeIcon,
  LocalShippingIcon,
  LocalTaxiIcon,
  LocationCityIcon,
  LocationDisabledIcon,
  LocationOffIcon,
  LocationOnIcon,
  LocationSearchingIcon,
  LockClockIcon,
  LockIcon,
  LockOpenIcon,
  LockResetIcon,
  LoginIcon,
  LogoDevIcon,
  LogoutIcon,
  Looks3Icon,
  Looks4Icon,
  Looks5Icon,
  Looks6Icon,
  LooksIcon,
  LooksOneIcon,
  LooksTwoIcon,
  LoopIcon,
  LoupeIcon,
  LowPriorityIcon,
  LoyaltyIcon,
  LteMobiledataIcon,
  LtePlusMobiledataIcon,
  LuggageIcon,
  LunchDiningIcon,
  MailIcon,
  MailOutlineIcon,
  MaleIcon,
  ManIcon,
  ManageAccountsIcon,
  ManageSearchIcon,
  MapIcon,
  MapsHomeWorkIcon,
  MapsUgcIcon,
  MarginIcon,
  MarkAsUnreadIcon,
  MarkChatReadIcon,
  MarkChatUnreadIcon,
  MarkEmailReadIcon,
  MarkEmailUnreadIcon,
  MarkUnreadChatAltIcon,
  MarkunreadIcon,
  MarkunreadMailboxIcon,
  MasksIcon,
  MaximizeIcon,
  MediaBluetoothOffIcon,
  MediaBluetoothOnIcon,
  MediationIcon,
  MedicalServicesIcon,
  MedicationIcon,
  MedicationLiquidIcon,
  MeetingRoomIcon,
  MemoryIcon,
  MenuBookIcon,
  MenuIcon,
  MenuOpenIcon,
  MergeIcon,
  MergeTypeIcon,
  MessageIcon,
  MicExternalOffIcon,
  MicExternalOnIcon,
  MicIcon,
  MicNoneIcon,
  MicOffIcon,
  MicrowaveIcon,
  MilitaryTechIcon,
  MinimizeIcon,
  MiscellaneousServicesIcon,
  MissedVideoCallIcon,
  MmsIcon,
  MobileFriendlyIcon,
  MobileOffIcon,
  MobileScreenShareIcon,
  MobiledataOffIcon,
  ModeCommentIcon,
  ModeEditIcon,
  ModeEditOutlineIcon,
  ModeIcon,
  ModeNightIcon,
  ModeOfTravelIcon,
  ModeStandbyIcon,
  ModelTrainingIcon,
  MonetizationOnIcon,
  MoneyIcon,
  MoneyOffCsredIcon,
  MoneyOffIcon,
  MonitorHeartIcon,
  MonitorIcon,
  MonitorWeightIcon,
  MonochromePhotosIcon,
  MoodBadIcon,
  MoodIcon,
  MopedIcon,
  MoreHorizIcon,
  MoreIcon,
  MoreTimeIcon,
  MoreVertIcon,
  MosqueIcon,
  MotionPhotosAutoIcon,
  MotionPhotosOffIcon,
  MouseIcon,
  MoveDownIcon,
  MoveToInboxIcon,
  MoveUpIcon,
  MovieCreationIcon,
  MovieFilterIcon,
  MovieIcon,
  MovingIcon,
  MpIcon,
  MultilineChartIcon,
  MultipleStopIcon,
  MuseumIcon,
  MusicNoteIcon,
  MusicOffIcon,
  MusicVideoIcon,
  MyLocationIcon,
  NatIcon,
  NatureIcon,
  NaturePeopleIcon,
  NavigateBeforeIcon,
  NavigateNextIcon,
  NavigationIcon,
  NearMeDisabledIcon,
  NearMeIcon,
  NearbyErrorIcon,
  NearbyOffIcon,
  NetworkCellIcon,
  NetworkCheckIcon,
  NetworkLockedIcon,
  NetworkWifiIcon,
  NewReleasesIcon,
  NewspaperIcon,
  NextPlanIcon,
  NextWeekIcon,
  NfcIcon,
  NightShelterIcon,
  NightlifeIcon,
  NightlightIcon,
  NightlightRoundIcon,
  NightsStayIcon,
  NineKIcon,
  NineKPlusIcon,
  NineMpIcon,
  NineteenMpIcon,
  NoAccountsIcon,
  NoBackpackIcon,
  NoCellIcon,
  NoDrinksIcon,
  NoEncryptionGmailerrorredIcon,
  NoEncryptionIcon,
  NoFlashIcon,
  NoFoodIcon,
  NoLuggageIcon,
  NoMealsIcon,
  NoMeetingRoomIcon,
  NoPhotographyIcon,
  NoSimIcon,
  NoStrollerIcon,
  NoTransferIcon,
  NordicWalkingIcon,
  NorthEastIcon,
  NorthIcon,
  NorthWestIcon,
  NotAccessibleIcon,
  NotInterestedIcon,
  NotListedLocationIcon,
  NotStartedIcon,
  NoteAddIcon,
  NoteAltIcon,
  NoteIcon,
  NotesIcon,
  NotificationAddIcon,
  NotificationImportantIcon,
  NotificationsActiveIcon,
  NotificationsIcon,
  NotificationsNoneIcon,
  NotificationsOffIcon,
  NotificationsPausedIcon,
  NumbersIcon,
  OfflineBoltIcon,
  OfflinePinIcon,
  OfflineShareIcon,
  OndemandVideoIcon,
  OneKIcon,
  OneKPlusIcon,
  OneKkIcon,
  OnlinePredictionIcon,
  OpacityIcon,
  OpenInBrowserIcon,
  OpenInFullIcon,
  OpenInNewIcon,
  OpenInNewOffIcon,
  OpenWithIcon,
  OtherHousesIcon,
  OutboundIcon,
  OutboxIcon,
  OutdoorGrillIcon,
  OutletIcon,
  PaddingIcon,
  PagesIcon,
  PageviewIcon,
  PaidIcon,
  PaletteIcon,
  PanToolAltIcon,
  PanToolIcon,
  PanoramaFishEyeIcon,
  PanoramaHorizontalIcon,
  PanoramaHorizontalSelectIcon,
  PanoramaIcon,
  PanoramaPhotosphereIcon,
  PanoramaPhotosphereSelectIcon,
  PanoramaVerticalIcon,
  PanoramaVerticalSelectIcon,
  PanoramaWideAngleIcon,
  PanoramaWideAngleSelectIcon,
  ParaglidingIcon,
  ParkIcon,
  PartyModeIcon,
  PasswordIcon,
  PatternIcon,
  PauseCircleFilledIcon,
  PauseCircleIcon,
  PauseCircleOutlineIcon,
  PauseIcon,
  PausePresentationIcon,
  PaymentIcon,
  PaymentsIcon,
  PedalBikeIcon,
  PendingActionsIcon,
  PendingIcon,
  PentagonIcon,
  PeopleAltIcon,
  PeopleIcon,
  PeopleOutlineIcon,
  PercentIcon,
  PermCameraMicIcon,
  PermContactCalendarIcon,
  PermDataSettingIcon,
  PermDeviceInformationIcon,
  PermIdentityIcon,
  PermMediaIcon,
  PermPhoneMsgIcon,
  PermScanWifiIcon,
  PersonAddAlt1Icon,
  PersonAddAltIcon,
  PersonAddDisabledIcon,
  PersonAddIcon,
  PersonIcon,
  PersonOffIcon,
  PersonOutlineIcon,
  PersonPinCircleIcon,
  PersonPinIcon,
  PersonRemoveAlt1Icon,
  PersonRemoveIcon,
  PersonSearchIcon,
  PersonalVideoIcon,
  PestControlIcon,
  PestControlRodentIcon,
  PetsIcon,
  PhishingIcon,
  PhoneAndroidIcon,
  PhoneBluetoothSpeakerIcon,
  PhoneCallbackIcon,
  PhoneDisabledIcon,
  PhoneEnabledIcon,
  PhoneForwardedIcon,
  PhoneIcon,
  PhoneInTalkIcon,
  PhoneIphoneIcon,
  PhoneLockedIcon,
  PhoneMissedIcon,
  PhonePausedIcon,
  PhonelinkEraseIcon,
  PhonelinkIcon,
  PhonelinkLockIcon,
  PhonelinkOffIcon,
  PhonelinkRingIcon,
  PhonelinkSetupIcon,
  PhotoAlbumIcon,
  PhotoCameraBackIcon,
  PhotoCameraFrontIcon,
  PhotoCameraIcon,
  PhotoFilterIcon,
  PhotoIcon,
  PhotoLibraryIcon,
  PhotoSizeSelectActualIcon,
  PhotoSizeSelectLargeIcon,
  PhotoSizeSelectSmallIcon,
  PhpIcon,
  PianoIcon,
  PianoOffIcon,
  PictureAsPdfIcon,
  PictureInPictureAltIcon,
  PictureInPictureIcon,
  PieChartIcon,
  PieChartOutlineIcon,
  PinDropIcon,
  PinIcon,
  PinchIcon,
  PivotTableChartIcon,
  PixIcon,
  PlaceIcon,
  PlagiarismIcon,
  PlayArrowIcon,
  PlayCircleFilledIcon,
  PlayCircleFilledWhiteIcon,
  PlayCircleIcon,
  PlayCircleOutlineIcon,
  PlayDisabledIcon,
  PlayForWorkIcon,
  PlayLessonIcon,
  PlaylistAddCheckCircleIcon,
  PlaylistAddCheckIcon,
  PlaylistAddCircleIcon,
  PlaylistAddIcon,
  PlaylistPlayIcon,
  PlaylistRemoveIcon,
  PlumbingIcon,
  PlusOneIcon,
  PodcastsIcon,
  PointOfSaleIcon,
  PolicyIcon,
  PollIcon,
  PolylineIcon,
  PoolIcon,
  PortableWifiOffIcon,
  PortraitIcon,
  PostAddIcon,
  PowerIcon,
  PowerInputIcon,
  PowerOffIcon,
  PowerSettingsNewIcon,
  PrecisionManufacturingIcon,
  PregnantWomanIcon,
  PresentToAllIcon,
  PreviewIcon,
  PriceChangeIcon,
  PriceCheckIcon,
  PrintDisabledIcon,
  PrintIcon,
  PriorityHighIcon,
  PrivacyTipIcon,
  ProductionQuantityLimitsIcon,
  PsychologyIcon,
  PublicIcon,
  PublicOffIcon,
  PublishIcon,
  PublishedWithChangesIcon,
  PunchClockIcon,
  PushPinIcon,
  QrCode2Icon,
  QrCodeIcon,
  QrCodeScannerIcon,
  QueryBuilderIcon,
  QueryStatsIcon,
  QuestionAnswerIcon,
  QuestionMarkIcon,
  QueueIcon,
  QueueMusicIcon,
  QueuePlayNextIcon,
  QuickreplyIcon,
  QuizIcon,
  RMobiledataIcon,
  RadarIcon,
  RadioButtonCheckedIcon,
  RadioButtonUncheckedIcon,
  RadioIcon,
  RailwayAlertIcon,
  RamenDiningIcon,
  RampLeftIcon,
  RampRightIcon,
  RateReviewIcon,
  RawOffIcon,
  RawOnIcon,
  ReadMoreIcon,
  ReceiptIcon,
  ReceiptLongIcon,
  RecentActorsIcon,
  RecommendIcon,
  RecordVoiceOverIcon,
  RectangleIcon,
  RedeemIcon,
  RedoIcon,
  ReduceCapacityIcon,
  RefreshIcon,
  RememberMeIcon,
  RemoveCircleIcon,
  RemoveCircleOutlineIcon,
  RemoveDoneIcon,
  RemoveFromQueueIcon,
  RemoveIcon,
  RemoveModeratorIcon,
  RemoveRedEyeIcon,
  RemoveShoppingCartIcon,
  ReorderIcon,
  RepeatIcon,
  RepeatOnIcon,
  RepeatOneIcon,
  RepeatOneOnIcon,
  Replay10Icon,
  Replay30Icon,
  Replay5Icon,
  ReplayCircleFilledIcon,
  ReplayIcon,
  ReplyAllIcon,
  ReplyIcon,
  ReportGmailerrorredIcon,
  ReportIcon,
  ReportOffIcon,
  ReportProblemIcon,
  RequestPageIcon,
  RequestQuoteIcon,
  ResetTvIcon,
  RestartAltIcon,
  RestaurantIcon,
  RestaurantMenuIcon,
  RestoreFromTrashIcon,
  RestoreIcon,
  RestorePageIcon,
  ReviewsIcon,
  RiceBowlIcon,
  RingVolumeIcon,
  RocketIcon,
  RocketLaunchIcon,
  RoofingIcon,
  RoomIcon,
  RoomPreferencesIcon,
  RoomServiceIcon,
  Rotate90DegreesCcwIcon,
  Rotate90DegreesCwIcon,
  RotateLeftIcon,
  RotateRightIcon,
  RoundaboutLeftIcon,
  RoundaboutRightIcon,
  RoundedCornerIcon,
  RouteIcon,
  RouterIcon,
  RowingIcon,
  RssFeedIcon,
  RsvpIcon,
  RttIcon,
  RuleFolderIcon,
  RuleIcon,
  RunCircleIcon,
  RunningWithErrorsIcon,
  RvHookupIcon,
  SafetyDividerIcon,
  SailingIcon,
  SanitizerIcon,
  SatelliteAltIcon,
  SatelliteIcon,
  SaveAltIcon,
  SaveAsIcon,
  SaveIcon,
  SavedSearchIcon,
  SavingsIcon,
  ScaleIcon,
  ScannerIcon,
  ScatterPlotIcon,
  ScheduleIcon,
  ScheduleSendIcon,
  SchemaIcon,
  SchoolIcon,
  ScienceIcon,
  ScoreIcon,
  ScreenLockLandscapeIcon,
  ScreenLockPortraitIcon,
  ScreenLockRotationIcon,
  ScreenRotationIcon,
  ScreenSearchDesktopIcon,
  ScreenShareIcon,
  ScreenshotIcon,
  SdCardAlertIcon,
  SdCardIcon,
  SdIcon,
  SdStorageIcon,
  SearchIcon,
  SearchOffIcon,
  SecurityIcon,
  SecurityUpdateGoodIcon,
  SecurityUpdateIcon,
  SecurityUpdateWarningIcon,
  SegmentIcon,
  SelectAllIcon,
  SelfImprovementIcon,
  SellIcon,
  SendAndArchiveIcon,
  SendIcon,
  SendTimeExtensionIcon,
  SendToMobileIcon,
  SensorDoorIcon,
  SensorWindowIcon,
  SensorsIcon,
  SensorsOffIcon,
  SentimentDissatisfiedIcon,
  SentimentNeutralIcon,
  SentimentSatisfiedAltIcon,
  SentimentSatisfiedIcon,
  SentimentVeryDissatisfiedIcon,
  SentimentVerySatisfiedIcon,
  SetMealIcon,
  SettingsAccessibilityIcon,
  SettingsApplicationsIcon,
  SettingsBackupRestoreIcon,
  SettingsBluetoothIcon,
  SettingsBrightnessIcon,
  SettingsCellIcon,
  SettingsEthernetIcon,
  SettingsIcon,
  SettingsInputAntennaIcon,
  SettingsInputComponentIcon,
  SettingsInputCompositeIcon,
  SettingsInputHdmiIcon,
  SettingsInputSvideoIcon,
  SettingsOverscanIcon,
  SettingsPhoneIcon,
  SettingsPowerIcon,
  SettingsRemoteIcon,
  SettingsSuggestIcon,
  SettingsSystemDaydreamIcon,
  SettingsVoiceIcon,
  SevenKIcon,
  SevenKPlusIcon,
  SevenMpIcon,
  SeventeenMpIcon,
  ShareIcon,
  ShareLocationIcon,
  ShieldIcon,
  ShieldMoonIcon,
  Shop2Icon,
  ShopIcon,
  ShopTwoIcon,
  ShoppingBagIcon,
  ShoppingBasketIcon,
  ShoppingCartCheckoutIcon,
  ShoppingCartIcon,
  ShortTextIcon,
  ShortcutIcon,
  ShowChartIcon,
  ShowerIcon,
  ShuffleIcon,
  ShuffleOnIcon,
  ShutterSpeedIcon,
  SickIcon,
  SignalCellular0BarIcon,
  SignalCellular1BarIcon,
  SignalCellular2BarIcon,
  SignalCellular3BarIcon,
  SignalCellular4BarIcon,
  SignalCellularAltIcon,
  SignalCellularConnectedNoInternet0BarIcon,
  SignalCellularConnectedNoInternet1BarIcon,
  SignalCellularConnectedNoInternet2BarIcon,
  SignalCellularConnectedNoInternet3BarIcon,
  SignalCellularConnectedNoInternet4BarIcon,
  SignalCellularNoSimIcon,
  SignalCellularNodataIcon,
  SignalCellularNullIcon,
  SignalCellularOffIcon,
  SignalWifi0BarIcon,
  SignalWifi1BarIcon,
  SignalWifi1BarLockIcon,
  SignalWifi2BarIcon,
  SignalWifi2BarLockIcon,
  SignalWifi3BarIcon,
  SignalWifi3BarLockIcon,
  SignalWifi4BarIcon,
  SignalWifi4BarLockIcon,
  SignalWifiBadIcon,
  SignalWifiConnectedNoInternet4Icon,
  SignalWifiOffIcon,
  SignalWifiStatusbar4BarIcon,
  SignalWifiStatusbarConnectedNoInternet4Icon,
  SignalWifiStatusbarNullIcon,
  SignpostIcon,
  SimCardAlertIcon,
  SimCardDownloadIcon,
  SimCardIcon,
  SingleBedIcon,
  SipIcon,
  SixKIcon,
  SixKPlusIcon,
  SixMpIcon,
  SixteenMpIcon,
  SixtyFpsIcon,
  SixtyFpsSelectIcon,
  SkateboardingIcon,
  SkipNextIcon,
  SkipPreviousIcon,
  SleddingIcon,
  SlideshowIcon,
  SlowMotionVideoIcon,
  SmartButtonIcon,
  SmartDisplayIcon,
  SmartScreenIcon,
  SmartToyIcon,
  SmartphoneIcon,
  SmokeFreeIcon,
  SmokingRoomsIcon,
  SmsFailedIcon,
  SmsIcon,
  SnippetFolderIcon,
  SnoozeIcon,
  SnowboardingIcon,
  SnowmobileIcon,
  SnowshoeingIcon,
  SoapIcon,
  SocialDistanceIcon,
  SortByAlphaIcon,
  SortIcon,
  SoupKitchenIcon,
  SourceIcon,
  SouthAmericaIcon,
  SouthEastIcon,
  SouthIcon,
  SouthWestIcon,
  SpaIcon,
  SpaceBarIcon,
  SpeakerGroupIcon,
  SpeakerIcon,
  SpeakerNotesIcon,
  SpeakerNotesOffIcon,
  SpeakerPhoneIcon,
  SpeedIcon,
  SpellcheckIcon,
  SplitscreenIcon,
  SpokeIcon,
  SportsBarIcon,
  SportsBaseballIcon,
  SportsBasketballIcon,
  SportsCricketIcon,
  SportsEsportsIcon,
  SportsFootballIcon,
  SportsGolfIcon,
  SportsHandballIcon,
  SportsHockeyIcon,
  SportsIcon,
  SportsKabaddiIcon,
  SportsMartialArtsIcon,
  SportsMmaIcon,
  SportsMotorsportsIcon,
  SportsRugbyIcon,
  SportsScoreIcon,
  SportsSoccerIcon,
  SportsTennisIcon,
  SportsVolleyballIcon,
  SquareFootIcon,
  SquareIcon,
  SsidChartIcon,
  StackedBarChartIcon,
  StackedLineChartIcon,
  StadiumIcon,
  StairsIcon,
  StarBorderIcon,
  StarBorderPurple500Icon,
  StarHalfIcon,
  StarIcon,
  StarOutlineIcon,
  StarPurple500Icon,
  StarRateIcon,
  StarsIcon,
  StartIcon,
  StayCurrentLandscapeIcon,
  StayCurrentPortraitIcon,
  StayPrimaryLandscapeIcon,
  StayPrimaryPortraitIcon,
  StickyNote2Icon,
  StopCircleIcon,
  StopIcon,
  StopScreenShareIcon,
  StorageIcon,
  StoreIcon,
  StoreMallDirectoryIcon,
  StorefrontIcon,
  StormIcon,
  StraightIcon,
  StraightenIcon,
  StreamIcon,
  StreetviewIcon,
  StrikethroughSIcon,
  StrollerIcon,
  StyleIcon,
  SubdirectoryArrowLeftIcon,
  SubdirectoryArrowRightIcon,
  SubjectIcon,
  SubscriptIcon,
  SubscriptionsIcon,
  SubtitlesIcon,
  SubtitlesOffIcon,
  SubwayIcon,
  SummarizeIcon,
  SuperscriptIcon,
  SupervisedUserCircleIcon,
  SupervisorAccountIcon,
  SupportAgentIcon,
  SupportIcon,
  SurfingIcon,
  SurroundSoundIcon,
  SwapCallsIcon,
  SwapHorizIcon,
  SwapHorizontalCircleIcon,
  SwapVertIcon,
  SwapVerticalCircleIcon,
  SwipeDownAltIcon,
  SwipeDownIcon,
  SwipeIcon,
  SwipeLeftAltIcon,
  SwipeLeftIcon,
  SwipeRightAltIcon,
  SwipeRightIcon,
  SwipeUpAltIcon,
  SwipeUpIcon,
  SwipeVerticalIcon,
  SwitchAccessShortcutAddIcon,
  SwitchAccessShortcutIcon,
  SwitchAccountIcon,
  SwitchCameraIcon,
  SwitchLeftIcon,
  SwitchRightIcon,
  SwitchVideoIcon,
  SynagogueIcon,
  SyncAltIcon,
  SyncDisabledIcon,
  SyncIcon,
  SyncLockIcon,
  SyncProblemIcon,
  SystemSecurityUpdateGoodIcon,
  SystemSecurityUpdateIcon,
  SystemSecurityUpdateWarningIcon,
  SystemUpdateAltIcon,
  SystemUpdateIcon,
  TabIcon,
  TabUnselectedIcon,
  TableBarIcon,
  TableChartIcon,
  TableRestaurantIcon,
  TableRowsIcon,
  TableViewIcon,
  TabletAndroidIcon,
  TabletIcon,
  TabletMacIcon,
  TagFacesIcon,
  TagIcon,
  TakeoutDiningIcon,
  TapAndPlayIcon,
  TapasIcon,
  TaskAltIcon,
  TaskIcon,
  TaxiAlertIcon,
  TempleBuddhistIcon,
  TempleHinduIcon,
  TenMpIcon,
  TerminalIcon,
  TerrainIcon,
  TextDecreaseIcon,
  TextFieldsIcon,
  TextFormatIcon,
  TextIncreaseIcon,
  TextRotateUpIcon,
  TextRotateVerticalIcon,
  TextRotationAngledownIcon,
  TextRotationAngleupIcon,
  TextRotationDownIcon,
  TextRotationNoneIcon,
  TextSnippetIcon,
  TextsmsIcon,
  TextureIcon,
  TheaterComedyIcon,
  TheatersIcon,
  ThermostatAutoIcon,
  ThermostatIcon,
  ThirteenMpIcon,
  ThirtyFpsIcon,
  ThirtyFpsSelectIcon,
  ThreeDRotationIcon,
  ThreeGMobiledataIcon,
  ThreeKIcon,
  ThreeKPlusIcon,
  ThreeMpIcon,
  ThreePIcon,
  ThreeSixtyIcon,
  ThumbDownAltIcon,
  ThumbDownIcon,
  ThumbDownOffAltIcon,
  ThumbUpAltIcon,
  ThumbUpIcon,
  ThumbUpOffAltIcon,
  ThumbsUpDownIcon,
  TimeToLeaveIcon,
  TimelapseIcon,
  TimelineIcon,
  Timer10Icon,
  Timer10SelectIcon,
  Timer3Icon,
  Timer3SelectIcon,
  TimerIcon,
  TimerOffIcon,
  TimesOneMobiledataIcon,
  TipsAndUpdatesIcon,
  TitleIcon,
  TocIcon,
  TodayIcon,
  ToggleOffIcon,
  ToggleOnIcon,
  TokenIcon,
  TollIcon,
  TonalityIcon,
  TopicIcon,
  TouchAppIcon,
  TourIcon,
  ToysIcon,
  TrackChangesIcon,
  TrafficIcon,
  TrainIcon,
  TramIcon,
  TransferWithinAStationIcon,
  TransformIcon,
  TransgenderIcon,
  TransitEnterexitIcon,
  TranslateIcon,
  TravelExploreIcon,
  TrendingDownIcon,
  TrendingFlatIcon,
  TrendingUpIcon,
  TripOriginIcon,
  TryIcon,
  TtyIcon,
  TuneIcon,
  TungstenIcon,
  TurnLeftIcon,
  TurnRightIcon,
  TurnSharpLeftIcon,
  TurnSharpRightIcon,
  TurnSlightLeftIcon,
  TurnSlightRightIcon,
  TurnedInIcon,
  TurnedInNotIcon,
  TvIcon,
  TvOffIcon,
  TwelveMpIcon,
  TwentyFourMpIcon,
  TwentyOneMpIcon,
  TwentyThreeMpIcon,
  TwentyTwoMpIcon,
  TwentyZeroMpIcon,
  TwoKIcon,
  TwoKPlusIcon,
  TwoMpIcon,
  TwoWheelerIcon,
  UTurnLeftIcon,
  UTurnRightIcon,
  UmbrellaIcon,
  UnarchiveIcon,
  UndoIcon,
  UnfoldLessIcon,
  UnfoldMoreIcon,
  UnpublishedIcon,
  UnsubscribeIcon,
  UpcomingIcon,
  UpdateDisabledIcon,
  UpdateIcon,
  UpgradeIcon,
  UploadFileIcon,
  UploadIcon,
  UsbIcon,
  UsbOffIcon,
  VaccinesIcon,
  VerifiedIcon,
  VerifiedUserIcon,
  VerticalAlignBottomIcon,
  VerticalAlignCenterIcon,
  VerticalAlignTopIcon,
  VerticalSplitIcon,
  VibrationIcon,
  VideoCallIcon,
  VideoCameraBackIcon,
  VideoCameraFrontIcon,
  VideoFileIcon,
  VideoLabelIcon,
  VideoLibraryIcon,
  VideoSettingsIcon,
  VideoStableIcon,
  VideocamIcon,
  VideocamOffIcon,
  VideogameAssetIcon,
  VideogameAssetOffIcon,
  ViewAgendaIcon,
  ViewArrayIcon,
  ViewCarouselIcon,
  ViewColumnIcon,
  ViewComfyAltIcon,
  ViewComfyIcon,
  ViewCompactAltIcon,
  ViewCompactIcon,
  ViewCozyIcon,
  ViewDayIcon,
  ViewHeadlineIcon,
  ViewInArIcon,
  ViewKanbanIcon,
  ViewListIcon,
  ViewModuleIcon,
  ViewQuiltIcon,
  ViewSidebarIcon,
  ViewStreamIcon,
  ViewTimelineIcon,
  ViewWeekIcon,
  VignetteIcon,
  VillaIcon,
  VisibilityIcon,
  VisibilityOffIcon,
  VoiceChatIcon,
  VoiceOverOffIcon,
  VoicemailIcon,
  VolumeDownIcon,
  VolumeMuteIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  VolunteerActivismIcon,
  VpnKeyIcon,
  VpnKeyOffIcon,
  VpnLockIcon,
  VrpanoIcon,
  WallpaperIcon,
  WarehouseIcon,
  WarningAmberIcon,
  WarningIcon,
  WashIcon,
  WatchIcon,
  WatchLaterIcon,
  WatchOffIcon,
  WaterDamageIcon,
  WaterIcon,
  WaterfallChartIcon,
  WavesIcon,
  WbAutoIcon,
  WbCloudyIcon,
  WbIncandescentIcon,
  WbIridescentIcon,
  WbShadeIcon,
  WbSunnyIcon,
  WbTwilightIcon,
  WcIcon,
  WebAssetIcon,
  WebAssetOffIcon,
  WebIcon,
  WebhookIcon,
  WeekendIcon,
  WestIcon,
  WhatsappIcon: WhatsappIcon$1,
  WhatshotIcon,
  WheelchairPickupIcon,
  WhereToVoteIcon,
  WidgetsIcon,
  WifiCalling3Icon,
  WifiCallingIcon,
  WifiChannelIcon,
  WifiFindIcon,
  WifiIcon,
  WifiLockIcon,
  WifiOffIcon,
  WifiPasswordIcon,
  WifiProtectedSetupIcon,
  WifiTetheringErrorIcon,
  WifiTetheringErrorRoundedIcon,
  WifiTetheringIcon,
  WifiTetheringOffIcon,
  WindowIcon,
  WineBarIcon,
  WomanIcon,
  WorkIcon,
  WorkOffIcon,
  WorkOutlineIcon,
  WorkspacePremiumIcon,
  WorkspacesIcon,
  WrapTextIcon,
  WrongLocationIcon,
  WysiwygIcon,
  YardIcon,
  YoutubeSearchedForIcon,
  ZoomInIcon,
  ZoomInMapIcon,
  ZoomOutIcon,
  ZoomOutMapIcon
}, Symbol.toStringTag, { value: "Module" }));
const YoutubeIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M 5.6796875 2 L 7.1582031 7.34375 L 7.1582031 9.90625 L 8.4394531 9.90625 L 8.4394531 7.34375 L 9.9375 2 L 8.6464844 2 L 8.109375 4.4316406 C 7.958375 5.1416406 7.8623594 5.6462656 7.8183594 5.9472656 L 7.7792969 5.9472656 C 7.7162969 5.5262656 7.6202813 5.017875 7.4882812 4.421875 L 6.9707031 2 L 5.6796875 2 z M 11.431641 4.0175781 C 10.997641 4.0175781 10.647859 4.1023906 10.380859 4.2753906 C 10.113859 4.4473906 9.9170156 4.7226094 9.7910156 5.0996094 C 9.6660156 5.4766094 9.6035156 5.9756563 9.6035156 6.5976562 L 9.6035156 7.4375 C 9.6035156 8.0525 9.6575781 8.5450156 9.7675781 8.9160156 C 9.8775781 9.2870156 10.063219 9.5603281 10.324219 9.7363281 C 10.585219 9.9123281 10.944344 10 11.402344 10 C 11.848344 10 12.202891 9.9132344 12.462891 9.7402344 C 12.722891 9.5672344 12.911344 9.295875 13.027344 8.921875 C 13.143344 8.547875 13.201172 8.0535 13.201172 7.4375 L 13.201172 6.5976562 C 13.201172 5.9766562 13.142437 5.4794687 13.023438 5.1054688 C 12.904438 4.7324687 12.715031 4.45725 12.457031 4.28125 C 12.199031 4.10525 11.858641 4.0175781 11.431641 4.0175781 z M 13.878906 4.1308594 L 13.878906 8.4453125 C 13.878906 8.9793125 13.968391 9.3720469 14.150391 9.6230469 C 14.332391 9.8740469 14.615047 10 14.998047 10 C 15.550047 10 15.966187 9.7332188 16.242188 9.1992188 L 16.269531 9.1992188 L 16.382812 9.90625 L 17.400391 9.90625 L 17.400391 4.1308594 L 16.101562 4.1308594 L 16.101562 8.71875 C 16.051563 8.82575 15.975094 8.9134219 15.871094 8.9824219 C 15.767094 9.0524219 15.659875 9.0859375 15.546875 9.0859375 C 15.414875 9.0859375 15.320672 9.031875 15.263672 8.921875 C 15.206672 8.811875 15.177734 8.6271406 15.177734 8.3691406 L 15.177734 4.1308594 L 13.878906 4.1308594 z M 11.402344 4.9121094 C 11.584344 4.9121094 11.713156 5.0072187 11.785156 5.1992188 C 11.857156 5.3902187 11.892578 5.694375 11.892578 6.109375 L 11.892578 7.9082031 C 11.892578 8.3352031 11.857156 8.6440312 11.785156 8.8320312 C 11.713156 9.0200312 11.585297 9.1142344 11.404297 9.1152344 C 11.222297 9.1152344 11.096344 9.0200313 11.027344 8.8320312 C 10.957344 8.6440313 10.923828 8.3352031 10.923828 7.9082031 L 10.923828 6.109375 C 10.923828 5.695375 10.95925 5.3912188 11.03125 5.1992188 C 11.10325 5.0082187 11.226344 4.9121094 11.402344 4.9121094 z M 5 11 C 3.9 11 3 11.9 3 13 L 3 20 C 3 21.1 3.9 22 5 22 L 19 22 C 20.1 22 21 21.1 21 20 L 21 13 C 21 11.9 20.1 11 19 11 L 5 11 z M 12.048828 13 L 13.105469 13 L 13.105469 15.568359 L 13.113281 15.568359 C 13.208281 15.382359 13.344531 15.233141 13.519531 15.119141 C 13.694531 15.005141 13.883938 14.949219 14.085938 14.949219 C 14.345937 14.949219 14.549266 15.01825 14.697266 15.15625 C 14.845266 15.29425 14.953531 15.517219 15.019531 15.824219 C 15.085531 16.132219 15.117187 16.559469 15.117188 17.105469 L 15.117188 17.876953 L 15.119141 17.876953 C 15.119141 18.603953 15.030469 19.136516 14.855469 19.478516 C 14.680469 19.820516 14.408109 19.992188 14.037109 19.992188 C 13.830109 19.992188 13.642656 19.944609 13.472656 19.849609 C 13.302656 19.754609 13.174844 19.623984 13.089844 19.458984 L 13.066406 19.458984 L 12.955078 19.919922 L 12.048828 19.919922 L 12.048828 13 z M 5.4863281 13.246094 L 8.7382812 13.246094 L 8.7382812 14.130859 L 7.6484375 14.130859 L 7.6484375 19.919922 L 6.5761719 19.919922 L 6.5761719 14.130859 L 5.4863281 14.130859 L 5.4863281 13.246094 z M 17.097656 14.951172 C 17.473656 14.951172 17.762844 15.020203 17.964844 15.158203 C 18.165844 15.296203 18.307625 15.511734 18.390625 15.802734 C 18.472625 16.094734 18.513672 16.497719 18.513672 17.011719 L 18.513672 17.847656 L 16.677734 17.847656 L 16.677734 18.095703 C 16.677734 18.408703 16.686078 18.642828 16.705078 18.798828 C 16.724078 18.954828 16.762312 19.069625 16.820312 19.140625 C 16.878312 19.212625 16.967844 19.248047 17.089844 19.248047 C 17.253844 19.248047 17.366734 19.183641 17.427734 19.056641 C 17.488734 18.929641 17.522344 18.718875 17.527344 18.421875 L 18.474609 18.476562 C 18.479609 18.518563 18.482422 18.578344 18.482422 18.652344 C 18.482422 19.103344 18.358328 19.440109 18.111328 19.662109 C 17.864328 19.885109 17.517406 19.996094 17.066406 19.996094 C 16.525406 19.996094 16.145734 19.825328 15.927734 19.486328 C 15.709734 19.147328 15.601562 18.623109 15.601562 17.912109 L 15.601562 17.060547 C 15.601562 16.328547 15.714453 15.794031 15.939453 15.457031 C 16.164453 15.120031 16.551656 14.951172 17.097656 14.951172 z M 8.4101562 15.044922 L 9.5097656 15.044922 L 9.5097656 18.625 C 9.5097656 18.842 9.5340312 18.997844 9.5820312 19.089844 C 9.6300313 19.182844 9.7083125 19.228516 9.8203125 19.228516 C 9.9153125 19.228516 10.008703 19.199625 10.095703 19.140625 C 10.183703 19.082625 10.246062 19.007969 10.289062 18.917969 L 10.289062 15.044922 L 11.388672 15.044922 L 11.388672 19.919922 L 11.386719 19.919922 L 10.527344 19.919922 L 10.433594 19.322266 L 10.408203 19.322266 C 10.174203 19.774266 9.8244219 20 9.3574219 20 C 9.0334219 20 8.7965781 19.893641 8.6425781 19.681641 C 8.4885781 19.469641 8.4101563 19.1375 8.4101562 18.6875 L 8.4101562 15.044922 z M 17.074219 15.693359 C 16.957219 15.693359 16.870453 15.728875 16.814453 15.796875 C 16.758453 15.865875 16.721125 15.978766 16.703125 16.134766 C 16.684125 16.290766 16.675781 16.527703 16.675781 16.845703 L 16.675781 17.195312 L 17.478516 17.195312 L 17.478516 16.845703 C 17.478516 16.532703 17.468266 16.296766 17.447266 16.134766 C 17.427266 15.972766 17.388031 15.858969 17.332031 15.792969 C 17.276031 15.726969 17.191219 15.693359 17.074219 15.693359 z M 13.591797 15.728516 C 13.485797 15.728516 13.388828 15.770469 13.298828 15.855469 C 13.208828 15.940469 13.144422 16.049641 13.107422 16.181641 L 13.107422 18.949219 C 13.155422 19.034219 13.217922 19.097625 13.294922 19.140625 C 13.371922 19.182625 13.453922 19.205078 13.544922 19.205078 C 13.661922 19.205078 13.753266 19.163125 13.822266 19.078125 C 13.891266 18.993125 13.941703 18.850437 13.970703 18.648438 C 13.999703 18.447437 14.013672 18.1675 14.013672 17.8125 L 14.013672 17.185547 C 14.013672 16.803547 14.002516 16.509734 13.978516 16.302734 C 13.954516 16.095734 13.911562 15.946375 13.851562 15.859375 C 13.790563 15.772375 13.703797 15.728516 13.591797 15.728516 z" })
);
const AmazonIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z" })
);
const AppleIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" })
);
const BandcampIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M0 18.75l7.437-13.5H24l-7.438 13.5H0z" })
);
const InstagramIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" })
);
const LinkedinIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
);
const PatreonIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z" })
);
const PinterestIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" })
);
const SnapchatIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" })
);
const SoundcloudIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623c0-.075-.06-.135-.135-.135l-.031-.017zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914c-.105 0-.195.09-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c.014.119.104.225.225.225.119 0 .225-.105.225-.225l.195-2.52-.196-5.275c0-.12-.105-.225-.225-.225m1.245.045c0-.135-.105-.24-.24-.24-.119 0-.24.105-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24s.24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134c-.135 0-.255.119-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.12.255-.27l.15-2.474-.165-5.307c0-.148-.12-.27-.271-.27m1.005.166c-.164 0-.284.135-.284.285l-.103 5.143.135 2.474c0 .149.119.277.284.277.149 0 .271-.12.284-.285l.121-2.443-.135-5.112c-.012-.164-.135-.285-.285-.285m1.184-.945c-.045-.029-.105-.044-.165-.044s-.119.015-.165.044c-.09.054-.149.15-.149.255v.061l-.104 6.048.115 2.449v.008c.008.06.03.135.074.18.058.061.142.104.234.104.08 0 .158-.044.209-.09.058-.06.091-.135.091-.225l.015-.24.117-2.203-.135-6.086c0-.104-.061-.193-.135-.239l-.002-.022zm1.006-.547c-.045-.045-.09-.061-.15-.061-.074 0-.149.016-.209.061-.075.061-.119.15-.119.24v.029l-.137 6.609.076 1.215.061 1.185c0 .164.148.314.328.314.181 0 .33-.15.33-.329l.15-2.414-.15-6.637c0-.12-.074-.221-.165-.277m8.934 3.777c-.405 0-.795.086-1.139.232-.24-2.654-2.46-4.736-5.188-4.736-.659 0-1.305.135-1.889.359-.225.09-.27.18-.285.359v9.368c.016.18.15.33.33.345h8.185C22.681 17.218 24 15.914 24 14.28s-1.319-2.952-2.938-2.952" })
);
const SpotifyIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" })
);
const TelegramIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" })
);
const TiktokIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" })
);
const TwitchIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" })
);
const WhatsappIcon = createSvgIcon(
  /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
);
const socialIcons = [
  ["amazon", AmazonIcon],
  ["apple", AppleIcon],
  ["bandcamp", BandcampIcon],
  ["envato", EnvatoIcon],
  ["facebook", FacebookIcon$1],
  ["instagram", InstagramIcon],
  ["linkedin", LinkedinIcon],
  ["patreon", PatreonIcon],
  ["pinterest", PinterestIcon],
  ["snapchat", SnapchatIcon],
  ["soundcloud", SoundcloudIcon],
  ["spotify", SpotifyIcon],
  ["telegram", TelegramIcon],
  ["tiktok", TiktokIcon],
  ["twitch", TwitchIcon],
  ["twitter", TwitterIcon],
  ["whatsapp", WhatsappIcon],
  ["youtube", YoutubeIcon]
];
const entries = Object.entries(Icons).map(([name, cmp]) => {
  const prettyName = name.replace("Icon", "").replace(/[A-Z]/g, (letter) => ` ${letter.toLowerCase()}`);
  return [prettyName, cmp];
}).concat(socialIcons);
function IconList({ onIconSelected, searchQuery }) {
  const { contains } = useFilter({
    sensitivity: "base"
  });
  const matchedEntries = entries.filter(
    ([name]) => contains(name, searchQuery)
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      ButtonBase,
      {
        className: clsx(iconGridStyle.button, "diagonal-lines"),
        onClick: (e) => {
          onIconSelected(null);
        },
        children: /* @__PURE__ */ jsx(Trans, { message: "None" })
      }
    ),
    matchedEntries.map(([name, Icon]) => /* @__PURE__ */ jsxs(
      ButtonBase,
      {
        className: iconGridStyle.button,
        onClick: (e) => {
          const svgTree = elementToTree(
            e.currentTarget.querySelector("svg")
          );
          onIconSelected(svgTree.child);
        },
        children: [
          /* @__PURE__ */ jsx(Icon, { className: "block text-muted icon-lg" }),
          /* @__PURE__ */ jsx("span", { className: "mt-16 block whitespace-normal text-xs capitalize", children: name })
        ]
      },
      name
    ))
  ] });
}
export {
  IconList as default
};
//# sourceMappingURL=icon-list-cbf05d1b.mjs.map
