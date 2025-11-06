import React, { useState } from 'react';
import Modal from '@/shared_components/Modal/Modal';

interface ListEditorShellProps<T> {
    title: string;
    items: T[];
    onUpdateList: (newList: T[]) => void;
    renderItem: (item: T, index: number, onEdit: () => void, onDelete: () => void) => React.ReactNode;
    renderModalContent: (item: T, onSave: (item: T) => void, onCancel: () => void) => React.ReactNode;
    initialNewItem: T;
}

const ListEditorShell = <T extends { [key: string]: any } & { id?: number },>({
    title,
    items,
    onUpdateList,
    renderItem,
    renderModalContent,
    initialNewItem,
}: ListEditorShellProps<T>) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<T | null>(null);
    const [editingIndex, setEditingIndex] = useState<number>(-1);

    const closeModal = () => setIsModalOpen(false);

    const handleEdit = (item: T, index: number) => {
        setEditingItem(item);
        setEditingIndex(index);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        const newItem = { ...initialNewItem, id: Date.now() } as T;
        setEditingItem(newItem);
        setEditingIndex(-1);
        setIsModalOpen(true);
    };

    const handleDelete = (index: number) => {
        if (window.confirm(`Tem certeza que deseja remover este item de ${title}?`)) {
            const newList = items.filter((_, i) => i !== index);
            onUpdateList(newList);
        }
    };

    const handleSave = (savedItem: T) => {
        let newList: T[];
        if (editingIndex >= 0) {
            newList = items.map((item, i) => (i === editingIndex ? savedItem : item));
        } else {
            newList = [...items, { ...savedItem }];
        }
        onUpdateList(newList);
        closeModal();
    };

    return (
        <div className="list-editor-shell">
            <div className="list-items-container">
                {items.map((item, index) => (
                    <div key={item.id ?? index} className="list-item-wrapper">
                        {renderItem(item, index, () => handleEdit(item, index), () => handleDelete(index))}
                    </div>
                ))}
            </div>
            
            <button className="btn-add-item btn-primary" onClick={handleAdd}>+ Adicionar {title.slice(0, -1)}</button>

            <Modal isOpen={isModalOpen} onClose={closeModal} title={`Editar ${title.toLowerCase().slice(0, -1)}`}>
                {editingItem && renderModalContent(editingItem, handleSave, closeModal)}
            </Modal>
        </div>
    );
};
export default ListEditorShell
