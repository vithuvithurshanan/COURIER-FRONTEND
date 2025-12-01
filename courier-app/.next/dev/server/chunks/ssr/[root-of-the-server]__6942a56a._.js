module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/context/DataContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataProvider",
    ()=>DataProvider,
    "useData",
    ()=>useData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const DataContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function DataProvider({ children }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const defaultClients = [
        {
            id: 1,
            name: 'ABC Corporation',
            contact: 'John Manager',
            email: 'john@abc.com',
            phone: '555-1001',
            address: '123 Business St'
        },
        {
            id: 2,
            name: 'Tech Solutions Ltd',
            contact: 'Sarah Tech',
            email: 'sarah@tech.com',
            phone: '555-1002',
            address: '456 Innovation Ave'
        },
        {
            id: 3,
            name: 'Retail Store Inc',
            contact: 'Mike Retail',
            email: 'mike@retail.com',
            phone: '555-1003',
            address: '789 Commerce Blvd'
        },
        {
            id: 4,
            name: 'Global Imports',
            contact: 'Lisa Global',
            email: 'lisa@global.com',
            phone: '555-1004',
            address: '321 Trade Center'
        }
    ];
    const defaultDrivers = [
        {
            id: 1,
            name: 'John Doe',
            vehicleId: 'VEH-001',
            license: 'DL-12345',
            phone: '555-2001',
            status: 'Available'
        },
        {
            id: 2,
            name: 'Jane Smith',
            vehicleId: 'VEH-002',
            license: 'DL-12346',
            phone: '555-2002',
            status: 'On Delivery'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            vehicleId: 'VEH-003',
            license: 'DL-12347',
            phone: '555-2003',
            status: 'Available'
        },
        {
            id: 4,
            name: 'Sarah Williams',
            vehicleId: 'VEH-004',
            license: 'DL-12348',
            phone: '555-2004',
            status: 'On Delivery'
        }
    ];
    const defaultShipments = [
        {
            id: 'TRK-2024-001',
            sender: 'ABC Corp',
            receiver: 'XYZ Ltd',
            driver: 'John Doe',
            status: 'In Transit'
        },
        {
            id: 'TRK-2024-002',
            sender: 'Tech Solutions',
            receiver: 'Global Inc',
            driver: 'Jane Smith',
            status: 'Picked Up'
        },
        {
            id: 'TRK-2024-003',
            sender: 'Retail Store',
            receiver: 'Customer A',
            driver: 'Mike Johnson',
            status: 'Delivered'
        },
        {
            id: 'TRK-2024-004',
            sender: 'Warehouse B',
            receiver: 'Shop C',
            driver: 'Sarah Williams',
            status: 'In Transit'
        }
    ];
    const defaultStaff = [
        {
            id: 1,
            name: 'Alice Johnson',
            role: 'Manager',
            email: 'alice@courier.com',
            phone: '555-0101',
            status: 'Active'
        },
        {
            id: 2,
            name: 'Bob Smith',
            role: 'Dispatcher',
            email: 'bob@courier.com',
            phone: '555-0102',
            status: 'Active'
        },
        {
            id: 3,
            name: 'Carol White',
            role: 'Warehouse Staff',
            email: 'carol@courier.com',
            phone: '555-0103',
            status: 'Active'
        },
        {
            id: 4,
            name: 'David Brown',
            role: 'Customer Service',
            email: 'david@courier.com',
            phone: '555-0104',
            status: 'Inactive'
        }
    ];
    const defaultSuppliers = [
        {
            id: 1,
            name: 'Packaging Solutions Inc',
            type: 'Packaging',
            contact: 'Tom Pack',
            email: 'tom@packaging.com',
            phone: '555-3001'
        },
        {
            id: 2,
            name: 'Regional Shipping Co',
            type: 'Shipping Agent',
            contact: 'Emma Ship',
            email: 'emma@regional.com',
            phone: '555-3002'
        },
        {
            id: 3,
            name: 'Warehouse Supplies Ltd',
            type: 'Supplies',
            contact: 'Jack Store',
            email: 'jack@warehouse.com',
            phone: '555-3003'
        },
        {
            id: 4,
            name: 'Fleet Maintenance Pro',
            type: 'Maintenance',
            contact: 'Lisa Fix',
            email: 'lisa@fleet.com',
            phone: '555-3004'
        }
    ];
    // Initialize state - try to load from localStorage first, fallback to defaults
    const getInitialData = (key, defaults)=>{
        if ("TURBOPACK compile-time truthy", 1) return defaults;
        //TURBOPACK unreachable
        ;
    };
    const [clients, setClientsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getInitialData('clients', defaultClients));
    const [drivers, setDriversState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getInitialData('drivers', defaultDrivers));
    const [shipments, setShipmentsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getInitialData('shipments', defaultShipments));
    const [staff, setStaffState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getInitialData('staff', defaultStaff));
    const [suppliers, setSuppliersState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getInitialData('suppliers', defaultSuppliers));
    // Mark as mounted for localStorage saves
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    const setClients = (newClients)=>{
        setClientsState(newClients);
        if (mounted) {
            try {
                // Only save if array has items, otherwise remove from localStorage
                if (newClients.length > 0) {
                    localStorage.setItem('clients', JSON.stringify(newClients));
                } else {
                    localStorage.removeItem('clients');
                }
            } catch (error) {
                console.error('Error saving clients:', error);
            }
        }
    };
    const setDrivers = (newDrivers)=>{
        setDriversState(newDrivers);
        if (mounted) {
            try {
                if (newDrivers.length > 0) {
                    localStorage.setItem('drivers', JSON.stringify(newDrivers));
                } else {
                    localStorage.removeItem('drivers');
                }
            } catch (error) {
                console.error('Error saving drivers:', error);
            }
        }
    };
    const setShipments = (newShipments)=>{
        setShipmentsState(newShipments);
        if (mounted) {
            try {
                if (newShipments.length > 0) {
                    localStorage.setItem('shipments', JSON.stringify(newShipments));
                } else {
                    localStorage.removeItem('shipments');
                }
            } catch (error) {
                console.error('Error saving shipments:', error);
            }
        }
    };
    const setStaff = (newStaff)=>{
        setStaffState(newStaff);
        if (mounted) {
            try {
                if (newStaff.length > 0) {
                    localStorage.setItem('staff', JSON.stringify(newStaff));
                } else {
                    localStorage.removeItem('staff');
                }
            } catch (error) {
                console.error('Error saving staff:', error);
            }
        }
    };
    const setSuppliers = (newSuppliers)=>{
        setSuppliersState(newSuppliers);
        if (mounted) {
            try {
                if (newSuppliers.length > 0) {
                    localStorage.setItem('suppliers', JSON.stringify(newSuppliers));
                } else {
                    localStorage.removeItem('suppliers');
                }
            } catch (error) {
                console.error('Error saving suppliers:', error);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DataContext.Provider, {
        value: {
            clients,
            drivers,
            shipments,
            staff,
            suppliers,
            setClients,
            setDrivers,
            setShipments,
            setStaff,
            setSuppliers
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/context/DataContext.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
function useData() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6942a56a._.js.map