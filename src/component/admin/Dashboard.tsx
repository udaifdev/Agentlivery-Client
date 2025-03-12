import React, { useState, ChangeEvent } from 'react';
import { Search, MoreVertical, Edit, Trash2, ExternalLink } from 'lucide-react';
import AdminLayout from './AdminLayout';


interface ContactData {
    id: string;
    fullName: string;
    organizationName: string;
    email: string;
    phoneNumber: string;
    website: string;
    message: string;
    createdAt: string;
}

const AdminDashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Sample data - replace with your actual data
    const [contacts] = useState<ContactData[]>([
        {
            id: '1',
            fullName: 'John Doe',
            organizationName: 'Tech Solutions Inc',
            email: 'john.doe@techsolutions.com',
            phoneNumber: '+1 (555) 123-4567',
            website: 'https://techsolutions.com',
            message: 'Interested in your services for our upcoming project.',
            createdAt: '2024-02-24'
        },
        {
            id: '2',
            fullName: 'Sarah Johnson',
            organizationName: 'Creative Designs LLC',
            email: 'sarah.j@creativedesigns.com',
            phoneNumber: '+1 (555) 987-6543',
            website: 'https://creativedesigns.com',
            message: 'Looking for a partnership opportunity.',
            createdAt: '2024-02-23'
        },
    ]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredContacts = contacts.filter(contact =>
        Object.values(contact).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="min-h-screen bg-gray-50 p-6    bg-gradient-to-b from-black to-teal-700">
            <AdminLayout>
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-300">Contact Inquiries Dashboard</h1>
                    <p className="mt-2 text-gray-400">Manage and review all contact form submissions</p>
                </div>

                {/* Search and Filters */}
                <div className="mb-6  p-4 rounded-lg shadow-sm">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search inquiries..."
                            className="w-  pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Full Name & Organization
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Contact Details
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Message
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredContacts.map((contact) => (
                                    <tr key={contact.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-gray-900">{contact.fullName}</div>
                                            <div className="text-sm text-gray-500">{contact.organizationName}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">{contact.email}</div>
                                            <div className="text-sm text-gray-500">{contact.phoneNumber}</div>
                                            <a
                                                href={contact.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                                            >
                                                {contact.website.replace('https://', '')}
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900 max-w-xs truncate">
                                                {contact.message}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {new Date(contact.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm font-medium">
                                            <div className="flex items-center justify-end space-x-3">
                                                <button
                                                    className="text-blue-600 hover:text-blue-900"
                                                    onClick={() => console.log('Edit', contact.id)}
                                                >
                                                    <Edit className="h-5 w-5" />
                                                </button>
                                                <button
                                                    className="text-red-600 hover:text-red-900"
                                                    onClick={() => console.log('Delete', contact.id)}
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                                <button className="text-gray-400 hover:text-gray-600">
                                                    <MoreVertical className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Empty State */}
                {filteredContacts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No inquiries found matching your search.</p>
                    </div>
                )}
            </AdminLayout>
        </div>
    );
};

export default AdminDashboard;