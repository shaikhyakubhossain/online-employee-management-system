export type btnListType = {
    name: string;
    bg: string;
    base64Icon: string;
    link: string;
    detail: string;
    peopleAddedList: string[];
    role?: string;
};

export type btnList2Type = {
    name: string;
    base64Icon: string;
}

export const btnList: btnListType[] = [
    {
        name: "Dashboard",
        bg: "#",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC40IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE2ODggMUgxNS45NTEzQzE3LjEwMjYgMSAxOC4wMzY1IDEuOTQyMDMgMTguMDM2NSAzLjEwNDE3VjUuOTEwMDJDMTguMDM2NSA3LjA3MTI4IDE3LjEwMjYgOC4wMTQxOSAxNS45NTEzIDguMDE0MTlIMTMuMTY4OEMxMi4wMTY2IDguMDE0MTkgMTEuMDgyNyA3LjA3MTI4IDExLjA4MjcgNS45MTAwMlYzLjEwNDE3QzExLjA4MjcgMS45NDIwMyAxMi4wMTY2IDEgMTMuMTY4OCAxWiIgc3Ryb2tlPSIjMDEwMDhBIiBzdHJva2Utd2lkdGg9IjEuMjc3NzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMDg2MDYgMUg1Ljg2Nzc2QzcuMDE5ODkgMSA3Ljk1MzgyIDEuOTQyMDMgNy45NTM4MiAzLjEwNDE3VjUuOTEwMDJDNy45NTM4MiA3LjA3MTI4IDcuMDE5ODkgOC4wMTQxOSA1Ljg2Nzc2IDguMDE0MTlIMy4wODYwNkMxLjkzMzkzIDguMDE0MTkgMSA3LjA3MTI4IDEgNS45MTAwMlYzLjEwNDE3QzEgMS45NDIwMyAxLjkzMzkzIDEgMy4wODYwNiAxWiIgc3Ryb2tlPSIjMDEwMDhBIiBzdHJva2Utd2lkdGg9IjEuMjc3NzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMDg2MDYgMTEuMDIyM0g1Ljg2Nzc2QzcuMDE5ODkgMTEuMDIyMyA3Ljk1MzgyIDExLjk2NDQgNy45NTM4MiAxMy4xMjc0VjE1LjkzMjRDNy45NTM4MiAxNy4wOTQ1IDcuMDE5ODkgMTguMDM2NSA1Ljg2Nzc2IDE4LjAzNjVIMy4wODYwNkMxLjkzMzkzIDE4LjAzNjUgMSAxNy4wOTQ1IDEgMTUuOTMyNFYxMy4xMjc0QzEgMTEuOTY0NCAxLjkzMzkzIDExLjAyMjMgMy4wODYwNiAxMS4wMjIzWiIgc3Ryb2tlPSIjMDEwMDhBIiBzdHJva2Utd2lkdGg9IjEuMjc3NzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE2ODggMTEuMDIyM0gxNS45NTEzQzE3LjEwMjYgMTEuMDIyMyAxOC4wMzY1IDExLjk2NDQgMTguMDM2NSAxMy4xMjc0VjE1LjkzMjRDMTguMDM2NSAxNy4wOTQ1IDE3LjEwMjYgMTguMDM2NSAxNS45NTEzIDE4LjAzNjVIMTMuMTY4OEMxMi4wMTY2IDE4LjAzNjUgMTEuMDgyNyAxNy4wOTQ1IDExLjA4MjcgMTUuOTMyNFYxMy4xMjc0QzExLjA4MjcgMTEuOTY0NCAxMi4wMTY2IDExLjAyMjMgMTMuMTY4OCAxMS4wMjIzWiIgc3Ryb2tlPSIjMDEwMDhBIiBzdHJva2Utd2lkdGg9IjEuMjc3NzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
        link: "/Dashboard",
        detail: "",
        peopleAddedList: [],
        role: "both"
    },
    {
        name: "Notice",
        bg: "#16BEA6",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjM3MTk1IDE2LjkxOTNDMy42ODQ3NSAxNi45NzI4IDQuMDE3MSAxNyA0LjM2NzMgMTdIMTAuOTMzNUMxMy42NzE0IDE3IDE1LjMgMTUuMzQwOCAxNS4zIDEyLjU3MjRWNC40Mjc2NVY0LjM2MjJDMTUuMjc0NSAxLjYzMiAxMy42NTAyIDAgMTAuOTMzNSAwSDQuMzY3M0MxLjkxNTkgMCAwLjM0NzY1IDEuMzI5NCAwLjA1MSAzLjYxMTY1QzAuMDE3IDMuODcxNzUgMCA0LjE0Mzc1IDAgNC40Mjc2NVYxMi41NzI0QzAgMTQuOTIxOCAxLjE3MTMgMTYuNDY1NCAzLjE4NjY1IDE2Ljg4NDRMMy4zNzE5NSAxNi45MTkzWk0xLjIyMTQ0IDQuNDI3NjVDMS4yMjE0NCAyLjMxMiAyLjI3OTY5IDEuMjM4NDUgNC4zNjcyOSAxLjIzODQ1SDEwLjkyNTlDMTMuMDEyNiAxLjIzODQ1IDE0LjA2NDEgMi4zMTIgMTQuMDY0MSA0LjQyNzY1VjEyLjU3MjRDMTQuMDY0MSAxNC42ODggMTMuMDEyNiAxNS43NjE2IDEwLjkyNTkgMTUuNzYxNkg0LjM2NzI5QzIuMjc5NjkgMTUuNzYxNiAxLjIyMTQ0IDE0LjY4OCAxLjIyMTQ0IDEyLjU3MjRWNC40Mjc2NVoiIGZpbGw9IiMwMTAwOEEiLz4KPHBhdGggb3BhY2l0eT0iMC40IiBkPSJNMTAuNzA0IDExLjQ4MzVDMTEuMDM4OSAxMS40ODM1IDExLjMxMDEgMTEuNzU4OSAxMS4zMTAxIDEyLjA5ODlDMTEuMzEwMSAxMi40Mzg5IDExLjAzODkgMTIuNzE0MyAxMC43MDQgMTIuNzE0M0g0LjU3NDY3QzQuMjM5NzcgMTIuNzE0MyAzLjk2Nzc3IDEyLjQzODkgMy45Njc3NyAxMi4wOTg5QzMuOTY3NzcgMTEuNzU4OSA0LjIzOTc3IDExLjQ4MzUgNC41NzQ2NyAxMS40ODM1SDEwLjcwNFoiIGZpbGw9IiMwMTAwOEEiLz4KPHBhdGggb3BhY2l0eT0iMC40IiBkPSJNMTAuNzA0IDcuODgwMzVDMTAuOTM3OCA3Ljg1NDg1IDExLjE2NjQgNy45NjcwNSAxMS4yOTE0IDguMTY4NUMxMS40MTYzIDguMzcxNjUgMTEuNDE2MyA4LjYyODM1IDExLjI5MTQgOC44MzE1QzExLjE2NjQgOS4wMzI5NSAxMC45Mzc4IDkuMTQ1MTUgMTAuNzA0IDkuMTE5NjVINC41NzQ2OUM0LjI2MzU5IDkuMDgzOTUgNC4wMjgxNCA4LjgxNzkgNC4wMjgxNCA4LjVDNC4wMjgxNCA4LjE4MjEgNC4yNjM1OSA3LjkxNTIgNC41NzQ2OSA3Ljg4MDM1SDEwLjcwNFoiIGZpbGw9IiMwMTAwOEEiLz4KPHBhdGggb3BhY2l0eT0iMC40IiBkPSJNNi45MTM5MiA0LjI4NTcxQzcuMjI1MDIgNC4zMjA1NiA3LjQ2MDQ3IDQuNTg3NDYgNy40NjA0NyA0LjkwNTM2QzcuNDYwNDcgNS4yMjI0MSA3LjIyNTAyIDUuNDg5MzEgNi45MTM5MiA1LjUyNDE2SDQuNTgyMzdDNC4yNzA0MiA1LjQ4OTMxIDQuMDM0OTcgNS4yMjI0MSA0LjAzNDk3IDQuOTA1MzZDNC4wMzQ5NyA0LjU4NzQ2IDQuMjcwNDIgNC4zMjA1NiA0LjU4MjM3IDQuMjg1NzFINi45MTM5MloiIGZpbGw9IiMwMTAwOEEiLz4KPC9zdmc+Cg==",
        link: "/Notice",
        detail: "View all of your notices",
        peopleAddedList: [],
        role: "both"
    },
    {
        name: "Apply for leave",
        bg: "#EE9211",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjk1MTcyIDAuMDA5NTUySDkuNjg3MDdDOS44NjMxMiAwLjAwOTU1MiAxMC4wMzE2IDAuMDgxMzQzMyAxMC4xNTM1IDAuMjA4MzQ0TDE0LjUxOTkgNC43NTY2MkMxNC42MzU1IDQuODc3MDMgMTQuNyA1LjAzNzQ3IDE0LjcgNS4yMDQzOFYxMy4xMDYxQzE0LjcgMTUuMjYwNSAxMi45NTM3IDE3LjEyNDIgMTAuODM4OCAxNy4xMjQySDMuOTUxNzJDMS43MjgxIDE3LjEyNDIgMCAxNS4zNDggMCAxMy4xMDYxVjMuODcwNzZDMCAxLjc0OTA2IDEuODA3NSAwLjAwOTU1MiAzLjk1MTcyIDAuMDA5NTUyWk0xMy40MDYzIDUuNDY0NDlMOS40MTA1OSAxLjMwMjQyTDMuOTUxNzEgMS4zMDMxOUMyLjUxMDc5IDEuMzAzMTkgMS4yOTMwOSAyLjQ3NTA5IDEuMjkzMDkgMy44NzEzVjEzLjEwNjZDMS4yOTMwOSAxNC42NDIyIDIuNDUwMzIgMTUuODMxNiAzLjk1MTcxIDE1LjgzMTZIMTAuODM4OEMxMi4yMiAxNS44MzE2IDEzLjQwNjkgMTQuNTY1IDEzLjQwNjkgMTMuMTA2NkwxMy40MDYzIDUuNDY0NDlaIiBmaWxsPSIjMDEwMDhBIi8+CjxwYXRoIGQ9Ik05LjQ2MDU4IDBDOS43ODc5IDAgMTAuMDU4NCAwLjI0MzIzNiAxMC4xMDEyIDAuNTU4ODE4TDEwLjEwNzEgMC42NDY1NTJWMy4xNTQzMUMxMC4xMDcxIDQuMDIxOTQgMTAuODA5MSA0LjcyNTc2IDExLjY3NTggNC43Mjc1OUwxNC4wMDY4IDQuNzI3MjZDMTQuMzYzMSA0LjcwMzc3IDE0LjY3MSA0Ljk3MzU3IDE0LjY5NDUgNS4zMjk4OEMxNC43MTggNS42ODYxOCAxNC40NDgyIDUuOTk0MDcgMTQuMDkxOSA2LjAxNzU2TDEyLjY1MTYgNi4wMjI0N0MxMi4zNjQgNi4wMjIxMyAxMi4wMzY4IDYuMDIxNTIgMTEuNjczIDYuMDIwNjlDMTAuMTQ3NSA2LjAxNzQ2IDguOTAyNTkgNC44MjE4IDguODE4NTUgMy4zMTY3MUw4LjgxNDAzIDMuMTU0MzFWMC42NDY1NTJDOC44MTQwMyAwLjI4OTQ3MSA5LjEwMzUgMCA5LjQ2MDU4IDBaIiBmaWxsPSIjMDEwMDhBIi8+CjxwYXRoIGQ9Ik05LjI5NjgyIDExLjA0MUM5LjY1MzkgMTEuMDQxIDkuOTQzMzcgMTEuMzMwNSA5Ljk0MzM3IDExLjY4NzZDOS45NDMzNyAxMi4wMTQ5IDkuNzAwMTMgMTIuMjg1NCA5LjM4NDU1IDEyLjMyODJMOS4yOTY4MiAxMi4zMzQxSDQuNjQ0MjNDNC4yODcxNSAxMi4zMzQxIDMuOTk3NjggMTIuMDQ0NiAzLjk5NzY4IDExLjY4NzZDMy45OTc2OCAxMS4zNjAyIDQuMjQwOTIgMTEuMDg5NyA0LjU1NjUgMTEuMDQ2OUw0LjY0NDIzIDExLjA0MUg5LjI5NjgyWiIgZmlsbD0iIzk5OTlEMCIvPgo8cGF0aCBkPSJNNy41MzY5MSA2Ljc3MTkxQzcuODkzOTkgNi43NzE5MSA4LjE4MzQ2IDcuMDYxMzggOC4xODM0NiA3LjQxODQ2QzguMTgzNDYgNy43NDU3OSA3Ljk0MDIyIDguMDE2MyA3LjYyNDY0IDguMDU5MTFMNy41MzY5MSA4LjA2NTAySDQuNjQzODFDNC4yODY3MiA4LjA2NTAyIDMuOTk3MjUgNy43NzU1NCAzLjk5NzI1IDcuNDE4NDZDMy45OTcyNSA3LjA5MTE0IDQuMjQwNDkgNi44MjA2MyA0LjU1NjA3IDYuNzc3ODFMNC42NDM4MSA2Ljc3MTkxSDcuNTM2OTFaIiBmaWxsPSIjOTk5OUQwIi8+Cjwvc3ZnPgo=",
        link: "/ApplyForLeave",
        detail: "Here you can apply for your next leave",
        peopleAddedList: [],
        role: "employee",
    },
    {
        name: "Approve Leave",
        bg: "#EE9211",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjk1MTcyIDAuMDA5NTUySDkuNjg3MDdDOS44NjMxMiAwLjAwOTU1MiAxMC4wMzE2IDAuMDgxMzQzMyAxMC4xNTM1IDAuMjA4MzQ0TDE0LjUxOTkgNC43NTY2MkMxNC42MzU1IDQuODc3MDMgMTQuNyA1LjAzNzQ3IDE0LjcgNS4yMDQzOFYxMy4xMDYxQzE0LjcgMTUuMjYwNSAxMi45NTM3IDE3LjEyNDIgMTAuODM4OCAxNy4xMjQySDMuOTUxNzJDMS43MjgxIDE3LjEyNDIgMCAxNS4zNDggMCAxMy4xMDYxVjMuODcwNzZDMCAxLjc0OTA2IDEuODA3NSAwLjAwOTU1MiAzLjk1MTcyIDAuMDA5NTUyWk0xMy40MDYzIDUuNDY0NDlMOS40MTA1OSAxLjMwMjQyTDMuOTUxNzEgMS4zMDMxOUMyLjUxMDc5IDEuMzAzMTkgMS4yOTMwOSAyLjQ3NTA5IDEuMjkzMDkgMy44NzEzVjEzLjEwNjZDMS4yOTMwOSAxNC42NDIyIDIuNDUwMzIgMTUuODMxNiAzLjk1MTcxIDE1LjgzMTZIMTAuODM4OEMxMi4yMiAxNS44MzE2IDEzLjQwNjkgMTQuNTY1IDEzLjQwNjkgMTMuMTA2NkwxMy40MDYzIDUuNDY0NDlaIiBmaWxsPSIjMDEwMDhBIi8+CjxwYXRoIGQ9Ik05LjQ2MDU4IDBDOS43ODc5IDAgMTAuMDU4NCAwLjI0MzIzNiAxMC4xMDEyIDAuNTU4ODE4TDEwLjEwNzEgMC42NDY1NTJWMy4xNTQzMUMxMC4xMDcxIDQuMDIxOTQgMTAuODA5MSA0LjcyNTc2IDExLjY3NTggNC43Mjc1OUwxNC4wMDY4IDQuNzI3MjZDMTQuMzYzMSA0LjcwMzc3IDE0LjY3MSA0Ljk3MzU3IDE0LjY5NDUgNS4zMjk4OEMxNC43MTggNS42ODYxOCAxNC40NDgyIDUuOTk0MDcgMTQuMDkxOSA2LjAxNzU2TDEyLjY1MTYgNi4wMjI0N0MxMi4zNjQgNi4wMjIxMyAxMi4wMzY4IDYuMDIxNTIgMTEuNjczIDYuMDIwNjlDMTAuMTQ3NSA2LjAxNzQ2IDguOTAyNTkgNC44MjE4IDguODE4NTUgMy4zMTY3MUw4LjgxNDAzIDMuMTU0MzFWMC42NDY1NTJDOC44MTQwMyAwLjI4OTQ3MSA5LjEwMzUgMCA5LjQ2MDU4IDBaIiBmaWxsPSIjMDEwMDhBIi8+CjxwYXRoIGQ9Ik05LjI5NjgyIDExLjA0MUM5LjY1MzkgMTEuMDQxIDkuOTQzMzcgMTEuMzMwNSA5Ljk0MzM3IDExLjY4NzZDOS45NDMzNyAxMi4wMTQ5IDkuNzAwMTMgMTIuMjg1NCA5LjM4NDU1IDEyLjMyODJMOS4yOTY4MiAxMi4zMzQxSDQuNjQ0MjNDNC4yODcxNSAxMi4zMzQxIDMuOTk3NjggMTIuMDQ0NiAzLjk5NzY4IDExLjY4NzZDMy45OTc2OCAxMS4zNjAyIDQuMjQwOTIgMTEuMDg5NyA0LjU1NjUgMTEuMDQ2OUw0LjY0NDIzIDExLjA0MUg5LjI5NjgyWiIgZmlsbD0iIzk5OTlEMCIvPgo8cGF0aCBkPSJNNy41MzY5MSA2Ljc3MTkxQzcuODkzOTkgNi43NzE5MSA4LjE4MzQ2IDcuMDYxMzggOC4xODM0NiA3LjQxODQ2QzguMTgzNDYgNy43NDU3OSA3Ljk0MDIyIDguMDE2MyA3LjYyNDY0IDguMDU5MTFMNy41MzY5MSA4LjA2NTAySDQuNjQzODFDNC4yODY3MiA4LjA2NTAyIDMuOTk3MjUgNy43NzU1NCAzLjk5NzI1IDcuNDE4NDZDMy45OTcyNSA3LjA5MTE0IDQuMjQwNDkgNi44MjA2MyA0LjU1NjA3IDYuNzc3ODFMNC42NDM4MSA2Ljc3MTkxSDcuNTM2OTFaIiBmaWxsPSIjOTk5OUQwIi8+Cjwvc3ZnPgo=",
        link: "/ApproveLeave",
        detail: "Here you can apply for your next leave",
        peopleAddedList: [],
        role: "admin"
    },
    {
        name: "Access/Asset",
        bg: "#21BF07",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjcwMDY5IDBINi4zNjYwM0M3LjE2MTA3IDAgNy45MDk3IDAuMzc0ODE1IDguMzg2MjggMS4wMTEwOUw5LjE0NjQxIDIuMDIzNEM5LjM4ODQzIDIuMzQ1MTkgOS43NjcxIDIuNTM0NzcgMTAuMTY4MiAyLjUzNTU3SDEyLjUyNTVDMTUuNzg1IDIuNTM1NTcgMTcuMjQxNCA0LjI0MzczIDE3LjI0MTQgNy43MzMyNkwxNy4yMTg2IDExLjg3MkMxNy4yMTg2IDE1LjIwMjQgMTUuMTgyMyAxNy4yNDE0IDExLjg1NjMgMTcuMjQxNEg1LjM2OTg3QzIuMDM3NTEgMTcuMjQxNCAwIDE1LjIwMzYgMCAxMS44NzJWNS4zNjkzN0MwIDEuODc1MzggMS40OTEzIDAgNC43MDA2OSAwWk02LjM2NjA0IDEuMjUxMjhINC43MDA3MUMyLjI1MjAyIDEuMjUxMjggMS4yNDk2MiAyLjUxMTg0IDEuMjQ5NjIgNS4zNjkzOFYxMS44NzJDMS4yNDk2MiAxNC41MTIyIDIuNzI3MzQgMTUuOTkwMSA1LjM2OTg4IDE1Ljk5MDFIMTEuODU2M0MxNC40OTIxIDE1Ljk5MDEgMTUuOTY5IDE0LjUxMTMgMTUuOTY5IDExLjg2ODZMMTUuOTkxOCA3LjcyOTgyQzE1Ljk5MTggNC44OTQ3NyAxNS4wNDcyIDMuNzg2ODUgMTIuNTI1NSAzLjc4Njg1TDEwLjE2NjkgMy43ODY4NUM5LjM3MzA1IDMuNzg1MjcgOC42MjU4MiAzLjQxMTE1IDguMTQ3OTMgMi43NzU3Nkw3LjM4NzA1IDEuNzYyNDZDNy4xNDYwMiAxLjQ0MDY2IDYuNzY3NzUgMS4yNTEyOCA2LjM2NjA0IDEuMjUxMjhaIiBmaWxsPSIjMDEwMDhBIi8+CjxwYXRoIG9wYWNpdHk9IjAuNCIgZD0iTTEyLjYwMTUgMTAuMTg4QzEyLjk0NjYgMTAuMTg4IDEzLjIyNjMgMTAuNDY4MSAxMy4yMjYzIDEwLjgxMzZDMTMuMjI2MyAxMS4xMzA0IDEyLjk5MTMgMTEuMzkyMSAxMi42ODYzIDExLjQzMzVMMTIuNjAxNSAxMS40MzkzSDQuNjA5NDJDNC4yNjQzNSAxMS40MzkzIDMuOTg0NjIgMTEuMTU5MSAzLjk4NDYyIDEwLjgxMzZDMy45ODQ2MiAxMC40OTY5IDQuMjE5NjcgMTAuMjM1MSA0LjUyNDY0IDEwLjE5MzdMNC42MDk0MiAxMC4xODhIMTIuNjAxNVoiIGZpbGw9IiMwMTAwOEEiLz4KPC9zdmc+Cg==",
        link: "/Access-Asset",
        detail: "Manage your all access and assets",
        peopleAddedList: [],
        role: "both"
    },
    {
        name: "Salary Slip",
        bg: "#E32CBC",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxOSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC40Ij4KPHBhdGggZD0iTTExLjExNDQgMC4yMjE5MjRDMTEuNDQ5MyAwLjIyMTkyNCAxMS43MjYxIDAuNDcyMTEgMTEuNzcgMC43OTY3MDlMMTEuNzc2IDAuODg2OTQ4VjMuMDMyNzZDMTEuNzc2IDMuNDAwMDQgMTEuNDc5OCAzLjY5Nzc5IDExLjExNDQgMy42OTc3OUMxMC43Nzk1IDMuNjk3NzkgMTAuNTAyNyAzLjQ0NzYgMTAuNDU4OSAzLjEyM0wxMC40NTI4IDMuMDMyNzZWMC44ODY5NDhDMTAuNDUyOCAwLjUxOTY2NSAxMC43NDkgMC4yMjE5MjQgMTEuMTE0NCAwLjIyMTkyNFoiIGZpbGw9IiMwMTAwOEEiLz4KPHBhdGggZD0iTTExLjExNDQgMTIuMjAxQzExLjQ0OTMgMTIuMjAxIDExLjcyNjEgMTIuNDUxMiAxMS43NyAxMi43NzU4TDExLjc3NiAxMi44NjYxVjE0LjY2MDhDMTEuNzc2IDE1LjAyOCAxMS40Nzk4IDE1LjMyNTggMTEuMTE0NCAxNS4zMjU4QzEwLjc3OTUgMTUuMzI1OCAxMC41MDI3IDE1LjA3NTYgMTAuNDU4OSAxNC43NTFMMTAuNDUyOCAxNC42NjA4VjEyLjg2NjFDMTAuNDUyOCAxMi40OTg4IDEwLjc0OSAxMi4yMDEgMTEuMTE0NCAxMi4yMDFaIiBmaWxsPSIjMDEwMDhBIi8+CjxwYXRoIGQ9Ik0xMS4xMTQ0IDQuODhDMTEuNDQ5MyA0Ljg4IDExLjcyNjEgNS4xMzAxOSAxMS43NyA1LjQ1NDc5TDExLjc3NiA1LjU0NTAzVjkuODE5ODFDMTEuNzc2IDEwLjE4NzEgMTEuNDc5OCAxMC40ODQ4IDExLjExNDQgMTAuNDg0OEMxMC43Nzk1IDEwLjQ4NDggMTAuNTAyNyAxMC4yMzQ2IDEwLjQ1ODkgOS45MTAwNUwxMC40NTI4IDkuODE5ODFWNS41NDUwM0MxMC40NTI4IDUuMTc3NzUgMTAuNzQ5IDQuODggMTEuMTE0NCA0Ljg4WiIgZmlsbD0iIzAxMDA4QSIvPgo8L2c+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy41NzE2MiAwSDE1LjM5MzlDMTcuMzY0MSAwIDE4Ljk2NDYgMS41ODg0NyAxOC45NjQ2IDMuNTUyNjFMMTguOTY1NSA1Ljg1MjNDMTguOTY1NyA2LjIxOTY5IDE4LjY2OTQgNi41MTc1OSAxOC4zMDM5IDYuNTE3NTlDMTcuNjA0MiA2LjUxNzU5IDE3LjA0NTQgNy4wNzI2NCAxNy4wNDU0IDcuNzU5NTNDMTcuMDQ1NCA4LjQ0NjE1IDE3LjYwMzkgOS4wMDA1NyAxOC4zMDM5IDkuMDAwNTdDMTguNjY5MyA5LjAwMDU3IDE4Ljk2NTUgOS4yOTgzMSAxOC45NjU1IDkuNjY1NTlWMTEuOTY0NEMxOC45NjU1IDEzLjkyOTEgMTcuMzY1NiAxNS41MTcyIDE1LjM5NDggMTUuNTE3MkgzLjU3MDdDMS41OTk4NyAxNS41MTcyIDUuMTIzMzJlLTA4IDEzLjkyOTEgNS4xMjMzMmUtMDggMTEuOTY0NFY5LjY2NTU5QzUuMTIzMzJlLTA4IDkuMjk4MzEgMC4yOTYyMDMgOS4wMDA1NyAwLjY2MTU4OCA5LjAwMDU3QzEuMzYxNTkgOS4wMDA1NyAxLjkyMDA5IDguNDQ2MTUgMS45MjAwOSA3Ljc1OTUzQzEuOTIwMDkgNy4wOTU2NSAxLjM4NDQ2IDYuNTkyNDggMC42NjE1ODggNi41OTI0OEwwLjU3MTc5IDYuNTg2NDFDMC4yNDg3ODYgNi41NDIzNSAtMC4wMDAxMzAzNzcgNi4yNjM5NyA1LjEyMzMyZS0wOCA1LjkyNzJMMC4wMDA5MjAwNzQgMy41NTI4OEMwLjAwMDkyMDA3NCAxLjU4ODQ3IDEuNjAxNDMgMCAzLjU3MTYyIDBaTTE1LjU0MTkgMS4zMzQ3OEwxNS4zOTM5IDEuMzMwMDVIMy41NzE2M0MyLjMyODQ2IDEuMzMwMDUgMS4zMjQxMSAyLjMyNjg1IDEuMzI0MTEgMy41NTMxM0wxLjMyMjMgNS4zNDIzNkwxLjM5NzY1IDUuMzYxMzRDMi40MjI1NSA1LjY0NTMzIDMuMTc1MzkgNi41MTM1MiAzLjIzODkyIDcuNjA4OEwzLjI0MzI3IDcuNzU5NTNDMy4yNDMyNyA4LjkzMDAxIDIuNDY0MjIgOS45MTIzOCAxLjM5NTAyIDEwLjIyNTlMMS4zMjMxOSAxMC4yNDRWMTEuOTY0NEMxLjMyMzE5IDEzLjE0MTcgMi4yNDgyOCAxNC4xMDcxIDMuNDIyNjYgMTQuMTgyNUwzLjU3MDcxIDE0LjE4NzJIMTUuMzk0OEMxNi42Mzg2IDE0LjE4NzIgMTcuNjQyNCAxMy4xOTA3IDE3LjY0MjQgMTEuOTY0NFYxMC4yNDQ5TDE3LjU3MDUgMTAuMjI1OUMxNi41NDc4IDkuOTI2MDIgMTUuNzkwNiA5LjAxNDE3IDE1LjcyNjYgNy45MTExTDE1LjcyMjMgNy43NTk1M0MxNS43MjIzIDYuNTg4OTkgMTYuNTAxNCA1LjYwNjA0IDE3LjU3MDUgNS4yOTIzMkwxNy42NDE1IDUuMjczMkwxNy42NDE0IDMuNTUyODhDMTcuNjQxNCAyLjM3NTg5IDE2LjcxNTggMS40MTAxNiAxNS41NDE5IDEuMzM0NzhaIiBmaWxsPSIjMDEwMDhBIi8+Cjwvc3ZnPgo=",
        link: "/Salary-Slip",
        detail: "Maintain your salary slip",
        peopleAddedList: [],
        role: "both"
    },
    {
        name: "Attendance",
        bg: "#17BCF3",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNiAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjUyNjIyIDE3LjgwNDRDMy44NTMzMyAxNy44NjA0IDQuMjAwODkgMTcuODg4OSA0LjU2NzExIDE3Ljg4ODlIMTEuNDMzOEMxNC4yOTY5IDE3Ljg4ODkgMTYgMTYuMTUzOCAxNiAxMy4yNTg2VjQuNzQxMzFWNC42NzI4NkMxNS45NzMzIDEuODE3NzUgMTQuMjc0NyAwLjExMTA4NCAxMS40MzM4IDAuMTExMDg0SDQuNTY3MTFDMi4wMDM1NiAwLjExMTA4NCAwLjM2MzU1NiAxLjUwMTMxIDAuMDUzMzMzMyAzLjg4Nzk3QzAuMDE3Nzc3OCA0LjE1OTk3IDAgNC40NDQ0MiAwIDQuNzQxMzFWMTMuMjU4NkMwIDE1LjcxNTUgMS4yMjQ4OSAxNy4zMjk4IDMuMzMyNDQgMTcuNzY4TDMuNTI2MjIgMTcuODA0NFpNMS4yNzcyOSA0Ljc0MTNDMS4yNzcyOSAyLjUyODg1IDIuMzgzOTYgMS40MDYxOSA0LjU2NzA3IDEuNDA2MTlIMTEuNDI1N0MxMy42MDggMS40MDYxOSAxNC43MDc1IDIuNTI4ODUgMTQuNzA3NSA0Ljc0MTNWMTMuMjU4NkMxNC43MDc1IDE1LjQ3MTEgMTMuNjA4IDE2LjU5MzcgMTEuNDI1NyAxNi41OTM3SDQuNTY3MDdDMi4zODM5NiAxNi41OTM3IDEuMjc3MjkgMTUuNDcxMSAxLjI3NzI5IDEzLjI1ODZWNC43NDEzWiIgZmlsbD0iIzAxMDA4QSIvPgo8cGF0aCBvcGFjaXR5PSIwLjQiIGQ9Ik0xMC4yMDE0IDEyLjIzOTlIMTEuNjYyOEw4LjYyMzUgNC45NjQ2NEg3LjE1MTUxTDQuMTEyMjIgMTIuMjM5OUg1LjU4NDIxTDYuMTM0ODggMTAuOTI2N0g5LjY1MDcxTDEwLjIwMTQgMTIuMjM5OVpNNi42MTE0MiA5Ljc4MzAyTDcuODkyOCA2LjcyMjU1TDkuMTc0MTcgOS43ODMwMkg2LjYxMTQyWiIgZmlsbD0iIzAxMDA4QSIvPgo8L3N2Zz4K",
        link: "/Attendance",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        peopleAddedList: [],
        role: "both"
    },
    {
        name: "Holiday",
        bg: "#3229E1",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC44ODIxIDE2Ljg5MjJDMTYuNjA1MSAxNi44OTIyIDE4IDE1LjQ5NjQgMTggMTMuNzc0M1YxMS4yOTMyQzE2Ljg2MDUgMTEuMjkzMiAxNS45NDE2IDEwLjM3NDMgMTUuOTQxNiA5LjIzNTc5QzE1Ljk0MTYgOC4wOTYzMyAxNi44NjA1IDcuMTc4MzMgMTggNy4xNzgzM0wxNy45OTgyIDQuNjk0NDlDMTcuOTk4MiAyLjk3MjQ0IDE2LjYwMzIgMS41NzY2IDE0Ljg4MTIgMS41NzY2SDQuMTE4ODFDMi4zOTY3NiAxLjU3NjYgMS4wMDA5MiAyLjk3MjQ0IDEuMDAwOTIgNC42OTQ0OUwxIDcuMjU4MjdDMi4xMzg1NCA3LjI1ODI3IDMuMDU3NDYgOC4wOTYzMyAzLjA1NzQ2IDkuMjM1NzlDMy4wNTc0NiAxMC4zNzQzIDIuMTM4NTQgMTEuMjkzMiAxIDExLjI5MzJWMTMuNzc0M0MxIDE1LjQ5NjQgMi4zOTQ5MiAxNi44OTIyIDQuMTE2OTcgMTYuODkyMkgxNC44ODIxWiIgc3Ryb2tlPSIjMDEwMDhBIiBzdHJva2Utd2lkdGg9IjEuMzc4MzgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBvcGFjaXR5PSIwLjQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS40OTk1NiAxMC44NjE4TDExLjA5ODUgMTEuNzAyNkMxMS4yNDgzIDExLjc4MDcgMTEuNDIzOCAxMS42NTM5IDExLjM5NTMgMTEuNDg3NkwxMS4wODkzIDkuNzA1ODJMMTIuMzg0IDguNDQ1OThDMTIuNTA1MyA4LjMyNzQ0IDEyLjQzODMgOC4xMjI1MiAxMi4yNzEgOC4wOTc3MUwxMC40ODI4IDcuODM3NjZMOS42ODI0MyA2LjIxNjY4QzkuNjA3OTkgNi4wNjUwNiA5LjM5MjA1IDYuMDY1MDYgOS4zMTY3IDYuMjE2NjhMOC41MTYzMiA3LjgzNzY2TDYuNzI5MDIgOC4wOTc3MUM2LjU2MTc4IDguMTIyNTIgNi40OTQ3IDguMzI3NDQgNi42MTU5OSA4LjQ0NTk4TDcuOTA5ODMgOS43MDU4Mkw3LjYwMzgzIDExLjQ4NzZDNy41NzUzNCAxMS42NTM5IDcuNzUwODYgMTEuNzgwNyA3LjkwMDY0IDExLjcwMjZMOS40OTk1NiAxMC44NjE4WiIgc3Ryb2tlPSIjMDEwMDhBIiBzdHJva2Utd2lkdGg9IjEuMzc4MzgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
        link: "/Holiday",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        peopleAddedList: [],
        role: "both"
    },
    {
        name: "Employee detail",
        bg: "#837425",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxNSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNy41MTcwOCIgY3k9IjUuMzQzOTIiIHI9IjQuMTA4NTciIHN0cm9rZT0iIzAxMDA4QSIgc3Ryb2tlLXdpZHRoPSIxLjI4OTgzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggb3BhY2l0eT0iMC40IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuMDAwMDEgMTUuMTY2N0MwLjk5ODkxIDE0Ljg3NzkgMS4wNjM1MSAxNC41OTI2IDEuMTg4OTEgMTQuMzMyNEMxLjU4MjQ1IDEzLjU0NTMgMi42OTIyNCAxMy4xMjgyIDMuNjEzMTMgMTIuOTM5M0M0LjI3NzI3IDEyLjc5NzYgNC45NTA1OCAxMi43MDI5IDUuNjI4MDYgMTIuNjU1OUM2Ljg4MjM1IDEyLjU0NTggOC4xNDM4OSAxMi41NDU4IDkuMzk4MTggMTIuNjU1OUMxMC4wNzU2IDEyLjcwMzQgMTAuNzQ4OSAxMi43OTgxIDExLjQxMzEgMTIuOTM5M0MxMi4zMzQgMTMuMTI4MiAxMy40NDM4IDEzLjUwNiAxMy44MzczIDE0LjMzMjRDMTQuMDg5NSAxNC44NjI4IDE0LjA4OTUgMTUuNDc4NSAxMy44MzczIDE2LjAwODlDMTMuNDQzOCAxNi44MzUzIDEyLjMzNCAxNy4yMTMxIDExLjQxMzEgMTcuMzk0MkMxMC43NDk3IDE3LjU0MTggMTAuMDc2MiAxNy42MzkxIDkuMzk4MTggMTcuNjg1NEM4LjM3NzI5IDE3Ljc3MTkgNy4zNTE2MyAxNy43ODc3IDYuMzI4NTYgMTcuNzMyNkM2LjA5MjQ0IDE3LjczMjYgNS44NjQxOCAxNy43MzI2IDUuNjI4MDYgMTcuNjg1NEM0Ljk1MjU4IDE3LjYzOTcgNC4yODE2IDE3LjU0MjMgMy42MjEgMTcuMzk0MkMyLjY5MjI0IDE3LjIxMzEgMS41OTAzMyAxNi44MzUzIDEuMTg4OTEgMTYuMDA4OUMxLjA2NDE1IDE1Ljc0NTcgMC45OTk2MTUgMTUuNDU4IDEuMDAwMDEgMTUuMTY2N1oiIHN0cm9rZT0iIzAxMDA4QSIgc3Ryb2tlLXdpZHRoPSIxLjI4OTgzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
        link: "/EmployeeDetail",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        peopleAddedList: [],
        role: "admin"
    },
    {
        name: "Calendar",
        bg: "#E41E1E",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi43NDc2IDAuNTcyODU1QzEyLjcwNCAwLjI0OTM0NyAxMi40Mjg5IDAgMTIuMDk1OSAwQzExLjczMjcgMCAxMS40MzgyIDAuMjk2NzQzIDExLjQzODIgMC42NjI3OTJWMS4zOTU1N0g1LjY2OTc0VjAuNjYyNzkyTDUuNjYzNzMgMC41NzI4NTVDNS42MjAxOCAwLjI0OTM0NyA1LjM0NTAxIDAgNS4wMTIwNSAwQzQuNjQ4ODIgMCA0LjM1NDM2IDAuMjk2NzQzIDQuMzU0MzYgMC42NjI3OTJWMS40MTIwMkMxLjY1OTIyIDEuNTk3NjQgMCAzLjM0MzkyIDAgNi4xNjE0OVYxNC4xNTg5QzAgMTcuMTgyOSAxLjg2MDQyIDE5IDQuODQxNDQgMTlIMTIuMjU4NUMxNS4yNDMgMTkgMTcuMDk5OSAxNy4yMTMzIDE3LjA5OTkgMTQuMjI1N1Y2LjE2MTQ5QzE3LjEwODUgMy4zNDI4OSAxNS40NTQ2IDEuNTk3MDkgMTIuNzUzNiAxLjQxMTk0VjAuNjYyNzkyTDEyLjc0NzYgMC41NzI4NTVaTTExLjQzODIgMi43MjExNFYzLjU3MDkyTDExLjQ0NDIgMy42NjA4NkMxMS40ODc4IDMuOTg0MzcgMTEuNzYyOSA0LjIzMzcxIDEyLjA5NTkgNC4yMzM3MUMxMi40NTkxIDQuMjMzNzEgMTIuNzUzNiAzLjkzNjk3IDEyLjc1MzYgMy41NzA5MlYyLjc0MDczQzE0LjcxODggMi45MDQyMiAxNS43OTA4IDQuMDg3NTggMTUuNzg0NSA2LjE1OTQ2VjYuNTQzM0gxLjMxNTM0VjYuMTYxNDlDMS4zMTUzNCA0LjA5MDkyIDIuMzkzMjcgMi45MDUwNSA0LjM1NDM2IDIuNzQwODZWMy41NzA5Mkw0LjM2MDM2IDMuNjYwODZDNC40MDM5MSAzLjk4NDM3IDQuNjc5MDkgNC4yMzM3MSA1LjAxMjA1IDQuMjMzNzFDNS4zNzUyOCA0LjIzMzcxIDUuNjY5NzQgMy45MzY5NyA1LjY2OTc0IDMuNTcwOTJWMi43MjExNEgxMS40MzgyWk0xLjMxNTM0IDcuODY4ODhWMTQuMTU4OUMxLjMxNTM0IDE2LjQ0MTMgMi41Nzc4MSAxNy42NzQ0IDQuODQxNDEgMTcuNjc0NEgxMi4yNTg0QzE0LjUyOTggMTcuNjc0NCAxNS43ODQ1IDE2LjQ2NzEgMTUuNzg0NSAxNC4yMjU3TDE1Ljc4NDUgNy44Njg4OEgxLjMxNTM0Wk0xMy4xMTExIDEwLjY1NzRDMTMuMTExMSAxMC4yOTEzIDEyLjgxNjcgOS45OTQ1OCAxMi40NTM0IDkuOTk0NThMMTIuMzU2MSAxMC4wMDA2QzEyLjAzNSAxMC4wNDQ1IDExLjc4NzYgMTAuMzIxOCAxMS43ODc2IDEwLjY1NzRDMTEuNzg3NiAxMS4wMjM0IDEyLjA4MjEgMTEuMzIwMiAxMi40NTM0IDExLjMyMDJMMTIuNTQyNyAxMS4zMTQxQzEyLjg2MzcgMTEuMjcwMiAxMy4xMTExIDEwLjk5MjkgMTMuMTExMSAxMC42NTc0Wk04LjU2MjEzIDkuOTk0NThDOC45MjUzNiA5Ljk5NDU4IDkuMjE5ODIgMTAuMjkxMyA5LjIxOTgyIDEwLjY1NzRDOS4yMTk4MiAxMC45OTI5IDguOTcyMzkgMTEuMjcwMiA4LjY1MTM3IDExLjMxNDFMOC41NjIxMyAxMS4zMjAyQzguMTkwNzcgMTEuMzIwMiA3Ljg5NjMyIDExLjAyMzQgNy44OTYzMiAxMC42NTc0QzcuODk2MzIgMTAuMzIxOCA4LjE0Mzc0IDEwLjA0NDUgOC40NjQ3NiAxMC4wMDA2TDguNTYyMTMgOS45OTQ1OFpNNS4zMjA0NiAxMC42NTc0QzUuMzIwNDYgMTAuMjkxMyA1LjAyNjAxIDkuOTk0NTggNC42NjI3NyA5Ljk5NDU4TDQuNTY1NDEgMTAuMDAwNkM0LjI0NDM5IDEwLjA0NDUgMy45OTY5NiAxMC4zMjE4IDMuOTk2OTYgMTAuNjU3NEMzLjk5Njk2IDExLjAyMzQgNC4yOTE0MiAxMS4zMjAyIDQuNjU0NjUgMTEuMzIwMkw0Ljc1MjAyIDExLjMxNDFDNS4wNzMwNCAxMS4yNzAyIDUuMzIwNDYgMTAuOTkyOSA1LjMyMDQ2IDEwLjY1NzRaTTEyLjQ1MzQgMTMuNDI5MkMxMi44MTY3IDEzLjQyOTIgMTMuMTExMSAxMy43MjYgMTMuMTExMSAxNC4wOTJDMTMuMTExMSAxNC40Mjc2IDEyLjg2MzcgMTQuNzA0OSAxMi41NDI3IDE0Ljc0ODhMMTIuNDUzNCAxNC43NTQ4QzEyLjA4MjEgMTQuNzU0OCAxMS43ODc2IDE0LjQ1ODEgMTEuNzg3NiAxNC4wOTJDMTEuNzg3NiAxMy43NTY1IDEyLjAzNSAxMy40NzkyIDEyLjM1NjEgMTMuNDM1M0wxMi40NTM0IDEzLjQyOTJaTTkuMjE5ODIgMTQuMDkyQzkuMjE5ODIgMTMuNzI2IDguOTI1MzYgMTMuNDI5MiA4LjU2MjEzIDEzLjQyOTJMOC40NjQ3NiAxMy40MzUzQzguMTQzNzQgMTMuNDc5MiA3Ljg5NjMyIDEzLjc1NjUgNy44OTYzMiAxNC4wOTJDNy44OTYzMiAxNC40NTgxIDguMTkwNzcgMTQuNzU0OCA4LjU2MjEzIDE0Ljc1NDhMOC42NTEzNyAxNC43NDg4QzguOTcyMzkgMTQuNzA0OSA5LjIxOTgyIDE0LjQyNzYgOS4yMTk4MiAxNC4wOTJaTTQuNjYyNzcgMTMuNDI5MkM1LjAyNjAxIDEzLjQyOTIgNS4zMjA0NiAxMy43MjYgNS4zMjA0NiAxNC4wOTJDNS4zMjA0NiAxNC40Mjc2IDUuMDczMDQgMTQuNzA0OSA0Ljc1MjAyIDE0Ljc0ODhMNC42NTQ2NSAxNC43NTQ4QzQuMjkxNDIgMTQuNzU0OCAzLjk5Njk2IDE0LjQ1ODEgMy45OTY5NiAxNC4wOTJDMy45OTY5NiAxMy43NTY1IDQuMjQ0MzkgMTMuNDc5MiA0LjU2NTQxIDEzLjQzNTNMNC42NjI3NyAxMy40MjkyWiIgZmlsbD0iIzAxMDA4QSIvPgo8L3N2Zz4K",
        link: "/Calendar",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        peopleAddedList: [],
        role: "both"
    },
    {
        name: "Resign",
        bg: "#1D68D8",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05Ljc2NTMgMS4wMTA1Nkg0LjIwNDg2QzIuNDgyOSAxLjAxMDU2IDEgMi40MDU2OSAxIDQuMTI3NjVWMTMuMTk2NEMxIDE1LjAxNTMgMi4zODU5MyAxNi4zNTE5IDQuMjA0ODYgMTYuMzUxOUgxMC44ODIxQzEyLjYwNCAxNi4zNTE5IDE0IDE0LjkxODQgMTQgMTMuMTk2NFY1LjQyMDhMOS43NjUzIDEuMDEwNTZaIiBzdHJva2U9IiMwMTAwOEEiIHN0cm9rZS13aWR0aD0iMS4yNTM4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjU0NTcyIDFWMy40MzE2NUM5LjU0NTcyIDQuNjE4NjMgMTAuNTA2MiA1LjU4MTYgMTEuNjkzMiA1LjU4NDFDMTIuNzkzMiA1LjU4NjYxIDEzLjkxOTIgNS41ODc0NSAxMy45OTUyIDUuNTgyNDMiIHN0cm9rZT0iIzAxMDA4QSIgc3Ryb2tlLXdpZHRoPSIxLjI1Mzg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggb3BhY2l0eT0iMC40IiBkPSJNOS4zOTU1NCAxMC4xOTI0SDUuMjk4NzciIHN0cm9rZT0iIzAxMDA4QSIgc3Ryb2tlLXdpZHRoPSIxLjI1Mzg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
        link: "/Resign",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        peopleAddedList: [],
        role: "both"
    },
];

export const btnList2: btnList2Type[] = [
    {
        name: "Logout",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC40IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMi4wMTkyM0MwIDAuOTA0MDM5IDAuOTA0MDM5IDAgMi4wMTkyMyAwSDQuOTAzODVDNS4zODE3OCAwIDUuNzY5MjMgMC4zODc0NSA1Ljc2OTIzIDAuODY1Mzg1QzUuNzY5MjMgMS4zNDMzMiA1LjM4MTc4IDEuNzMwNzcgNC45MDM4NSAxLjczMDc3SDIuMDE5MjNDMS44NTk5MiAxLjczMDc3IDEuNzMwNzcgMS44NTk5MiAxLjczMDc3IDIuMDE5MjNWMTQuMTM0NkMxLjczMDc3IDE0LjI5NCAxLjg1OTkyIDE0LjQyMzEgMi4wMTkyMyAxNC40MjMxSDQuOTAzODVDNS4zODE3OCAxNC40MjMxIDUuNzY5MjMgMTQuODEwNSA1Ljc2OTIzIDE1LjI4ODVDNS43NjkyMyAxNS43NjY0IDUuMzgxNzggMTYuMTUzOCA0LjkwMzg1IDE2LjE1MzhIMi4wMTkyM0MwLjkwNDAzOSAxNi4xNTM4IDAgMTUuMjQ5OCAwIDE0LjEzNDZWMi4wMTkyM1pNNy41Njk5OSA3LjIxMTU0TDkuODQyNjUgNC45Mzg4NEMxMC4xODA2IDQuNjAwODkgMTAuMTgwNiA0LjA1Mjk1IDkuODQyNjUgMy43MTVDOS41MDQ2OSAzLjM3NzA1IDguOTU2OCAzLjM3NzA1IDguNjE4ODUgMy43MTVMNC44Njg4NSA3LjQ2NUM0LjUzMDkgNy44MDI5NSA0LjUzMDkgOC4zNTA4OSA0Ljg2ODg1IDguNjg4ODRMOC42MTg4NSAxMi40Mzg4QzguOTU2OCAxMi43NzY4IDkuNTA0NjkgMTIuNzc2OCA5Ljg0MjY1IDEyLjQzODhDMTAuMTgwNiAxMi4xMDA4IDEwLjE4MDYgMTEuNTUzIDkuODQyNjUgMTEuMjE1TDcuNTY5OTkgOC45NDIzMUgxNC4xMzQ2QzE0LjYxMjUgOC45NDIzMSAxNSA4LjU1NDg2IDE1IDguMDc2OTJDMTUgNy41OTg5OCAxNC42MTI1IDcuMjExNTQgMTQuMTM0NiA3LjIxMTU0SDcuNTY5OTlaIiBmaWxsPSIjMDEwMDhBIi8+Cjwvc3ZnPgo="
    },
    {
        name: "Collapse",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguOTk5OTkgMC44MDAwNDlMMS43OTk5OSA4LjAwMDA1TDguOTk5OTkgMTUuMiIgc3Ryb2tlPSIjMDEwMDhBIiBzdHJva2Utd2lkdGg9IjEuOCIvPgo8L3N2Zz4K",
    },
]

export const navRight: btnListType[] = [
    {
        name: "notification",
        bg: "bg-red-500",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxOSAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjAwMDgzIDEyLjc4NzFWMTIuNTY4MUMxLjAzMjk1IDExLjkyMDIgMS4yNDA2IDExLjI5MjUgMS42MDIzNiAxMC43NDk2QzIuMjA0NSAxMC4wOTc1IDIuNjE2NyA5LjI5ODMxIDIuNzk1NzEgOC40MzU5OEMyLjc5NTcxIDcuNzY5NSAyLjc5NTcxIDcuMDkzNSAyLjg1MzkzIDYuNDI3MDNDMy4xNTQ2OSAzLjIxODQyIDYuMzI3MjggMSA5LjQ2MTA2IDFIOS41Mzg2N0MxMi42NzI1IDEgMTUuODQ1IDMuMjE4NDIgMTYuMTU1NSA2LjQyNzAzQzE2LjIxMzcgNy4wOTM1IDE2LjE1NTUgNy43Njk1IDE2LjIwNCA4LjQzNTk4QzE2LjM4NTQgOS4zMDAzIDE2Ljc5NzIgMTAuMTAxOSAxNy4zOTc0IDEwLjc1OTFDMTcuNzYxOCAxMS4yOTcyIDE3Ljk2OTggMTEuOTIyNyAxNy45OTg5IDEyLjU2ODFWMTIuNzc3NkMxOC4wMjA2IDEzLjY0OCAxNy43MjA4IDE0LjQ5NjggMTcuMTU0OCAxNS4xNjc0QzE2LjQwNyAxNS45NTE1IDE1LjM5MjEgMTYuNDM5MyAxNC4zMDI0IDE2LjUzODRDMTEuMTA3IDE2Ljg4MTIgNy44ODMwMyAxNi44ODEyIDQuNjg3NjIgMTYuNTM4NEMzLjU5OTE0IDE2LjQzNSAyLjU4NTc2IDE1Ljk0NzkgMS44MzUyMSAxNS4xNjc0QzEuMjc4IDE0LjQ5NjMgMC45ODIyNDEgMTMuNjUyNiAxLjAwMDgzIDEyLjc4NzFaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03LjA1NDkzIDE5Ljg1MThDNy41NTQyMSAyMC40Nzg0IDguMjg3MzkgMjAuODg0IDkuMDkyMjIgMjAuOTc4N0M5Ljg5NzA2IDIxLjA3MzQgMTAuNzA3MiAyMC44NDk1IDExLjM0MzMgMjAuMzU2NEMxMS41Mzg5IDIwLjIxMDYgMTEuNzE0OSAyMC4wNDEgMTEuODY3MiAxOS44NTE4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
        link: "/Notification",
        detail: "View all employees",
        peopleAddedList: [""]
    },
    {
        name: "settings",
        bg: "#E0E0E0",
        base64Icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC41MjgxIDYuMzQ1NTRMMTcuOTA1NyA1LjI2NTQ1QzE3LjM3OTEgNC4zNTE1MyAxNi4yMTIxIDQuMDM2MjQgMTUuMjk3IDQuNTYwNjRWNC41NjA2NEMxNC44NjEzIDQuODE3MjcgMTQuMzQxNSA0Ljg5MDA4IDEzLjg1MjEgNC43NjMwMUMxMy4zNjI4IDQuNjM1OTQgMTIuOTQ0IDQuMzE5NDQgMTIuNjg4MyAzLjg4MzNDMTIuNTIzNyAzLjYwNjA3IDEyLjQzNTMgMy4yOTAzMiAxMi40MzIgMi45Njc5NlYyLjk2Nzk2QzEyLjQ0NjggMi40NTExNSAxMi4yNTE4IDEuOTUwMzMgMTEuODkxNSAxLjU3OTU5QzExLjUzMTEgMS4yMDg4NiAxMS4wMzYgMC45OTk3ODcgMTAuNTE4OSAxSDkuMjY0OTRDOC43NTg0IDAuOTk5OTk0IDguMjcyNzUgMS4yMDE4NCA3LjkxNTQ0IDEuNTYwODdDNy41NTgxMiAxLjkxOTkgNy4zNTg2MSAyLjQwNjUyIDcuMzYxMDUgMi45MTMwNFYyLjkxMzA0QzcuMzQ2MDMgMy45NTg4NSA2LjQ5MzkyIDQuNzk4NzMgNS40NDggNC43OTg2M0M1LjEyNTY1IDQuNzk1MjggNC44MDk4OSA0LjcwNjg3IDQuNTMyNjcgNC41NDIzM1Y0LjU0MjMzQzMuNjE3NSA0LjAxNzk0IDIuNDUwNTUgNC4zMzMyMiAxLjkyMzk3IDUuMjQ3MTRMMS4yNTU3OCA2LjM0NTU0QzAuNzI5ODQ2IDcuMjU4MzIgMS4wNDA4NCA4LjQyNDUzIDEuOTUxNDMgOC45NTQyM1Y4Ljk1NDIzQzIuNTQzMzQgOS4yOTU5NiAyLjkwNzk3IDkuOTI3NTEgMi45MDc5NyAxMC42MTFDMi45MDc5NyAxMS4yOTQ1IDIuNTQzMzQgMTEuOTI2IDEuOTUxNDMgMTIuMjY3N1YxMi4yNjc3QzEuMDQxOTkgMTIuNzkzOSAwLjczMDY2MyAxMy45NTczIDEuMjU1NzggMTQuODY3M1YxNC44NjczTDEuODg3MzYgMTUuOTU2NUMyLjEzNDA4IDE2LjQwMTcgMi41NDgwNCAxNi43MzAyIDMuMDM3NjMgMTYuODY5NEMzLjUyNzIyIDE3LjAwODUgNC4wNTIwOCAxNi45NDY4IDQuNDk2MDYgMTYuNjk3OVYxNi42OTc5QzQuOTMyNTIgMTYuNDQzMyA1LjQ1MjYyIDE2LjM3MzUgNS45NDA3OCAxNi41MDQxQzYuNDI4OTMgMTYuNjM0OCA2Ljg0NDY3IDE2Ljk1NSA3LjA5NTYgMTcuMzkzNkM3LjI2MDEzIDE3LjY3MDggNy4zNDg1NCAxNy45ODY2IDcuMzUxODkgMTguMzA4OVYxOC4zMDg5QzcuMzUxODkgMTkuMzY1NSA4LjIwODM5IDIwLjIyMiA5LjI2NDk0IDIwLjIyMkgxMC41MTg5QzExLjU3MTkgMjAuMjIyIDEyLjQyNjkgMTkuMzcxIDEyLjQzMiAxOC4zMTgxVjE4LjMxODFDMTIuNDI5NSAxNy44MSAxMi42MzAzIDE3LjMyMTkgMTIuOTg5NiAxNi45NjI2QzEzLjM0ODkgMTYuNjAzNCAxMy44MzY5IDE2LjQwMjYgMTQuMzQ1IDE2LjQwNUMxNC42NjY2IDE2LjQxMzYgMTQuOTgxMSAxNi41MDE3IDE1LjI2MDQgMTYuNjYxM1YxNi42NjEzQzE2LjE3MzEgMTcuMTg3MyAxNy4zMzk0IDE2Ljg3NjMgMTcuODY5MSAxNS45NjU3VjE1Ljk2NTdMMTguNTI4MSAxNC44NjczQzE4Ljc4MzIgMTQuNDI5NCAxOC44NTMyIDEzLjkwNzkgMTguNzIyNiAxMy40MTgzQzE4LjU5MjEgMTIuOTI4NyAxOC4yNzE3IDEyLjUxMTMgMTcuODMyNCAxMi4yNTg2VjEyLjI1ODZDMTcuMzkzMiAxMi4wMDU5IDE3LjA3MjggMTEuNTg4NSAxNi45NDIyIDExLjA5ODlDMTYuODExNyAxMC42MDkyIDE2Ljg4MTcgMTAuMDg3NyAxNy4xMzY4IDkuNjQ5ODlDMTcuMzAyNyA5LjM2MDI2IDE3LjU0MjggOS4xMjAxMiAxNy44MzI0IDguOTU0MjNWOC45NTQyM0MxOC43Mzc2IDguNDI0ODIgMTkuMDQ3OCA3LjI2NTQyIDE4LjUyODEgNi4zNTQ2OVY2LjM1NDY5VjYuMzQ1NTRaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjkuODk2NSIgY3k9IjEwLjYxMSIgcj0iMi42MzYxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
        link: "/Settings",
        detail: "settings",
        peopleAddedList: [""]
    }
]